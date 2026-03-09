const express = require("express");
const {
  registerCompany,
  getCompany,
  getCompanyById,
  updateCompanyInfo,
} = require("../controller/company");
const isAuthenticate = require("../middleware/isAuthenticated");

const router = express.Router();

router.post("/register", isAuthenticate, registerCompany);
router.get("/get", isAuthenticate, getCompany);
router.get("/get/:id", isAuthenticate, getCompanyById);
router.put("/update/:id", isAuthenticate, updateCompanyInfo);

module.exports = router;
