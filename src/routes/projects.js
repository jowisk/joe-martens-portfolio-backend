const express = require('express')
const projectQueries = require('../controllers/projects')
const router = express.Router()
const { verifyToken } = require('../middlewares/validate-jwt')

router.get('/get', async (req, res) => {
    try {
        const projects = await projectQueries.getProjects();
        res.json(projects);
    } catch (error) {
        res.status(404).json({ msg: `error ${error}`})
    }
});

router.post('/add', verifyToken, async (req, res) => {
    try {
        const body = req.body;
        await projectQueries.addProject(body);
        res.json("Success!")
    } catch (error) {
        res.status(404).json({ msg: `error!! ${error}`})
    }
})

router.delete('/delete', verifyToken, async (req, res) => {
    try {
        const body = req.body
        await projectQueries.deleteProject(body)
        res.json("Success!")
    } catch (error) {
        res.json({ msg: `error!!`})
    }
})



module.exports = router