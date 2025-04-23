const form = document.querySelector("form");
const input = document.querySelector("form input");
const todosContainer = document.querySelector(".todos");
const searchInput = document.getElementById("search");

form.addEventListener("submit", e => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    todosContainer.appendChild(createTodo(value));
    input.value = "";
});

function createTodo(value) {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const left = document.createElement("div");
    left.style.display = "flex";
    left.style.alignItems = "center";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {
    todo.classList.toggle("completed");
    });

    const text = document.createElement("span");
    text.textContent = value;

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.addEventListener("click", () => {
    todosContainer.removeChild(todo);
    });

    left.appendChild(checkbox);
    left.appendChild(text);
    todo.appendChild(left);
    todo.appendChild(deleteBtn);

    return todo;
}

searchInput.addEventListener("input", e => {
    const searchVal = e.target.value.toLowerCase();
    document.querySelectorAll(".todo").forEach(todo => {
    const text = todo.querySelector("span").textContent.toLowerCase();
    todo.style.display = text.includes(searchVal) ? "flex" : "none";
    });
});
