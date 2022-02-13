const express = require("express")
const http = require("http")
const app = express();
const path = require("path")
const server = http.createServer(app)
const moment = require("moment")

const socketIO = require("socket.io");
const io = socketIO(server);



app.use(express.static(path.join(__dirname,"src")))
const port = process.env.port || 8080;

io.on("connection",(socket)=>{
    socket.on("chatting", (data)=>{
        console.log(data)
        io.emit("chatting",{
            name : data.name,
            msg : data.msg,
            time : moment(new Date()).format("h:mm A")
        })
    })
})


server.listen(port,() => console.log(`sever is running ${port}`))
