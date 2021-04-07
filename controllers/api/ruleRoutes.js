const router = require('express').Router();
const { Rule } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const ruleData = await Rule.findAll()
        res.status(200).json(ruleData)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/', withAuth, async (req, res) => {
    try{
        const newRule = await Rule.create({
            ...req.body,
            // user_id: req.session.user_id,
        })

        res.status(200).json(newRule);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const ruleData = await Rule.destroy({
            where: {
             id: req.params.id,
             user_id: req.session.user_id,   
            },
        });

        if(!ruleData) {
            res.status(404).json({message: 'No rule found with this ID.'})
            return;
        }
        res.status(200).json(ruleData)
    } catch(err) {
        status(500).json(err)
    }
});

module.exports = router;