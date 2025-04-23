let istatus = document.querySelector("h5")
let btn = document.querySelector("#add")
let check = 0

btn.addEventListener("click", () => {
    if(check === 0) {
    istatus.innerHTML = "Gautam City";
    istatus.style.color = "#01413B";
    btn.innerHTML = "Remove Friend";
    check = 1;
    }else {
    istatus.innerHTML = "Bruce Wayne";
    istatus.style.color = "#777";
    btn.innerHTML = "Add Friend";
    check = 0;
    }
    
})
