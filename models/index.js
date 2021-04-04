const User = require('./User');
const Group = require('./Group');
const Rule = require('./Rule');
const Event = require('./Event');
const GroupRule = require('./GroupRule');
const UserEvent = require('./UserEvent');

User.hasOne(Group, {
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

Group.hasMany(Rule, {
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

User.hasMany(Event, {
    through: {
        model: UserEvent,
    }
    // foreignKey: 'event_id'
});

module.exports = { User, Group, Rule, Event, GroupRule, UserEvent};

// NOTES:
// Association Methods:
    // Association
    // BelongsToMany
    // BelongsTo
    // HasMany
    // HasOne

// Rough shape of the data:
    // User
        // ID
        // Name
        // Email
        // Password
        // Group_Id?
        // Event_Id
            // Extra: username
            // Extra: risk_id

    // Group
        // ID
        // Name
        // Password
        // Rules_Id
            // Foreign key
        // Members (IDs of users)?
            // Foreign key

    // Rules - Rules that a group agrees to follow
        // ID
        // Name

    // Events - COVID occurences, vaccinations, tests, etc.
        // ID
        // Name

        // Extra: Risk_Profile
            // ID
            // Name
