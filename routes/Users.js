const { Router } = require('express');
const router = Router();
const Users = require('../models/users');

router.get('/users', async (req, res) => {
    try {
        const users = await Users.find({});
        res.status(201).json(users);
    } catch(e) {
        res.status(500).json({ message:`Something wrong ..., details ${e}` });
    }
})

module.exports = router;