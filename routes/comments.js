const express = require("express")
const { deleteComment, postsComment, allComments, createComment } = require("../callbacks/comments")
const router = express.Router()



router.get("/", allComments)
router.get("/post:post_id", postsComment)
router.post("/create", createComment)
router.delete("/comment:id", deleteComment)

module.exports= router