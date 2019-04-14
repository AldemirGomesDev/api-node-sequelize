const Sequelize = require('sequelize');
const db = require('../../connection');

db.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(erro){
    console.log("Falha ao conectar: "+erro)
})

const Product = db.define('Product', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    url: {
        type: Sequelize.STRING
    }
})
module.exports = Product;
// Product.sync({force: true});