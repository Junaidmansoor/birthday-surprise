let startBtn = document.getElementById("startBtn")
let gift = document.getElementById("giftBox")
let cake = document.getElementById("cake")
let text = document.getElementById("birthdayText")
let heartBtn = document.getElementById("heartBtn")

startBtn.onclick = () => {
startBtn.style.display="none"
gift.classList.remove("hidden")
}

gift.onclick = () => {

gift.style.display="none"

cake.classList.remove("hidden")

setTimeout(()=>{
text.classList.remove("hidden")
confettiEffect()
},1500)

setTimeout(()=>{
heartBtn.classList.remove("hidden")
},2500)

}

heartBtn.onclick = ()=>{
window.location.href="heart.html"
}

/* Confetti */

function confettiEffect(){

let canvas = document.getElementById("confetti")
let ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let pieces = []

for(let i=0;i<100;i++){
pieces.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*6+2,
d:Math.random()*100
})
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="pink"

for(let i=0;i<pieces.length;i++){
let p = pieces[i]

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fill()

p.y+=2

if(p.y>canvas.height){
p.y=0
}
}

requestAnimationFrame(draw)

}

draw()

}