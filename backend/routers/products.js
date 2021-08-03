const express = require("express");
const router = express.Router();
// Model
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const multer = require("multer");

const FILE_TYPE_MIME = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "imgae/jpg": "jpg",
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MIME[file.mimetype];
    let uploadError = new Error("invalid image type");
    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MIME[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

const uploadOptions = multer({ storage: storage });

router.get(`/`, async (req, res, next) => {
  let filter = {};
  if (req.query.categories) {
    filter = { category: req.query.categories.split(",") };
  }
  const productList = await Product.find(filter).populate("category");
  if (!productList) {
    return res.status(500).json({
      success: false,
    });
  }

  res.send(productList);
});

router.get("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).send("Invalid Product Id");
  }
  const product = await Product.findById(req.params.id).populate("category");
  console.log(product);
  if (!product) {
    return res.status(500).json({ success: false, message: "Not found!" });
  }
  res.status(200).json({
    success: true,
    product: product,
  });
});

router.post(`/`, uploadOptions.single("image"), async (req, res, next) => {
  const category = await Category.findById(req.body.category);
  if (!category) return res.status(400).send("Invalid Category");
  const file = req.file;
  if (!file) return res.status(400).send("No image in the request!");
  const fileName = req.file.filename;
  const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    richDescription: req.body.richDescription,
    image: `${basePath}${fileName}`,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    isFeatured: req.body.isFeatured,
  });

  const productCreate = await product.save();
  if (!productCreate) {
    return res.status(500).json({
      success: false,
      message: "Create a new product Fail!",
    });
  }

  res.status(201).json({
    success: true,
    message: "Create a new product successfully!",
    product: productCreate,
  });
});

router.put("/:id", uploadOptions.single("image"), async (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).send("Invalid Product Id");
  } else if (!mongoose.isValidObjectId(req.body.category)) {
    res.status(400).send("Invalid Category Id");
  }
  const category = await Category.findById(req.body.category);
  if (!category) return res.status(400).send("Invalid Category");
  let imagePath;
  if (req.file) {
    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    imagePath = `${basePath}${fileName}`;
  } else {
    imagePath = req.body.image;
  }
  const productUpdate = await Product.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    description: req.body.description,
    richDescription: req.body.richDescription,
    image: imagePath,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    isFeatured: req.body.isFeatured,
  });

  if (!productUpdate) {
    return res.status(400).json({
      success: false,
      message: "the product cannot be update!",
    });
  }
  res.status(200).json({
    success: true,
    message: "the product update successfull!",
    product: productUpdate,
  });
});
router.put(
  "/gallery-images/:id",
  uploadOptions.array("images", 10),
  async (req, res, next) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).send("Invalid Product Id");
    }
    let imagesPath = [];
    const files = req.files;
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    if (files) {
      files.map((file) => {
        imagesPath.push(`${basePath}${file.filename}`);
      });
    }
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        images: imagesPath,
      },
      {
        new: true,
      }
    );
    if (!product) {
      return res.status(400).json({
        success: false,
      });
    }
    res.status(200).json({
      product,
    });
  }
);
router.delete("/:id", (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).send("Invalid Product Id");
  }
  Product.deleteOne({ _id: req.params.id })
    .then((productDelete) => {
      // console.log(categoryDetele);
      if (productDelete) {
        return res.status(200).json({
          success: true,
          messages: "the Product is deleted!",
        });
      } else {
        return res.status(404).json({
          success: false,
          messages: "the Product is not found!",
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

router.get("/get/count", async (req, res, next) => {
  const productCount = await Product.countDocuments((count) => count);
  if (!productCount)
    return res
      .status(500)
      .json({ success: false, message: "Not found any product!" });

  res.status(200).json({
    success: true,
    productCount: productCount,
  });
});

router.get("/get/featured", async (req, res, next) => {
  const product = await Product.find({ isFeatured: true });
  if (!product)
    return res
      .status(500)
      .json({ success: false, message: "Not found any product!" });

  res.status(200).json({
    success: true,
    productFeature: product,
  });
});

router.get("/get/featured/:count", async (req, res, next) => {
  const count = req.params.count ? req.params.count : 0;
  const product = await Product.find({ isFeatured: true }).limit(+count);
  if (!product)
    return res
      .status(500)
      .json({ success: false, message: "Not found any product!" });

  res.send(product);
});
module.exports = router;
