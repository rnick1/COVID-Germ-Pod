const { User } = require('../models');

const userData = [
    {
        "name": "Julien Hobbs",
        "email": "julien@example.com",
        "password": "password1",
        "group_id": "1"
    },
    {
        "name": "Casey Proctor",
        "email": "casey@example.com",
        "password": "password2",
        "group_id": "1"
    },
    {
        "name": "Janet Walters",
        "email": "janet@example.com",
        "password": "password3"
    },
    {
        "name": "Skylar Hawkins",
        "email": "skylar@example.com",
        "password": "password4"
    },
    {
        "name": "Dylan Koch",
        "email": "dylan@example.com",
        "password": "password5"
    },
    {
        "name": "Lilliana Quinn",
        "email": "lilliana@example.com",
        "password": "password6"
    },
    {
        "name": "Josue Nolan",
        "email": "josue@example.com",
        "password": "password7"
    },
    {
        "name": "Juliet Ray",
        "email": "juliet@example.com",
        "password": "password8"
    },
    {
        "name": "Jacob Blackwell",
        "email": "jacob@example.com",
        "password": "password9"
    }
]

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;