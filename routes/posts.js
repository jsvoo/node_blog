const express = require("express")
const { postHome, allPosts, createPost, singlePost, deletePost } = require("../callbacks/posts") 
const router = express.Router()

router.get("/", postHome)

router.get("/posts", allPosts)
router.get("/post:post_id", singlePost)
router.post("/post", createPost)
router.delete("/post:post_id", deletePost)


module.exports = router 