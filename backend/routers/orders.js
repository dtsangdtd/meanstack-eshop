const express = require("express");
const router = express.Router();
const { Order } = require("../models/order");
const { OrderItem } = require("../models/order-item");
router.get("/", async (req, res, next) => {
  const orderList = await Order.find()
    .populate("user")
    .sort({ dateOrdered: -1 });
  if (!orderList)
    return res.status(500).json({
      success: false,
    });

  res.send(orderList);
});

router.post("/", async (req, res, next) => {
  let orderItemIds = Promise.all(
    req.body.orderItems.map(async (orderItem) => {
      let newOrderItem = new OrderItem({
        quantity: orderItem.quantity,
        product: orderItem.product,
      });
      newOrderItem = await newOrderItem.save();
      return newOrderItem._id;
    })
  );
  const orderItemsIdsResolved = await orderItemIds;
  // console.log(orderItemsIdsResolved);
  const totalPrices = await Promise.all(
    orderItemsIdsResolved.map(async (orderItemId) => {
      const orderItem = await OrderItem.findById(orderItemId).populate(
        "product",
        "price"
      );
      const totalPrice = orderItem.product.price * orderItem.quantity;
      return totalPrice;
    })
  );
  const totalPrice = totalPrices.reduce((a, b) => a + b, 0);
  let order = new Order({
    orderItems: orderItemsIdsResolved,
    shippingAddress1: req.body.shippingAddress1,
    shippingAddress2: req.body.shippingAddress2,
    city: req.body.city,
    zip: req.body.zip,
    country: req.body.country,
    phone: req.body.phone,
    status: req.body.status,
    totalPrice: totalPrice,
    user: req.body.user,
  });
  order = await order.save();
  if (!order) return res.status(400).send("The order cannot be created!");

  res.send(order);
});
router.get("/:id", async (req, res, next) => {
  const order = await Order.findById(req.params.id)
    .populate("user")
    .populate({
      path: "orderItems",
      populate: { path: "product", populate: "category" },
    });
  if (!order)
    return res.status(500).json({
      success: false,
    });

  res.send(order);
});

router.put("/:id", async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(req.params.id, {
    status: req.body.status,
  });

  if (!order)
    return res.status(400).json({
      success: false,
      message: "the order cannot be update!",
    });

  res.send(order);
});
router.delete("/:id", (req, res, next) => {
  Order.findByIdAndRemove(req.params.id)
    .then(async (orderDelete) => {
      if (orderDelete) {
        await orderDelete.orderItems.map(async (orderItem) => {
          await OrderItem.findByIdAndRemove(orderItem);
        });
        return res.status(200).json({
          success: true,
          messages: "the order is deleted!",
        });
      } else {
        return res.status(404).json({
          success: false,
          messages: "the order is not found!",
        });
      }
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        error: error,
      });
    });
});

router.get("/get/totalsales", async (req, res, next) => {
  const totalSales = await Order.aggregate([
    {
      $group: { _id: null, totalsales: { $sum: "$totalPrice" } },
    },
  ]);
  if (!totalSales) {
    return res.status(400).send("The order sales cannot be generated");
  }
  res.send({ totalSales: totalSales.pop().totalsales });
});

router.get("/get/count", async (req, res, next) => {
  const orderCount = await Order.countDocuments((count) => count);
  if (!orderCount) {
    res.status(500).json({ success: false });
  }
  res.status(200).json({
    orderCount: orderCount,
  });
});
router.get("/get/userorder/:userId", async (req, res, next) => {
  const userOrderList = await Order.find({ user: req.params.userId })
    .populate({
      path: "orderItems",
      populate: {
        path: "product",
        populate: "category",
      },
    })
    .sort({ dateOrdered: -1 });
  if (!userOrderList) {
    req.status(500).json({ success: false });
  }
  res.status(200).json({ userOrderList: userOrderList });
});

module.exports = router;
