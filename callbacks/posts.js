

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

exports.createPost =   (req, res)=>{
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

exports.updatePost = async(req, res)=>{
    const body = req.body
    req.files.map(e=>{
        switch (e.fieldname) {
            case"image" : body.image = e.filename
                
                break; 
        }
    })
   const newPost = await postModel.findByIdAndUpdate({_id:req.body.id}, body)
    res.send(body)
}

exports.usersPosts= async (req, res)=>{
    const posts = postModel.find({user_id: req.params.user_id})
    res.send(posts)
}