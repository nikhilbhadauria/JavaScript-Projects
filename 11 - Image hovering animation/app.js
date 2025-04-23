let arr = [
    {dp: "media/MV5BNGVkYjQ2YWItN2JmYi00Mzc0LTk2ZTQtYmM1NjhmOWQzNTE3XkEyXkFqcGc@.webp", story: "media/107e6c4c0251062519bc865eba810ae3.jpg"},
    {dp: "media/9870844_1701685188.webp", story: "media/Ravi-Gupta-playing-with-a-cat.webp"},
    {dp: "media/1294283_1706520670.webp", story: "media/272861149_155829230127127_4945631086717782777_n.jpg"},
    {dp: "media/MV5BNDUxOTU1YjEtNGJiMy00NGY2LTk0YTctMTlhYzEyODMxY2UxXkEyXkFqcGc@.webp", story: "media/Maheep-Singh.webp"},
];

let stories = document.querySelector("#stories");
let clutter = "";
arr.forEach((elem, idx) => {
    clutter += `<div class="story">
        <img id="${idx}" src="${elem.dp}" alt="">
    </div>`;
});
stories.innerHTML = clutter;

const fullScreen = document.querySelector("#full-screen");
const progressBar = document.querySelector("#progress-bar");

stories.addEventListener("click", (e) => {
    if (!e.target.id) return;
    fullScreen.style.backgroundImage = `url(${arr[e.target.id].story})`;
    fullScreen.classList.add("active");
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    void progressBar.offsetWidth; 
    progressBar.style.transition = "width 3s linear";
    progressBar.style.width = "100%";

    setTimeout(() => {
        fullScreen.classList.remove("active");
        progressBar.style.width = "0%";
    }, 3000);
});

let isMouseDown = false;
let startX, scrollLeft;
stories.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startX = e.pageX - stories.offsetLeft;
    scrollLeft = stories.scrollLeft;
});

stories.addEventListener("mouseleave", () => {
    isMouseDown = false;
});

stories.addEventListener("mouseup", () => {
    isMouseDown = false;
});

stories.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - stories.offsetLeft;
    const walk = (x - startX) * 3; 
    stories.scrollLeft = scrollLeft - walk;
});
