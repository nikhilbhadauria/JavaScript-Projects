document.getElementById("btn").addEventListener("click", () => {
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    let result = document.querySelector(".result");
    let operator = document.getElementById("selectOp").value;

    result.classList.remove("error", "success");

    if (num1 === "" || num2 === "") {
        result.innerHTML = "❌ Please enter both numbers.";
        result.classList.add("error");
        return;
    }

    if (operator === "div" && +num2 === 0) {
        result.innerHTML = "❌ Can't divide by zero!";
        result.classList.add("error");
        return;
    }

    result.classList.add("success");

    switch (operator) {
        case "plus":
            result.innerHTML = "🧮 Result: " + (+num1 + +num2);
            break;
        case "min":
            result.innerHTML = "🧮 Result: " + (+num1 - +num2);
            break;
        case "div":
            result.innerHTML = "🧮 Result: " + (+num1 / +num2);
            break;
        case "multi":
            result.innerHTML = "🧮 Result: " + (+num1 * +num2);
            break;
    }
});

document.getElementById("resetBtn").addEventListener("click", () => {
    document.querySelector(".num1").value = "";
    document.querySelector(".num2").value = "";
    let result = document.querySelector(".result");
    result.innerHTML = "🧮 Result will appear here...";
    result.classList.remove("error", "success");
});
