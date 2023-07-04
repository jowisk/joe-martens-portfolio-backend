const knexConfig = require('../../knexfile')
const knex = require("knex")(knexConfig.development)

const getProjects = async () => {
    return await knex
    .from('projects')
    .select('uuid', 'name', 'technologies', 'img', 'deploy', 'git')
}

const addProject = async (body) => {
    return knex("projects").insert(body)
}

const deleteProject = async (body) => {
    return await knex("projects").where('name', body.name).del()
}

module.exports = {
    getProjects,
    addProject,
    deleteProject
}