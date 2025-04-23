const elems = document.querySelectorAll(".elem");

elems.forEach(elem => {
    const img = elem.querySelector("img");
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
elem.addEventListener("mouseenter", () => {
    img.style.opacity = 1;
});
elem.addEventListener("mouseleave", () => {
    img.style.opacity = 0;
});

document.addEventListener("mousemove", e => {
    const rect = elem.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    currentX += (mouseX - currentX) / 5;
    currentY += (mouseY - currentY) / 5;
    img.style.left = `${currentX}px`;
    img.style.top = `${currentY}px`;
    createParticle(e.clientX, e.clientY);
});
});

function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.className = "cursor-particle";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.body.appendChild(particle);

setTimeout(() => particle.remove(), 300);
}
