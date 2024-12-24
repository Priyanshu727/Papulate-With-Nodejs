const Router = require("express");
const {
  home,
  addProductPage,
  addProduct,
  imageUpload,
  getcate,
  signPage,
  adduser,
  loginPage,
  forgotPage,
  otpPage,
  emailVerify,
  optVerify,
  resetPassword,
  resetPage,
  emailVerifyPage,
  deleteData,
  edit,
  update,
  category,
} = require("../controllers/categoryControl");
const passport = require("passport");
const { isAuth } = require("../middleware/middleware");
const router = new Router();

router.get("/", isAuth, home);

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/loginPage",
  })
);

router.get("/loginPage", loginPage);

router.get("/find", getcate);

router.post("/signup", adduser);
router.get("/signPage", signPage);
router.get("/addProductPage", addProductPage);
router.post("/addProduct", imageUpload, addProduct);
router.get("/forgotPage", forgotPage);
router.post("/emailVerify", emailVerify);
router.get("/emailVerify", emailVerifyPage);
router.post("/otpVerify", optVerify);
router.get("/otpVerify", otpPage);
router.post("/resetPassword", resetPassword);
router.get("/resetPassword", resetPage);

router.get("/delete", deleteData);
router.post("/editProduct", imageUpload, update);
router.get("/edit", edit);

module.exports = router;
