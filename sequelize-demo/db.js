const Sequelize = require('sequelize');
const sequelize = new Sequelize('SeuBD', 'SeuUsuario', 'SuaSenha', {
    dialect: 'mysql', // Seu banco de dados
    host: 'localhost', 
    port: 3306 // Porta padrão do mysql
})

module.exports = sequelize;