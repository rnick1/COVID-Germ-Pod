const router = require('express').Router();
const {User, Group, Rule, Event, UserEvent, GroupRule} = require('../models');
const withAuth = require('../utils/auth');

//This renders the Homepage:
router.get('/', async (req,res) => {
    res.render('homepage', { logged_in: req.session.logged_in })
})

//This renders the FAQ page:
router.get('/faq', async (req, res) => {
    res.render('faq', { logged_in: req.session.logged_in })
})

//This renders the page where the user can create a new group (as long as they are signed in):
router.get('/newGroup', withAuth, async (req, res) => {
    try {
        const ruleData = await Rule.findAll({
        })
        const rules = ruleData.map((rule) => rule.get({ plain: true }))
        res.render('newGroup', {
            rules,
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//This gets a single group by id and displays the user names: 
router.get('/group/:id', withAuth, async (req,res) => {
    try{
        const groupData = await Group.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Rule, through: GroupRule,
                    attributes: ['name', 'description']
                }
            ],
        });
        const group = groupData.get({ plain: true});
        const groupMatches = (group.id == req.session.group_id)
        res.render('podDashboard', {
            ...group,
            logged_in: req.session.logged_in,
            groupMatches
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// This gets a single group by name and displays the associated users and rules.
// Note: after testing remember to add 'withAuth' before 'async.'
// router.get('/group/name/:name', async (req, res) => {
//     try{
//         const groupData = await Group.findOne({
//                         where: {
//                             name: req.params.name
//                         }, 
//                         include: [
//                             {
//                                 model: User,
//                                 attributes: ['name']
//                             },
//                             {
//                                 model: Rule,
//                                 attributes: ['name']
//                             },
//                         ],
//     });
//     const group = groupData.get({ plain: true});
//     res.render('singleGroup', {
//         ...group,
//         // logged_in: req.session.logged_in
//     });
// } catch(err) {
//     res.status(500).json(err)
// }
// })

//This renders the user's profile page when they are signed in:
router.get('/profile', withAuth, async (req,res) => {
    try{
        //find the logged in user based on the session id
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password'] },
            include: [{ model: Group }],
        })
        const eventData = await Event.findAll()
        //serialize the data and render
        const user = userData.get({ plain: true });
        const events = eventData.map((event) => event.get({ plain: true }));
        res.render('profile', {
            ...user, events,
            logged_in: req.session.logged_in 
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//This renders the events:
// router.get('/events', async (req,res) => {
//     try{
//         const eventData = await Event.findAll()
//         console.log(eventData, 'eventData')
//         console.log("****************************")
//         //serialize the data and render
//         const events = eventData.map(({name, event_description, id}) => ({
//             name: name,
//             event_description: event_description,
//             id: id
//         }) )
//         console.log(events, 'Events')
//         res.render('events', events)
//     } catch(err) {
//         res.json(err)
//     }
// })

//This makes sure that if a user is not logged in then they are directed to the login/signup page:
router.get('/login', async (req,res) => {
    if(req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login')
})

module.exports = router;