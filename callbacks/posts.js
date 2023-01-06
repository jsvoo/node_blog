

const commentModel = require("../models/posts/comments")
const postModel = require("../models/posts/posts")
const upload = require("../routes/multer")

exports.postHome = (req, res)=>{
    res.send("posts route")
}
 
exports.allPosts = async (req, res)=>{
    const allPosts = await postModel.find().lean()
    res.send(allPosts)
}

exports.createPost = upload.any(),  (req, res)=>{
    const post = new postModel(req.body)

    req.files.map(e=>{
        switch (e.fieldname) {
            case "image": post.image = e.filename
                
                break; 
        }
    })

    post.save()

    res.send(post)
}


exports.singlePost = async(req, res)=>{
    const post = await postModel.findOne({_id: req.params.post_id})
    res.send(post)
}

exports.deletePost = async(req, res)=>{ 
        await postModel.findByIdAndDelete({ _id: req.params.id })
        // TO DELETE THE COMMENTS AND LIKES ASSOCIATED WITH A POST WHEN THE POST IS DELETED
        await commentModel.deleteMany({ post_id: req.params.id })
        // await likeModel.deleteMany({ post_id: req.params.id }) //TO BE INCLUDED WHEN LIKEMODEL IS DEVELOPED
        res.send("Post deleted successfully") 
}