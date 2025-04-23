const emoji = document.querySelector('#emoji');
const emojis = ["😀","😎","😂","😍","😅","😉","😭","😢","😡","🤔","🤗","😴","😇","🤩","🥳","😱","😬","😜","😋","😌","😤","😷","🤒","🤕","🤑","🤠","😈","👻","💩","🤡","👽","💀"];
const popsound = new Audio("pop-39222.mp3")
emoji.addEventListener("mouseover", () => {
    emoji.innerHTML= emojis[Math.floor(Math.random() * emojis.length)]
    popsound.play();
})