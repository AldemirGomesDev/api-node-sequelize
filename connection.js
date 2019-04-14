const Sequelize = require('sequelize');

module.exports = new Sequelize('test', 'root', '147852', {
    host: "localhost",
    dialect: 'mysql'
})
// sequelize.authenticate().then(function(){
//     console.log('Conectado com sucesso!')
// }).catch(function(erro){
//     console.log("Falha ao conectar: "+erro)
// })

// const Postagem = sequelize.define('postagens', {
//     titulo: {
//         type: Sequelize.STRING
//     },
//     conteudo: {
//         type: Sequelize.TEXT
//     }
// })

// Postagem.create({
//     titulo: "Bem Vindo a São Joaquim",
//     conteudo: "São Joaquim do monte é a melhor"
// })
// Postagem.sync({force: true});.