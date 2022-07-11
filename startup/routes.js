const express = require('express');
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production'
                        ? true
                        : false;

module.exports = app => {
    app.use('/upload', express.static('./upload'));
    app.use('/api', require('../routes/Users'));

    if (isProduction) {
        app.use('/', express.static(path.join(__dirname, 'client', 'build', )));
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }
};