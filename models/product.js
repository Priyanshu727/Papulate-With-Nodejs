const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: String,
  subcategory: String,
  extracategory: String,
  subCategorySchema: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subCategorySchema",
    },
  ],
  extraCategorySchema: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "extraCategorySchema",
    },
  ],
});

const productModel = mongoose.model("Product", productSchema);

module.exports = { productModel };
