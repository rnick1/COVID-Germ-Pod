const router = require('express').Router();
const {User, Group} = require('../models');
const withAuth = require('../utils/auth');

//this gets the groups and shows the users in the group
router.get('/', async (req,res) => {
try{
    const groupData = await Group.findAll({
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
    })

    const groups = groupData.map((group) => group.get({ plain: true }));

    res.render('homepage', {
        groups,
        logged_in: req.session.logged_in
    })
} catch(err) {
    res.status(500).json(err)
}
})

//this gets a single group by id and shows the user name attatched 
router.get('/group/:id', async (req,res) => {
    try{
        const userData = await User.findByPk(req.params.id, {
            include: [
                {
                    model: Group,
                    attributes: ['name'],
                },
            ],
        });

        const group = userData.get({ plain: true});

        res.render('user', {
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
            logged_in: true
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