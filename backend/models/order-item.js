const mongoose = require("mongoose");

const orderItemsSchema = mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});
orderItemsSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
orderItemsSchema.set("toJSON", {
  virtuals: true,
});
module.exports = mongoose.model("OrderItem", orderItemsSchema);
