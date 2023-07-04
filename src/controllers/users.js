const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig.development)

const createUser = (body) => {
    return knex('users').insert(body)
}

const findUser = async (body) => {
    return await knex
    .select('*')
    .from('users')
    .where('users.username', body)
}

module.exports = {
    createUser,
    findUser
}

