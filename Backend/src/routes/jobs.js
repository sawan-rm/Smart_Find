const express = require("express");
const isAuthenticate = require("../middleware/isAuthenticated");
const {
    postJob,
    getAllJobs,
    getJobById,
    getAdminJob,
} = require("../controller/job");

const router = express.Router();

router.post("/post", isAuthenticate, postJob);
router.get("/get", isAuthenticate, getAllJobs);
router.get("/get/:id", isAuthenticate, getJobById);
router.get("/getAdminJobs", isAuthenticate, getAdminJob);

module.exports = router;
