"use strict"

const Socket  = io();

const nickname = document.querySelector("#nickname")
const chatlist = document.querySelector(".chatting-list")
const chatinput = document.querySelector(".chatting-input")
const sendbutton = document.querySelector(".send-button")
const chattingscreen = document.querySelector(".display-container")

sendbutton.addEventListener("click",()=>{
    const param = {
        name: nickname.value,
        msg : chatinput.value
    }
    Socket.emit("chatting",param)
    
    })



Socket.on("chatting",(data)=>{
    const {name, msg, time} = data
    const item = new Limodel (name, msg, time)
    item.makeLi()
    chattingscreen.scrollTo(0,chattingscreen.scrollHeight)
})

function Limodel (name, msg, time){
    this.name = name;
    this.message = msg;
    this.time = time;

    this.makeLi =()=>{
        const li = document.createElement("li")
        li.classList.add(nickname.value === this.name ? "sent" : "received")
        const dom = `<span class="profile">    
                <span class = "user">${this.name}</span>
                <img class = "image"src ="https://placeimg.com/200/50/any" alt="any">
            </span>
            <span class="message">${this.message}</span>
            <span class="time">${this.time}</span>`
        li.innerHTML = dom;
        chatlist.appendChild(li)
    }
}