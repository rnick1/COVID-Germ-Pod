const User = require('./User');
const Group = require('./Group');
const Rule = require('./Rule');
const Event = require('./Event');
const GroupRule = require('./GroupRule');
const GroupEvent = require('./GroupEvent');

User.hasOne(Group, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Group.hasMany(User, {
    foreignKey: 'user_id'
});

Rule.belongsToMany(Group, {
    through: GroupRule,
    foreignKey: 'rule_id'
});

Group.hasMany(Rule, {
    foreignKey: 'rule_id'
});

Event.belongsToMany(Group, {
    through: GroupEvent,
    foreignKey: 'event_id'
});

Group.hasMany(Event, {
    foreignKey: 'event_id'
});

module.exports = { User, Group, Rule, Event, GroupRule, GroupEvent};

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
