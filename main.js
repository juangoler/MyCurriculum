// Partículas
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

class Particle{
    constructor(){
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size = Math.random()*3+1;
        this.speedX = Math.random()*1-0.5;
        this.speedY = Math.random()*1-0.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x>canvas.width)this.x=0;
        if(this.x<0)this.x=canvas.width;
        if(this.y>canvas.height)this.y=0;
        if(this.y<0)this.y=canvas.height;
    }
    draw(){
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

function init(){
    particlesArray = [];
    for(let i=0;i<120;i++){
        particlesArray.push(new Particle());
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particlesArray.forEach(p=>{
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
function reveal(){
    const windowHeight = window.innerHeight;
    reveals.forEach(el=>{
        const top = el.getBoundingClientRect().top;
        if(top < windowHeight - 50) el.classList.add('visible');
    });
}
window.addEventListener('scroll',reveal);
reveal();
