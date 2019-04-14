const db = require('../../connection');

const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        const products = await Product.findAll()
        .then(products => {
           // console.log(products);
           return res.json(products);
           res.sendStatus(200);
        })
        .catch(error => console.log(error))
    },
    async show(req, res) {
        const product = await Product.findByPk(req.params.id);
        
        return res.json(product);
    },
    async store(req, res){
        const product = await Product.create(req.body);
        return res.json(product);
    },
    async update(req, res) {
        const product = await Product.update({
            title:req.body.title,
            description:req.body.description,
            url:req.body.url},
            {where: {id: req.params.id}},
            {new: true});
        return res.json(product);
    },
    async destroy(req, res) {
        await Product.destroy({
            where: {id: req.params.id},
        });
        return res.sendStatus(200);
    }
};


