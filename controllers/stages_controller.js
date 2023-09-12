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

//Finds a Specific Stage
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } 
    catch (error) {
        res.status(500).json(error)
    }
})

// Create a Stage
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: `Successfuly inserted a new stage`,
            data: newStage
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update a Stage
stages.put('/:id', async (req, res) => {
    try {
        const updatedStage = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfuly updated stage #${updatedStage}`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// Delete a Stage
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStage = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfuly deleted stage #${deletedStage}`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// EXPORT
module.exports = stages