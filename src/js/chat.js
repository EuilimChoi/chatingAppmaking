"use strict"
const Socket  = io();

const nickname = document.querySelector("#nickname")
const chatlist = document.querySelector(".chatting-list")
const chatinput = document.querySelector(".chatting-input")
const sendbutton = document.querySelector(".send-button")

sendbutton.addEventListener("click",()=>{
    const param = {
        name: nickname.value,
        message : chatinput.value
    }
    Socket.emit("chatting",param)
    })



Socket.on("chatting",(data)=>{
    const li = document.createElement("li");
    li.innerText = `${data.name} - ${data.message}`
    chatlist.appendChild(li)
    
})

console.log(Socket)