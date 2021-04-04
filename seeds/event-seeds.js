const { Event } = require('../models');

const eventData = [
    {
        "name": "Positive COVID test",
        "event_description": "I have been tested for COVID and it came back positive."
    },
    {
        "name": "Getting a COVID test",
        "event_description": "I am getting a COVID test."
    },
    {
        "name": "Negative COVID test",
        "event_description": "I have been tested for COVID and it came back positive."
    },
]

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;