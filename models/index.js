const User = require('./User');
const Group = require('./Group');
const Event = require('./Event');
const GroupEvent = require('./GroupEvent');

User.belongsTo(Group, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
});

Group.hasMany(User, {
    foreignKey: 'group_id'
});

Group.hasMany(Event, {
    foreignKey: 'event_id'
});

Event.belongsToMany(User, {
    through: {
        model: UserEvent,
    }
    // foreignKey: 'event_id'
});

module.exports = { User, Group, Event, GroupEvent};

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
