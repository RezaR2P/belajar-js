// Kumpulkan semua UI element
const todoform = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

// kumpulan event listerner
immediateLoadEventListeners();
function immediateLoadEventListeners() {
  // Mendapatkan todos dari local storage dan menampilkan di browser
  document.addEventListener("DOMContentLoaded", getTodos);

  // ini adalah event untuk menambahkan todo
  todoform.addEventListener("submit", addTodo);

  // ini adalah event untuk menghapus todo
  todoList.addEventListener("click", deleteTodo);

  // ini adalah event untuk membersihkan todo
  clearButton.addEventListener("click", clearTodos);

  // ini adalah event untuk memfilter todo
  filterInput.addEventListener("keyup", filterTodos);
}

// reuseable codes
function createTodoElement(value) {
  // membuat li element <li class= "list-group-item d-flex justify-content-between align-items-center mb-1">
  const li = document.createElement("li");
  // Membuat li append child itu membuat element baru
  li.appendChild(document.createTextNode(value));
  // menambakan kelas pada li
  li.className =
    "todo-item list-group-item d-flex justify-content-between align-items-center mb-1";

  // membuat delete button
  const a = document.createElement("a");
  // memasukan element a pada li <li><a href="#" class="badge badge-danger">Delete</a></li>
  li.appendChild(a);
  // membuat propeti value untuk a element
  a.href = "#";
  a.className = "badge badge-danger delete";
  a.innerHTML = "Delete"; // ini memasuka kata kata di dalam a

  // penutup li
  todoList.appendChild(li); // kirim file akan kemana
}

function getItemFromLocalStorage() {
  let todos;
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
}

function removeTodoFromLocalStorage(todoText) {
  let todos = getItemFromLocalStorage();
  todos = todos.filter((todo) => todo !== todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// akhir reuseable codes

// ini adalah dom function

function getTodos() {
  const todos = getItemFromLocalStorage();
  todos.forEach((todo) => {
    createTodoElement(todo);
  });
}

function addTodo(e) {
  e.preventDefault();

  if (todoInput.value) {
    createTodoElement(todoInput.value);

    addTodoLocalStorage(todoInput.value);
    todoInput.value = "";
  } else {
    alert("Masukan Sebuah todo jgn di kosongkan");
  }
}

function addTodoLocalStorage(todoInputValue) {
  const todos = getItemFromLocalStorage();
  todos.push(todoInputValue);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(e) {
  e.preventDefault();

  if (e.target.classList.contains("delete")) {
    if (confirm("Apakah Anda Yakin Ingin Menghapus?")) {
      const todoText = parent.firstChild.textContent.trim();
      removeTodoFromLocalStorage(todoText);
    }
  }
}

function clearTodos(e) {
  if (confirm("apakah anda benar benar ingin menhapus semua?")) {
    todoList.innerHTML = "";
  }
}

function filterTodos(e) {
  const filterText = e.target.value.toLowerCase();
  const todoItems = document.querySelectorAll(".todo-item");

  todoItems.forEach((item) => {
    const itemText = item.firstChild.textContent.toLowerCase();

    if (itemText.indexOf(filterText) !== -1) {
      item.setAttribute("style", "display: block;");
    } else {
      item.setAttribute("style", "display: none !important;");
    }
    console.log(itemText);
  });
}
