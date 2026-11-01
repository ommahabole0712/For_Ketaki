const intro = document.getElementById("intro"), main = document.getElementById("main");
document.getElementById("enterBtn").onclick = () => { intro.style.display = "none"; main.classList.remove("hidden"); window.scrollTo(0, 0); startPetals(); };

function startPetals() { setInterval(() => { const p = document.createElement("div"); p.className = "petal"; p.textContent = ["🌸", "✦", "♡", "🎀","🦋","🎂"][Math.floor(Math.random() * 6)]; p.style.left = Math.random() * 100 + "vw"; p.style.animationDuration = (5 + Math.random() * 5) + "s"; p.style.fontSize = (12 + Math.random() * 14) + "px"; document.getElementById("petals").appendChild(p); setTimeout(() => p.remove(), 10000) }, 450) }

const target = new Date("2026-11-02T00:00:00+05:30");
function tick() { let d = target - new Date(); if (d < 0) d = 0; document.getElementById("days").textContent = String(Math.floor(d / 86400000)).padStart(2, "0"); document.getElementById("hours").textContent = String(Math.floor(d / 3600000) % 24).padStart(2, "0"); document.getElementById("minutes").textContent = String(Math.floor(d / 60000) % 60).padStart(2, "0"); document.getElementById("seconds").textContent = String(Math.floor(d / 1000) % 60).padStart(2, "0") } tick(); setInterval(tick, 1000);

const modal = document.getElementById("reasonModal");
document.querySelectorAll(".reason").forEach(b => b.onclick = () => { document.getElementById("modalTitle").textContent = b.dataset.title; document.getElementById("modalText").textContent = b.dataset.text; modal.classList.remove("hidden") });
document.querySelectorAll(".close").forEach(b => b.onclick = () => { modal.classList.add("hidden"); document.getElementById("letterPopup").classList.add("hidden") });

document.querySelectorAll(".answers button").forEach(b => b.onclick = () => { const r = document.getElementById("quizResult"); r.textContent = b.dataset.correct === "true" ? "Correct! 😂 You remember the beginning perfectly. +100 friendship points 💗" : "Nope! 😂 The story began on a bus. Try again!" });

const lp = document.getElementById("letterPopup");
document.querySelectorAll(".envelope").forEach(b => b.onclick = () => { document.getElementById("letterText").textContent = b.dataset.msg; lp.classList.remove("hidden") });

document.getElementById("surpriseBtn").onclick = () => { document.getElementById("finalReveal").classList.remove("hidden"); document.getElementById("surpriseBtn").style.display = "none"; for (let i = 0; i < 35; i++) { setTimeout(() => { const p = document.createElement("div"); p.className = "petal"; p.textContent = ["💗", "🌸", "🎀", "✨","🦋","💕"][Math.floor(Math.random() * 6)]; p.style.left = Math.random() * 100 + "vw"; p.style.animationDuration = "3s"; document.getElementById("petals").appendChild(p); setTimeout(() => p.remove(), 3500) }, i * 70) } };
