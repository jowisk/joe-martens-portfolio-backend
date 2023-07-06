const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { verifyToken, TOKEN_SECRET } = require("../middlewares/validate-jwt");

const userController = require("../controllers/users");
const { response } = require("express");

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const user = await userController.findUser(req.body.username)

        if (user.length === 0) {
            res.json('Invalid credentials')
            return
        }

        const validPass = await bcrypt.compareSync(
            req.body.password,
            user[0].password
        );

        if (!validPass) {
            res.json("Invalid credentials")
            return
        }

        const token = jwt.sign(
            {
                username: user[0].username,
                password: user[0].password
            },
            TOKEN_SECRET,
            {
                expiresIn: PROCESS.ENV.TOKEN_EXPIRATION
            }
        )

        res.json({
            data: 'Success!',
            token: token,
        })
    } catch (error) {
        res.json({error: error})
    }
})

module.exports = router