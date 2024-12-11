const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('background').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dots = [];
const dotCount = 100;

function createDots() {
    for (let i = 0; i < dotCount; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3,
            xSpeed: Math.random() * 0.5 - 0.25,
            ySpeed: Math.random() * 0.5 - 0.25,
        });
    }
}

function updateDots() {
    dots.forEach(dot => {
        dot.x += dot.xSpeed;
        dot.y += dot.ySpeed;

        if (dot.x < 0 || dot.x > canvas.width) dot.xSpeed *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.ySpeed *= -1;
    });
}

function drawDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';

    dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

function animate() {
    updateDots();
    drawDots();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

createDots();
animate();
