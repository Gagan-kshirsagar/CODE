import { Router } from "express";

import { getAllJobs, getJob, createJob, deleteJob,updateJob } from "../controller/JobController.js";

import { validateJobInput, validateIdParam } from "../middleware/validationMiddleware.js";

const router = Router()

// router.get('/',getAllJobs)
// router.post('/',createJob)

router.route('/').get(getAllJobs).post(validateJobInput, createJob)

router.route('/:id').get(validateIdParam, getJob).patch(validateJobInput, updateJob).delete(validateIdParam,deleteJob)

export default router;

