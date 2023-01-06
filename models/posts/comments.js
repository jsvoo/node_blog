const mongoose = require("mongoose")
const schema = mongoose.Schema
const msg = "field is required"

const commentSchema = new schema({
    post_id:{
        type:String,
        required:[true, msg],
        ref:"posts"
    },

    user_id:{
        type:String,
        required:[true, msg],
        ref:"users"
    },

    comment:{
        type:String,
        required:[true, msg]
    }



})