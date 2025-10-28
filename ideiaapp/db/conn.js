const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('empregados_db_a', 'aluno', 'alunos', {
    host: '10.66.96.25:3306',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectamos com o Sequelize!')
} catch (error) {
    console.error('Não foi possível conectar:', error)
}

module.exports = sequelize