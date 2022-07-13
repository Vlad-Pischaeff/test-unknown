const express = require('express');
const path = require('path');
const uploadRouter = require('../routes/upload')();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = app => {
    app.use('/upload', express.static('./upload'));
    app.use('/api/users', require('../routes/Users'));
    app.use('/api', uploadRouter);

    if (isProduction) {
        app.use('/', express.static(path.join(__dirname, 'client', 'build')));
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }
};
