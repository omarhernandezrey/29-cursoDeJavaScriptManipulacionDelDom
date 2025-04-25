// Selecciona el formulario por su ID
const taskForm = document.getElementById("task-form");

// Selecciona el contenedor de la lista de tareas
const taskList = document.getElementById("task-list");

// Carga las tareas almacenadas en localStorage al iniciar la aplicación
loadTasks();

// Escucha el evento de envío del formulario
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que la página se recargue

  // Obtiene el valor ingresado por el usuario
  const taskInput = document.getElementById("task-input");
  const task = taskInput.value;
  console.log(task); // Muestra la tarea en la consola

  // Si hay texto, se crea y guarda la tarea
  if (task) {
    taskList.append(createTaskElement(task)); // Crea el <li> y lo agrega a la lista
    storeTaskInLocalStorage(task); // Guarda la tarea en localStorage
    taskInput.value = ""; // Limpia el campo de entrada
  }
});

// Crea un elemento <li> con la tarea y botones de eliminar/editar
function createTaskElement(task) {
  const li = document.createElement("li"); // Crea el elemento <li>
  li.textContent = task; // Asigna el texto de la tarea

  // Agrega los botones de eliminar y editar al <li>
  li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));

  return li; // Devuelve el elemento completo
}

// Crea un botón tipo <span> con el texto y clase que se le indiquen
function createButton(text, className) {
  const btn = document.createElement("span"); // Crea un <span>
  btn.textContent = text; // Asigna el emoji o texto
  btn.className = className; // Le da una clase CSS
  return btn; // Devuelve el botón creado
}

// Escucha clics en la lista para eliminar o editar tareas
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    deleteTask(event.target.parentElement); // Elimina el elemento
  } else if (event.target.classList.contains("edit-btn")) {
    editTask(event.target.parentElement); // Edita el contenido del <li>
  }
});

// Función que elimina una tarea del DOM y del localStorage
function deleteTask(taskItem) {
  if (confirm("Estás segura / seguro de borrar este elemento?")) {
    removeFromLocalStorage(taskItem.firstChild.textContent); // Elimina del almacenamiento
    taskItem.remove(); // Elimina del DOM
  }
}

// Función que permite editar una tarea y actualizar el localStorage
function editTask(taskItem) {
  const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);
  if (newTask !== null) {
    taskItem.firstChild.textContent = newTask; // Actualiza el texto en pantalla
    updateLocalStorage(); // Actualiza el localStorage completo
  }
}

// Almacena una nueva tarea en localStorage
function storeTaskInLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]"); // Obtiene tareas actuales
  tasks.push(task); // Agrega la nueva tarea
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Guarda la lista actualizada
}

// Carga tareas del localStorage y las muestra en pantalla
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]"); // Lee del almacenamiento
  tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task)); // Crea cada <li>
  });
}

// Actualiza el localStorage con el estado actual de la lista visual
function updateLocalStorage() {
  const tasks = Array.from(taskList.querySelectorAll("li")).map(
    (li) => li.firstChild.textContent // Extrae el texto de cada <li>
  );
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Guarda la lista completa
}

// Elimina una tarea específica del localStorage usando su texto
function removeFromLocalStorage(taskContent) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]"); // Tareas actuales
  const updateTasks = tasks.filter((task) => task !== taskContent); // Elimina la que coincide
  localStorage.setItem("tasks", JSON.stringify(updateTasks)); // Guarda la nueva lista
}

// =======================
// SECCIÓN: Cambiar tema
// =======================

// Obtiene el botón para alternar el tema oscuro/claro por su ID
const themeToggleButton = document.getElementById("toggle-theme-btn");

// Lee el tema actual desde localStorage al iniciar
const currentTheme = localStorage.getItem("theme");
console.log(currentTheme); // Muestra el tema actual guardado

// Escucha el clic en el botón para cambiar el tema
themeToggleButton.addEventListener("click", () => {
  // Alterna la clase en el body para aplicar o quitar el tema oscuro
  document.body.classList.toggle("dark-theme");

  // Guarda el tema actual en localStorage ("dark" o "light")
  const theme = document.body.classList.contains("dark-theme")
    ? "dark"
    : "light";
  localStorage.setItem("theme", theme);
});

// Si el tema actual guardado es "dark", aplica la clase al body
if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
}
