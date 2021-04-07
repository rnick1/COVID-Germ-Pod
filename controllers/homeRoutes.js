const router = require('express').Router();
const {User, Group, UserEvent, Event} = require('../models');
const withAuth = require('../utils/auth');

//this gets the groups and shows the users in the group
router.get('/', async (req,res) => {
    if(req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    
    res.render('homepage')
})
    // try{
//     const groupData = await Group.findAll({
//         include: [
//             {
//                 model: User,
//                 attributes: ['name'],
//             },
//         ],
//     })

//     const groups = groupData.map((group) => group.get({ plain: true }));

//     res.render('homepage', {
//         groups,
//         logged_in: req.session.logged_in
//     })
// } catch(err) {
//     res.status(500).json(err)
// }

router.get('/faq', async (req, res) => {
    res.render('faq')
})

router.get('/newGroup', async (req, res) => {
    try {
        // const userData = await User.findByPk(req.session.user_id, {
        //     attributes: 'name',
        //     // include: [
        //     //     {
        //     //         model: 
        //     //     }
        //     // ]
        // })
        // const user = userData.get({ plain: true })

        res.render('newGroup')

        
    } catch (error) {
        
    }
})

//this gets a single group by id and shows the user name attatched 
router.get('/group/:id', withAuth, async (req,res) => {
    try{
        const groupData = await Group.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const group = groupData.get({ plain: true});

        res.render('podDashboard', {
            ...group,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
//withAuth render the profile from the session id
router.get('/profile', withAuth, async (req,res) => {
    try{
        //find the logged in user based on the session id
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password'] },
            include: [{ model: Group }],
        })

        //serialize the data and render
        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            // logged_in: true
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/events', async (req,res) => {
    try{
        
        const eventData = await Event.findAll()

        //serialize the data and render
        const events = eventData.map((event) => { event.get({plain: true })
        })

        res.render('events', {
            ...events
    
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//if the user is logged in, redirect to profile, otherwise render login
router.get('/login', async (req,res) => {
    if(req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    
    res.render('login')
})

module.exports = router;