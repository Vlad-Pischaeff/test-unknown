const Users = require('../models/users');

const usersController = () => {
    /********************************************
     * get all users
     *******************************************/
    const getUsers = async (req, res) => {
        try {
            const users = await Users.find({});
            res.status(201).json(users);
        } catch (e) {
            res.status(500).json({ message: `Something wrong ..., details ${e}` });
        }
    };
    /********************************************
     * register new user
     *******************************************/
    const registerUser = async (req, res) => {
        try {
            const {
                login, email, password, date, gender, photo,
            } = req.body;
            const candidate = await Users.findOne({ login });
    
            if (candidate) {
                res.status(400).json({ message: `User login ${login} is already exists...` });
                return;
            }
    
            const user = new Users({
                login, email, password, date, gender, photo,
            });
    
            await user.save((err, doc) => {
                if (err) {
                    console.error('CREATE USER ERROR ...', err);
                    res.status(500).json({ message: `User ${login} not created...` });
                    return;
                }
                console.error('CREATE USER SUCCESS ...', doc);
                res.status(201).json({ ...doc._doc });
            });
        } catch (e) {
            console.log('Register error...', e);
            res.status(500).json({ message: 'Something wrong while user registration...' });
        }
    };
    /********************************************
     * login user
     *******************************************/
    const loginUser = async (req, res) => {
        try {
            const { login, password } = req.body;
            const candidate = await Users.findOne({ login, password });
    
            if (!candidate) {
                res.status(400).json({ message: `User ${login} not found, or wrong password...` });
                return;
            }
    
            res.status(201).json({ ...candidate._doc });
        } catch (e) {
            res.status(500).json({ message: `Something wrong ${e}...` });
        }
    };
    /********************************************
     * update user profile
     *******************************************/
    const updateUser = async (req, res) => {
        try {
            const { id } = req.params;
    
            await Users.findByIdAndUpdate(id, req.body);
            const newUser = await Users.findOne({ _id: id });
            res.status(201).json(newUser);
        } catch (e) {
            res.status(500).json({ message: `Something wrong ..., details ${e}` });
        }
    };
    /********************************************
     * get users exclude single user
     *******************************************/
    const getExcludeUser = async (req, res) => {
        try {
            const { id } = req.params;
    
            const users = await Users.find({ _id: { $ne: id } });
            res.status(201).json(users);
        } catch (e) {
            res.status(500).json({ message: `Something wrong ..., details ${e}` });
        }
    };

    return {
        getUsers,
        registerUser,
        loginUser,
        updateUser,
        getExcludeUser
    };
};

module.exports = usersController;
