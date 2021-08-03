const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/user");

router.get("/", async (req, res, next) => {
  const userList = await User.find().select("-passwordHash");
  if (!userList) {
    return res.status(500).json({
      success: false,
    });
  }
  res.send(userList);
});

router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .select("-passwordHash")
    .then((result) => {
      res.status(200).json({
        success: true,

        user: result,
      });
      console.log(result);
    })
    .catch((error) => {
      res.status(404).json({
        success: false,

        error: error,
      });
    });
});
router.post("/", async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
    street: req.body.street,
    apartment: req.body.apartment,
    zip: req.body.zip,
    city: req.body.city,
    country: req.body.country,
  });
  user = await user.save();

  if (!user) return res.status(400).send("the user cannot be created!");

  res.send(user);
});

router.post("/register", (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    color: req.body.color,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
    street: req.body.street,
    apartment: req.body.apartment,
    zip: req.body.zip,
    city: req.body.city,
    country: req.body.country,
  });
  user
    .save()
    .then((user) => {
      res.status(201).json({
        success: true,
        message: "Đăng ký thành công!",
        user: user,
      });
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        message: "Đăng ký không thành công",
        error: error,
      });
    });
});
router.put("/:id", async (req, res, next) => {
  const userExist = await User.findById(req.params.id);
  let newPassword;
  if (req.body.password) {
    newPassword = bcrypt.hashSync(req.body.password, 10);
  } else {
    newPassword = userExist.passwordHash;
  }
  const user = await User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    color: req.body.color,
    passwordHash: newPassword,
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
    street: req.body.street,
    apartment: req.body.apartment,
    zip: req.body.zip,
    city: req.body.city,
    country: req.body.country,
  });
  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Not found the User!" });
  }
  res
    .status(200)
    .json({ success: true, message: "Update successfull", user: user });
});

router.post("/login", async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  const secret = process.env.secret;
  if (!user) {
    return res.status(400).send("The user not found!");
  }
  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, secret, {
      expiresIn: "1d",
    });
    res.status(200).send({ user: user.email, token });
  } else {
    res.status(400).send("password is wrong!");
  }
});
router.get("/get/count", async (req, res, next) => {
  const userCount = await User.countDocuments((count) => count);
  if (!userCount) {
    return res
      .status(500)
      .json({ success: false, message: "Not found any product!" });
  }
  res.status(200).json({
    success: true,
    productCount: userCount,
  });
});
// DELETE USER
router.delete("/:id", (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).send("Invalid User Id");
  }
  User.deleteOne({ _id: req.params.id })
    .then((userDelete) => {
      // console.log(categoryDetele);
      if (userDelete) {
        return res.status(200).json({
          success: true,
          messages: "the User is deleted!",
        });
      } else {
        return res.status(404).json({
          success: false,
          messages: "the User is not found!",
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
module.exports = router;
