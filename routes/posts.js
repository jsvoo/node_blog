const express = require("express")
const { postHome, allPosts, createPost, singlePost, deletePost, updatePost, usersPosts } = require("../callbacks/posts") 
const upload = require("./multer")
const router = express.Router()

router.get("/", postHome)

router.get("/all", allPosts)
router.get("/post:post_id", singlePost)
router.get("/user/posts:/user_id", usersPosts)
router.post("/create", upload.any(), createPost)
router.delete("/post:post_id", deletePost)
router.put("/update", upload.any(), updatePost)

module.exports = router 