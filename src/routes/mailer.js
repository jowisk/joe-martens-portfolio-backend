const express = require('express')
const mailerFunctions = require('../controllers/mailer')
const router = express.Router()

router.post("/send", async (req, res) => {
    try {
        const { email, subject, body } = req.body
        mailerFunctions.sendEmail(req.body)
        res.json({ msg: "msg sent !"});
    } catch (error) {
        res.status(404).json({ msg: `Error ${error}`})
    }
});


module.exports = router