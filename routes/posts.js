const express = require("express")
const { postHome, allPosts, createPost } = require("../callbacks/posts")
const router = express.Router()

router.get("/", postHome)

router.get("/posts", allPosts)
router.post("/post", createPost)



module.exports = router 