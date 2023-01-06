const commentModel = require("../models/posts/comments")

//Get all comments
exports.allComments = (req, res)=>{
    res.send("comments route")
}

exports.createComment = async(req, res)=>{
    const comment = await commentModel.create(req.body)
    res.send(comment)
}

exports.deleteComment = async(req, res)=>{
    await commentModel.findByIdAndDelete({_id:req.params.id})
    res.send({success:true})
}

//To get comments specific to a post
exports.postsComment = async(req, res)=>{
    const postsComments = await commentModel.find({post_id:req.params.post_id})
    res.send(postsComments)
}
