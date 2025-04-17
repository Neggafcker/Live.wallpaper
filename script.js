
function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });
  const day = now.toLocaleDateString([], { weekday: 'long' });

  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
  document.getElementById("day").textContent = day;
}

setInterval(updateTime, 1000);
updateTime();

// Simple rain effect
const canvas = document.getElementById("rain-canvas");
const ctx = canvas.getContext("2d");
let drops = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createRain() {
  for (let i = 0; i < 300; i++) {
    drops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 5 + 2
    });
  }
}
createRain();

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i < drops.length; i++) {
    let d = drops[i];
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y + d.length);
  }
  ctx.stroke();

  for (let i = 0; i < drops.length; i++) {
    drops[i].y += drops[i].speed;
    if (drops[i].y > canvas.height) {
      drops[i].y = -20;
      drops[i].x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawRain);
}
drawRain();
