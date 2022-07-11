const mongoose = require('mongoose');

module.exports = async () => {
    await mongoose.connect(`mongodb://localhost:27017/test`, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            socketTimeoutMS: 3000,
        },
        () => { console.log('connected to db') }
    )
};

