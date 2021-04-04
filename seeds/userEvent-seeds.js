const { UserEvent } = require('../models');

const userEventData = [
    {
        "user_id": "1",
        "event_id": "1",
    },
    {
        "user_id": "1",
        "event_id": "2",
    },
    {
        "user_id": "2",
        "event_id": "3",
    },
]

const seedUserEvents = () => UserEvent.bulkCreate(userEventData);

module.exports = seedUserEvents;