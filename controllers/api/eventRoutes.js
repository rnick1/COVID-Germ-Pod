const router = require('express').Router();
const { Event } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findAll()
        res.status(200).json(eventData)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/', withAuth, async (req, res) => {
    try{
        const newEvent = await Event.create({
            ...req.body,
            // user_id: req.session.user_id,
        })

        res.status(200).json(newEvent);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const eventData = await Event.destroy({
            where: {
             id: req.params.id,
             user_id: req.session.user_id,   
            },
        });

        if(!eventData) {
            res.status(404).json({message: 'No event found with this ID.'})
            return;
        }
        res.status(200).json(eventData)
    } catch(err) {
        status(500).json(err)
    }
});

module.exports = router;