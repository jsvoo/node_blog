const mongoose = require("mongoose")
const schema = mongoose.Schema
const msg ="field is required"

const postSchema = new schema({
    title:{
        type:String,
        required:[true, msg]
    },

      category:{
        type:String,
        required:[true, msg]
    },

      image:{
        type:String 
    },

      likes:{
        type:Number,
        default:0, 
    },

      author:{
        type:String,
        required:[true, msg],
        ref:"users"
    }, 

        body:{
        type:String,
        required:[true, msg]
    }

    

})


const postModel = mongoose.model("posts", postSchema)
module.exports =postModel