// Music Controls
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
music.volume = 0.5;
music.play().catch(()=>{ window.addEventListener('click',()=>music.play()); });
musicBtn.addEventListener('click',()=>{
  if(music.paused){ music.play(); musicBtn.textContent="Pause Music"; }
  else{ music.pause(); musicBtn.textContent="Play Music"; }
});

// Particles
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles = [];
for(let i=0;i<300;i++){
  particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,size:Math.random()*4+1,speed:Math.random()*0.8+0.2,color:`hsl(${Math.random()*360},100%,60%)`,layer:Math.random()*2+1});
}
function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size*p.layer,0,Math.PI*2);
    ctx.fillStyle=p.color;
    ctx.fill();
    p.y -= p.speed;
    if(p.y<0) p.y=canvas.height;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Orbiting 3D money
const moneyCanvas = document.getElementById('moneyCanvas');
const moneyCtx = moneyCanvas.getContext('2d');
moneyCanvas.width = window.innerWidth;
moneyCanvas.height = window.innerHeight;
const profileX = window.innerWidth/2;
const profileY = window.innerHeight/2 - 50;
const bills = [];
for(let i=0;i<50;i++){
  bills.push({radius:90+Math.random()*100,angle:Math.random()*Math.PI*2,speed:0.01+Math.random()*0.02,size:20+Math.random()*18,yOffset:(Math.random()-0.5)*60,fallSpeed:0.5+Math.random()*1});
}
function drawMoneyOrbit(){
  moneyCtx.clearRect(0,0,moneyCanvas.width,moneyCanvas.height);
  bills.forEach(bill=>{
    bill.angle += bill.speed;
    const x = profileX + Math.cos(bill.angle) * bill.radius;
    bill.yOffset += bill.fallSpeed;
    if(bill.yOffset>200) bill.yOffset=-200;
    const y = profileY + Math.sin(bill.angle) * bill.radius + bill.yOffset;
    moneyCtx.save();
    moneyCtx.translate(x,y);
    moneyCtx.rotate(bill.angle*0.5);
    moneyCtx.font = bill.size+"px Arial";
    moneyCtx.fillText("💵",-bill.size/2,0);
    moneyCtx.restore();
  });
  requestAnimationFrame(drawMoneyOrbit);
}
drawMoneyOrbit();

// Responsive resize
window.addEventListener('resize',()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  moneyCanvas.width = window.innerWidth;
  moneyCanvas.height = window.innerHeight;
});
