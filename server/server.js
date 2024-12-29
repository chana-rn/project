require("dotenv").config()

const express=require("express")
const cors=require("cors")
const corsOptions=require("./config/corsOptions")
const connectDB=require("./config/dbconn")
const { default: mongoose } = require("mongoose")
const  PORT=process.env.PORT || 4000
const app=express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/tasks",require("./routes/task"))
app.use("/api/articles",require("./routes/article"))

app.get("/",(req,res)=>{
    res.send("home page")
})

mongoose.connection.once('open',()=>{
    console.log("conected to mongoDB")
    app.listen(PORT,()=>{
    console.log(`the server is running on ${PORT}`)
})
})

mongoose.connection.on('error',err=>{
    console.log(err)
})
