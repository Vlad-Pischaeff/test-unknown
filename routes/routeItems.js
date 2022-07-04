const { Router } = require('express');
const router = Router();
const Items = require('../models/items');

router.get('/items', async (req, res) => {
    try {
        const items = await Items.find({});
        res.status(201).json(items);
    } catch(e) {
        res.status(500).json({ message:`Something wrong ..., details ${e}` });
    }
})

module.exports = router;