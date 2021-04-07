const { Event } = require('../models');

const eventData = [
    {
        "name": "Positive COVID test",
        "description": "I have been tested for COVID and it came back positive."
    },
    {
        "name": "Getting a COVID test",
        "description": "I am getting a COVID test."
    },
    {
        "name": "Negative COVID test",
        "description": "I have been tested for COVID and it came back positive."
    },
]

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;