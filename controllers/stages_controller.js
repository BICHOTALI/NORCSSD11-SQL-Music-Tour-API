// DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const { Stage } = db

// ROUTES:

// Find all Stages
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } 
    catch (error) {
        res.status(500).json(error)
    }
})

// EXPORT
module.exports = stages