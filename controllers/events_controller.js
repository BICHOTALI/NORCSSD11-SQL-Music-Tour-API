// DEPENDENCIES
const events = require('express').Router()
const { Op } = require('sequelize')
const db = require('../models')
const { Event } = db


// ROUTES:

// Find all Events
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [['date', 'ASC']]
        })
        res.status(200).json(foundEvents)        
    } catch (error) {
        res.status(500).json(error)
    }
})

// Find a Specific Event
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: {event_id: req.params.id}
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Create an Event
events.put

// EXPORT
module.exports = events