const express = require('express');
const Sequelize = require('sequelize');
const requireDir = require('require-dir');
const product = require('./src/models/Product');

const app = express();

app.use(express.json());

requireDir('./src/models');

app.get('/', (req, res) => {
    // product.create({
    //     title: 'React Native',
    //     description: 'Build native apps with',
    //     url: 'http:www.reactnative.com.br'
    // })

   return res.send("Hello Rocketseat");
});
app.use('/api', require('./src/routes/router'));

app.listen(3001);