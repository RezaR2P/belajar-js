// Kumpulan semua UI element
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

// Kumpulan event listener
immediateLoadEventListeners();

function immediateLoadEventListeners() {
  // Mendapatkan todos dari local storage dan menampilkan di browser
  document.addEventListener("DOMContentLoaded", loadTodos);

  // Event untuk menambahkan todo
  todoForm.addEventListener("submit", handleAddTodo);

  // Event untuk menghapus todo
  todoList.addEventListener("click", handleDeleteTodo);

  // Event untuk membersihkan todo
  clearButton.addEventListener("click", handleClearTodos);

  // Event untuk memfilter todo
  filterInput.addEventListener("keyup", handleFilterTodos);
}

// Fungsi untuk membuat elemen todo baru
function createTodoElement(value) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  li.className =
    "todo-item list-group-item d-flex justify-content-between align-items-center mb-1";

  const deleteButton = document.createElement("a");
  deleteButton.href = "#";
  deleteButton.className = "badge badge-danger delete";
  deleteButton.innerHTML = "Delete";
  li.appendChild(deleteButton);

  todoList.appendChild(li);
}

// Fungsi untuk mendapatkan todos dari local storage
function getTodosFromLocalStorage() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

// Fungsi untuk menghapus todo dari local storage
function removeTodoFromLocalStorage(todoText) {
  const todos = getTodosFromLocalStorage().filter((todo) => todo !== todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Fungsi untuk menampilkan todos saat aplikasi dimuat
function loadTodos() {
  getTodosFromLocalStorage().forEach(createTodoElement);
}

// Fungsi untuk menangani penambahan todo
function handleAddTodo(e) {
  e.preventDefault();
  if (todoInput.value) {
    createTodoElement(todoInput.value);
    addTodoToLocalStorage(todoInput.value);
    todoInput.value = "";
  } else {
    alert("Masukkan sebuah todo, jangan dikosongkan.");
  }
}

// Fungsi untuk menambahkan todo ke local storage
function addTodoToLocalStorage(todoInputValue) {
  const todos = getTodosFromLocalStorage();
  todos.push(todoInputValue);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Fungsi untuk menangani penghapusan todo
function handleDeleteTodo(e) {
  e.preventDefault();
  if (
    e.target.classList.contains("delete") &&
    confirm("Apakah Anda yakin ingin menghapus?")
  ) {
    const todoText = e.target.parentElement.firstChild.textContent.trim();
    removeTodoFromLocalStorage(todoText);
    e.target.parentElement.remove();
  }
}

// Fungsi untuk menangani penghapusan semua todo
function handleClearTodos(e) {
  if (confirm("Apakah Anda benar-benar ingin menghapus semua?")) {
    todoList.innerHTML = "";
    clearTodosFromLocalStorage();
  }
}

// Fungsi untuk menghapus semua todos dari local storage
function clearTodosFromLocalStorage() {
  localStorage.removeItem("todos");
}

// Fungsi untuk memfilter todos berdasarkan input pengguna
function handleFilterTodos(e) {
  const filterText = e.target.value.toLowerCase();
  const todoItems = document.querySelectorAll(".todo-item");

  todoItems.forEach((item) => {
    const itemText = item.firstChild.textContent.toLowerCase();
    item.style.cssText = itemText.includes(filterText)
      ? "display: block ;"
      : "display: none !important;";
  });
}
