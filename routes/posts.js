const express = require("express")
const { postHome, allPosts, createPost, singlePost, deletePost, updatePost } = require("../callbacks/posts") 
const upload = require("./multer")
const router = express.Router()

router.get("/", postHome)

router.get("/all", allPosts)
router.get("/post:post_id", singlePost)
router.post("/create", upload.any(), createPost)
router.delete("/post:post_id", deletePost)
router.put("/update", upload.any(), updatePost)

module.exports = router 