const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");
const main = document.querySelector("#main");

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

window.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
    createParticle(mouseX, mouseY);
});

function animateCursor() {
    outlineX += (mouseX - outlineX) / 8;
    outlineY += (mouseY - outlineY) / 8;
    outline.style.left = outlineX + "px";
    outline.style.top = outlineY + "px";

requestAnimationFrame(animateCursor);
}
animateCursor();

const hoverTargets = document.querySelectorAll("button, h1, .section");

hoverTargets.forEach(el => {
el.addEventListener("mouseenter", () => {
    document.body.classList.add("hovered");
});
el.addEventListener("mouseleave", () => {
    document.body.classList.remove("hovered");
});
});

hoverTargets.forEach(el => {
el.addEventListener("mousemove", e => {
    const rect = el.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const offsetY = (e.clientY - rect.top - rect.height / 2) * 0.2;
    el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
el.addEventListener("mouseleave", () => {
    el.style.transform = `translate(0px, 0px)`;
});
});

function createParticle(x, y) {
const particle = document.createElement("div");
particle.className = "cursor-particle";
particle.style.left = `${x}px`;
particle.style.top = `${y}px`;

document.body.appendChild(particle);

setTimeout(() => {
    particle.remove();
}, 300);
}

window.addEventListener("click", e => {
const ripple = document.createElement("div");
ripple.className = "click-ripple";
ripple.style.left = `${e.clientX}px`;
ripple.style.top = `${e.clientY}px`;
document.body.appendChild(ripple);

setTimeout(() => ripple.remove(), 500);
});
