

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