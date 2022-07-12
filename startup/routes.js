const express = require('express');
const path = require('path');
const ba64 = require('ba64');
const { randomString } = require('make-random');

const isProduction = process.env.NODE_ENV === 'production';

const checkBase64 = string => {
    const B64_REGEX = /^data:.*;base64,([0-9a-zA-Z+\\/]{4})*(([0-9a-zA-Z+\\/]{2}==)|([0-9a-zA-Z+\\/]{3}=))?$/i ;
    return B64_REGEX.test(string);
}

module.exports = app => {
    app.use('/upload', express.static('./upload'));
    app.use('/api/users', require('../routes/Users'));

    if (isProduction) {
        app.use('/', express.static(path.join(__dirname, 'client', 'build')));
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }
    /**
     * получаем base64 кодированный файл
     * генерим имя и сохраняем в /upload
     * возвращаем имя файла
     */
    app.post('/api/upload', async (req, res, next) => {
        const { photo } = req.body;
        const name = await randomString(15);

        // check if it's correctly formatted Base64 Data URI
        if (checkBase64(photo)) {
            ba64.writeImageSync(`./upload/${name}`, photo);
        }

        res.send({ name });
    })
};
