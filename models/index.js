const User = require('./User');
const Group = require('./Group');

User.hasOne(Group, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Group.hasMany(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Group };




// make method called check 

// User
// ID
// Name
// Email
// Password
// Pod_Id?
// Event_Id
// Extra: username
// Extra: risk_id

// Group
// ID
// Name
// Rules_Id
    // foreign key
// Password
// Members (IDs of users)?

// Rules - rules that a group agrees to follow
// ID
// Name
// 

// Events - something a user can update the group about such as a covid occurence, vaccination, test
// ID
// Name

// Extra: Risk_Profile
// ID
// Name
