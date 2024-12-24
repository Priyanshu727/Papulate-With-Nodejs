const mongoose = require("mongoose");

let DataBase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://priyanshumishra7272:ud1G7Uk0U3duqOHs@cluster0.z6i5z.mongodb.net/Product"
    );
    console.log("Database Connected....");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DataBase;
