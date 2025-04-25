// Selecciona el formulario por su ID
const taskForm = document.getElementById("task-form");

// Selecciona la lista de tareas donde se mostrarán los elementos
const taskList = document.getElementById("task-list");

// Carga las tareas almacenadas en localStorage cuando se inicia la aplicación
loadTasks();

// Agrega un evento al formulario para manejar el envío de nuevas tareas
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Previene que se recargue la página

  // Obtiene el valor del campo de entrada
  const taskInput = document.getElementById("task-input");
  const task = taskInput.value;
  console.log(task); // Muestra la tarea en consola

  // Si el campo no está vacío, crea y guarda la tarea
  if (task) {
    taskList.append(createTaskElement(task)); // Agrega visualmente la tarea
    storeTaskInLocalStorage(task); // La guarda en localStorage
    taskInput.value = ""; // Limpia el campo de entrada
  }
});

// Función que crea el elemento visual de una tarea con botones
function createTaskElement(task) {
  const li = document.createElement("li"); // Crea un nuevo <li>
  li.textContent = task; // Le asigna el texto de la tarea
  // Agrega los botones de eliminar y editar
  li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));
  return li; // Devuelve el <li> completo
}

// Función que crea un botón tipo <span> con texto y clase CSS
function createButton(text, className) {
  const btn = document.createElement("span"); // Crea un nuevo <span>
  btn.textContent = text; // Establece el texto (emoji)
  btn.className = className; // Asigna una clase para estilo o lógica
  return btn; // Devuelve el botón <span> creado
}

// Evento que detecta clics sobre la lista de tareas
taskList.addEventListener("click", (event) => {
  // Si el clic fue en el botón de eliminar
  if (event.target.classList.contains("delete-btn")) {
    deleteTask(event.target.parentElement); // Llama a la función para eliminar
  } 
  // Si el clic fue en el botón de editar
  else if (event.target.classList.contains("edit-btn")) {
    editTask(event.target.parentElement); // Llama a la función para editar
  }
});

// Elimina una tarea del DOM y del localStorage
function deleteTask(taskItem) {
  // Pide confirmación antes de borrar
  if (confirm("Estás segura / seguro de borrar este elemento?")) {
    removeFromLocalStorage(taskItem.firstChild.textContent); // Elimina del localStorage
    taskItem.remove(); // Elimina del DOM
  }
}

// Edita el contenido de una tarea visualmente y actualiza el localStorage
function editTask(taskItem) {
  // Solicita al usuario el nuevo texto de la tarea
  const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);
  if (newTask !== null) {
    taskItem.firstChild.textContent = newTask; // Actualiza visualmente
    updateLocalStorage(); // Actualiza el localStorage completo
  }
}

// Almacena una nueva tarea en localStorage
function storeTaskInLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]"); // Obtiene las tareas existentes
  tasks.push(task); // Agrega la nueva tarea
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Guarda en localStorage
}

// Carga las tareas desde localStorage al iniciar la aplicación
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]"); // Obtiene todas las tareas
  tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task)); // Crea y agrega cada tarea visualmente
  });
}

// Actualiza el localStorage con el estado actual de la lista visual
function updateLocalStorage() {
  const tasks = Array.from(taskList.querySelectorAll("li")).map(
    (li) => li.firstChild.textContent // Extrae solo el texto de cada tarea
  );
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Guarda la lista actualizada
}

// Elimina una tarea específica del localStorage comparando por su texto
function removeFromLocalStorage(taskContent) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]"); // Obtiene las tareas
  const updateTasks = tasks.filter((task) => task !== taskContent); // Filtra la tarea que se quiere eliminar
  localStorage.setItem("tasks", JSON.stringify(updateTasks)); // Guarda el nuevo array
}
