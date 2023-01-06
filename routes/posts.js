const express = require("express")
const { postHome, allPosts } = require("../callbacks/posts")
const router = express.Router()

router.get("/", postHome)

router.get("/posts", allPosts)



module.exports = router 