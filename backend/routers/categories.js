const express = require("express");
const router = express.Router();
const { Category } = require("../models/category");
const mongoose = require("mongoose");
router.get("/", async (req, res, next) => {
  const categoryList = await Category.find();
  if (!categoryList)
    res.status(500).json({
      success: false,
    });

  res.status(200).send(categoryList);
});

router.get("/:id", async (req, res, next) => {
  let categoryById = await Category.findById(req.params.id);
  if (!categoryById)
    res.status(500).json({
      message: "The category with the given ID was not found!",
    });

  res.status(200).send(categoryById);
});

router.post("/", (req, res, next) => {
  let category = new Category({
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  });
  category.save().then((createdCategory) => {
    if (!createdCategory) {
      return res
        .status(400)
        .json({ success: false, message: "the category cannot be created!" });
    } else {
      // console.log(createdCategory);
      res.status(201).json({
        success: true,
        message: "Create Category Successfull!",
        category: {
          id: createdCategory._id,
          name: createdCategory.name,
          icon: createdCategory.icon,
          color: createdCategory.color,
        },
      });
    }
  });
});

router.put("/:id", async (req, res, next) => {
  const categoryUpdate = await Category.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  });

  if (!categoryUpdate)
    return res.status(400).json({
      success: false,
      message: "the category cannot be update!",
    });

  res
    .status(200)
    .json({ success: true, message: "the category update successfull!" });
});

router.delete("/:id", (req, res, next) => {
  Category.deleteOne({ _id: req.params.id })
    .then((categoryDetele) => {
      // console.log(categoryDetele);
      if (categoryDetele) {
        return res.status(200).json({
          success: true,
          messages: "the category is deleted!",
        });
      } else {
        return res.status(404).json({
          success: false,
          messages: "the category is not found!",
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
