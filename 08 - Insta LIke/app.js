let con = document.querySelector("#container");
let icon = document.querySelector("i");

const gradients = [
    "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
    "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)",
    "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
    "linear-gradient(to top, #0250c5 0%, #d43f8d 100%)",
    "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)"
];


con.addEventListener("dblclick", () => {
    const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];
    icon.style.backgroundImage = randomGradient;
    icon.classList.add("animate");

    setTimeout(() => {
    icon.classList.remove("animate");
    }, 1000);
});
