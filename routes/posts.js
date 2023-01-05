const express = require("express")
const { postHome } = require("../callbacks/posts")
const router = express.Router()

router.get("/", postHome)




module.exports = router 