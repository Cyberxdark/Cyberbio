const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = "12345678908450895798";
const columns = canvas.width / 20;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    ctx.font = "20px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);
document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("page-sound");

    // first time tap kerne per chalu krega 
    document.body.addEventListener("click", function() {
        audio.play();
    }, { once: true }); // first time 
});
function showPopup() {
    document.getElementById("custom-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("custom-popup").style.display = "none";
}