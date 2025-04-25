// Obtiene el formulario de tareas por su ID
const taskForm = document.getElementById("task-form");

// Obtiene el contenedor de la lista de tareas
const taskList = document.getElementById("task-list");

// Carga las tareas almacenadas en localStorage al cargar la página
loadTasks();

// Escucha el evento submit del formulario para agregar una nueva tarea
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Previene que la página se recargue

  // Obtiene el valor ingresado en el input de tarea
  const taskInput = document.getElementById("task-input");
  const task = taskInput.value;
  console.log(task); // Muestra la tarea en consola

  // Si el input no está vacío, se crea la tarea
  if (task) {
    // Agrega la tarea a la lista visual
    taskList.append(createTaskElement(task));
    // Guarda la tarea en localStorage
    storeTaskInLocalStorage(task);
    // Limpia el campo de entrada
    taskInput.value = "";
  }
});

// Crea un nuevo elemento <li> para representar una tarea
function createTaskElement(task) {
  const li = document.createElement("li"); // Crea el <li>
  li.textContent = task; // Le asigna el texto de la tarea
  // Le agrega dos botones: eliminar (❌) y editar (✏️)
  li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));
  return li; // Devuelve el elemento <li> completo
}

// Crea un botón tipo <span> con texto y clase personalizada
function createButton(text, className) {
  const btn = document.createElement("span"); // Crea el elemento <span>
  btn.textContent = text; // Le pone el emoji o texto
  btn.className = className; // Le asigna la clase para estilo o función
  return btn; // Devuelve el botón creado
}

// Escucha los clics en la lista de tareas para eliminar o editar
taskList.addEventListener("click", (event) => {
  // Si se hace clic en un botón con clase "delete-btn"
  if (event.target.classList.contains("delete-btn")) {
    // Llama la función para eliminar la tarea correspondiente
    deleteTask(event.target.parentElement);
  }
  // Si se hace clic en un botón con clase "edit-btn"
  else if (event.target.classList.contains("edit-btn")) {
    // Llama la función para editar la tarea correspondiente
    editTask(event.target.parentElement);
  }
});

// Función que elimina una tarea visualmente (no en localStorage)
function deleteTask(taskItem) {
  // Pide confirmación antes de eliminar
  if (confirm("Estás segura / seguro de borrar este elemento?")) {
    taskItem.remove(); // Elimina el elemento del DOM
  }
}

// Función para editar una tarea
function editTask(taskItem) {
  // Pide al usuario que edite el texto actual de la tarea
  const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);
  // Si se ingresa un nuevo valor (no se cancela)
  if (newTask !== null) {
    taskItem.firstChild.textContent = newTask; // Actualiza el texto de la tarea
  }
}

// Guarda una tarea en localStorage
function storeTaskInLocalStorage(task) {
  // Obtiene las tareas actuales desde localStorage o un arreglo vacío
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  tasks.push(task); // Agrega la nueva tarea al arreglo
  // Actualiza localStorage con la nueva lista de tareas
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Carga las tareas almacenadas en localStorage al iniciar la página
function loadTasks() {
  // Obtiene las tareas guardadas o un arreglo vacío si no hay nada
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  // Crea visualmente cada tarea y la agrega a la lista
  tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task));
  });
}
