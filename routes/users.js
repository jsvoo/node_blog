const express = require("express")
const { userHome } = require("../callbacks/users")
const router = express.Router()


router.get("/", userHome)



module.exports = router