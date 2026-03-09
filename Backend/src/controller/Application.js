const { default: mongoose } = require("mongoose");
const Application = require("../model/Application");
const Company = require("../model/Company");
const Job = require("../model/job");

// const { options } = require("../routes/jobs");

const ApplyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id; //const { id: jobId } = req.id;
        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required",
                success: false,
            });
        }
        // check if the user has already applied for the job
        const existingApplication = await Application.findOne({
            job: jobId,
            applicant: userId,
        });
        if (existingApplication) {
            return res.status(400).json({
                message: "You have applied for this job",
                success: false,
            });
        }
        // check if the jobs  exist
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(400).json({
                message: "Job not found",
                success: false,
            });
        }
        // create a new application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,
        });

        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message: "Job applied Successfully",
            success: true,
        });
    } catch (error) {
        console.error("error:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        // console.log("UserId:", userId);
        const application = await Application.find({ 
            applicant: new mongoose.Types.ObjectId(userId)
         })
            .sort({ createdAt: -1 })
            .populate({
                path: "job",
                options: { sort: { createdAt: -1 } },
                populate: {
                    path: "company",
                    options: { sort: { createdAt: -1 } },
                },
            });
        if (!application) {
            return res.status(404).json({
                message: "No Applications",
                success: false,
            });
        }
        return res.status(200).json({
            application,
            success: true,
        });
    } catch (error) {
        console.error("error:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: "applications",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "applicant",
            },
        });
        if (!job) {
            return res.status(404).json({
                message: "Job Not found",
                success: false,
            });
        }
        return res.status(200).json({
            job,
            success: true,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

const UpdateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;
        if (!status) {
            return res.status(400).json({
                message: "Status is required",
                success: false,
            });
        };

        // find the application by application id
        const application = await Application.findOne({ _id:applicationId });
        if (!application) {
            return res.status(404).json({
                message: "Application Not found",
                success: false,
            });
        }

        // update the status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: "Status update successfully.",
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

module.exports = {
    ApplyJob,
    getAppliedJobs,
    getApplicants,
    UpdateStatus
}; //2:51:32
