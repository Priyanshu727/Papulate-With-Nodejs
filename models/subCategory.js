const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  category: String,
  subcategory: String,
  extraCategorySchema: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "extraCategorySchema",
  },
});

const subCategoryModel = mongoose.model("subCategorySchema", subCategorySchema);

module.exports = { subCategoryModel };
