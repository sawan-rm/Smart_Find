const express = require('express');
const isAuthenticate = require('../middleware/isAuthenticated');
const { ApplyJob, getApplicants, getAppliedJobs, UpdateStatus } = require('../controller/Application');

const router = express.Router();

router.get('/apply/:id', isAuthenticate, ApplyJob);
router.get('/get', isAuthenticate, getAppliedJobs);
router.get('/applicants/:id', isAuthenticate, getApplicants);
router.patch('/update/:id', isAuthenticate, UpdateStatus);

module.exports = router