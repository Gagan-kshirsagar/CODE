import Job from '../models/JobModel.js'

import { StatusCodes } from 'http-status-codes'

export const getAllJobs = async (req, res) => {

    const jobs = await Job.find({ createdBy : req.user.userId })

    res.status(StatusCodes.OK).json({ jobs })
}

export const createJob = async (req, res) => {

    try {

        req.body.createdBy = req.user.userId

        const job = await Job.create(req.body)

        res.status(StatusCodes.CREATED).json({ job });
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'server error' })
    }
}

export const getJob = async (req, res) => {

    const job = await Job.findById(req.params.id)
    // if (!job) {
    //     return res.status(404).json({ msg: `No job with id ${id}` })
    // }

    res.status(200).json({ job })
}

export const updateJob = async (req, res) => {

    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({ msg: "Job Updated", updatedJob })
}

export const deleteJob = async (req, res) => {

    const removedJob = await Job.findByIdAndDelete(req.params.id)

    res.status(200).json({ msg: "Job Deleted " })
}