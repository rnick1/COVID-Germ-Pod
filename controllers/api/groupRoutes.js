const router = require('express').Router();
const { Group, GroupRule, Rule } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const groupData = await Group.findAll({
            include: [{ model: Rule, through: GroupRule }]
        })
        res.status(200).json(groupData)
    } catch (error) {
        res.status(400).json(error)
    }
})
// NEW!!! For search bar:
router.get('/:name', async (req, res) => {
    try{
        const groupData = await Group.findOne({ 
            where: { 
                name: req.params.name 
            },
            include: [{ model: Rule, through: GroupRule }]
        })
        if(!groupData) {
            res.status(404).json({ message: 'No group found with this id.'});
            return;
        }
        res.status(200).json(groupData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {

    try{
        const groupData = await Group.findByPk(req.params.id, {
            include: [{ model: Rule, through: GroupRule }]
        })
        if(!groupData) {
            res.status(404).json({ message: 'No location found with this id. '});
            return;
        }

        res.status(200).json(groupData);
    } catch (err) {
        res.status(500).json(err);
    }
    
});

router.post('/', withAuth, async (req, res) => {
    try{
        const newGroup = await Group.create({
            ...req.body,
            // user_id: req.session.user_id,
        })

        res.status(200).json(newGroup);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.post('/addRule', withAuth, async (req, res) => {
    try { 
        const addRule = await GroupRule.create({
            group_id: req.body.group_id,
            rule_id: req.body.rule_id
        })
        res.status(200).json(addRule)
    } catch (error) {
        res.status(400).json(error)
    }
})



router.delete('/:id', withAuth, async (req, res) => {
    try {
        const groupData = await Group.destroy({
            where: {
             id: req.params.id,
             user_id: req.session.user_id,   
            },
        });

        if(!groupData) {
            res.status(404).json({message: 'No project found with this ID.'})
            return;
        }
        res.status(200).json(groupData)
    } catch(err) {
        status(500).json(err)
    }
});

module.exports = router;