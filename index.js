const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const isProduction = process.env.NODE_ENV === 'production'
                        ? true
                        : false;
const PORT = 5000;
const app = express();
const server = require('http').createServer(app);

app.use(express.json({ extended: true }));
app.use(cors());

app.use('/upload', express.static(path.join(__dirname, 'upload' )));
// IMPORT ROUTES
app.use('/api', require('./routes/Users'));

if (isProduction) {
    app.use('/', express.static(path.join(__dirname, 'client', 'build', )));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

async function start() {
    try {
        await mongoose.connect(`mongodb://localhost:27017/test`, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            socketTimeoutMS: 3000,
        },
        () => { console.log('connected to db')}
        )
    
        await server.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        });

    } catch (e) {
        console.log('SERVER ERRORS', e);
    }
}

start();