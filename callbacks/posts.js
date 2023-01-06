

const postModel = require("../models/posts/posts")

exports.postHome = (req, res)=>{
    res.send("posts route")
}
 
exports.allPosts = async (req, res)=>{
    const allPosts = await postModel.find().lean()
    res.send(allPosts)
}

exports.createPost = async (req, res)=>{
    const post = await postModel.create(req.body)
    res.send(post)
}