const seedUsers = require('./user-seeds');
const seedGroups = require('./group-seeds');
const seedRules = require('./rule-seeds');
const seedEvents = require('./event-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedGroups();
  console.log('\n----- GROUPS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedRules();
  console.log('\n----- RULES SEEDED -----\n');

  await seedEvents();
  console.log('\n----- EVENTS TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
