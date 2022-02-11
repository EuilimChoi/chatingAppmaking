const express = require("express")
const http = require("http")
const app = express();
const path = require("path")
const server = http.createServer(app)
const socketIO = require("socket.io")



app.use(express.static(path.join(__dirname,"src")))
const port = process.env.port || 8080;

app.listen(port,() => console.log(`sever is running ${port}`))