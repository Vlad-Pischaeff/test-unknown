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

// /api/users/register create user
router.put('/users/register', async (req, res) => {
        try {

            const { login, email, password, date, gender, photo } = req.body
            const candidate = await Users.findOne({ login })

            if (candidate) {
                return res.status(400).json({message:`User login ${login} is already exists...`})
            }

            const user = new Users({ login, email, password, date, gender, photo })
            
            await user.save((err, doc) => {
                if (err) {
                    console.error('CREATE USER ERROR ...', err) 
                    return res.status(500).json({message:`User ${login} not created...`})
                } else {
                    console.error('CREATE USER SUCCESS ...', doc) 
                    res.status(201).json({ ...doc._doc })
                }
            })
        } catch (e) {
            console.log('Register error...', e)
            res.status(500).json({message:`Something wrong while user ${login} registration...`})
        }
    }
)

// /api/users/login login user
router.post('/users/login', async (req, res) => {
        try {

            const { login, password } = req.body
            const candidate = await Users.findOne({ login, password })

            if (!candidate) {
                return res.status(400).json({ message:`User ${login} not found, or wrong password...` })
            }
        
            res.status(201).json({...candidate._doc })
        } catch (e) {
            res.status(500).json({ message:`Something wrong ${e}...` })
        }
    }
)

// /api/users/:id update user
router.patch('/users/:id', async (req, res) => {
    try {
        const { id } = req.params

        await Users.findByIdAndUpdate(id, req.body)
        const newUser = await Users.findOne({ _id: id })
        res.status(201).json(newUser)
    
    } catch(e) {
        res.status(500).json({ message:`Something wrong ..., details ${e}` })
    }
})

module.exports = router;