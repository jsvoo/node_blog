const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")
const users = require("./routes/users")
const posts = require("./routes/posts")
const comments = require("./routes/comments")
const mongoose = require("mongoose")
const port = process.env.PORT || 5050
const router = express.Router()
 
const welcome = router.get("/", (req, res)=>{
    res.json("welcome ")
})


app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())



app.use("/", welcome)
app.use("/users", users)
app.use("/posts", posts) 
app.use("/comments", comments) 


mongoose.connect("mongodb://localhost:27017/Node_blog", { useNewUrlParser: true, useUnifiedTopology: true }, 
err => {  
    if (err) throw err 
    console.log("Database connected")
})

mongoose.Promise=global.Promise

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`)
})

 