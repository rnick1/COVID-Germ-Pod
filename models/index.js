const User = require('./User');
const Group = require('./Group');
const Rule = require('./Rule');
const Event = require('./Event');
const GroupRule = require('./GroupRule');
const UserEvent = require('./UserEvent');

// This defines the relationships between the different tables in the database
User.belongsTo(Group, {
    foreignKey: 'group_id',
});

Group.hasMany(User, {
    foreignKey: 'group_id'
});

Rule.belongsToMany(Group, {
    through: {
        model: GroupRule,
    },
    // foreignKey: 'rule_id'
});

Group.belongsToMany(Rule, {
    through: {
        model: GroupRule,
    }
    // foreignKey: 'rule_id'
});

Event.belongsToMany(User, {
    through: {
        model: UserEvent,
    }
    // foreignKey: 'event_id'
});

User.belongsToMany(Event, {
    through: {
        model: UserEvent,
    }
    // foreignKey: 'event_id'
});

module.exports = { User, Group, Rule, Event, GroupRule, UserEvent};
