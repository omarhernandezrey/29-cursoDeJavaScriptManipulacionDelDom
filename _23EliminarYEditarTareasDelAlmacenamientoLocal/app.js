// Obtiene el formulario de tareas por su ID
const taskForm = document.getElementById("task-form");

// Obtiene el contenedor de la lista de tareas
const taskList = document.getElementById("task-list");

// Carga las tareas guardadas en localStorage al cargar la página
loadTasks();

// Agrega un evento al formulario para cuando se envía (submit)
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Previene que la página se recargue

  // Obtiene el valor ingresado por el usuario en el input
  const taskInput = document.getElementById("task-input");
  const task = taskInput.value;
  console.log(task); // Muestra el valor en la consola

  // Si el input no está vacío, se agrega la tarea
  if (task) {
    taskList.append(createTaskElement(task)); // Agrega el elemento visual
    storeTaskInLocalStorage(task); // Lo guarda en localStorage
    taskInput.value = ""; // Limpia el input
  }
});

// Crea un nuevo <li> con la tarea y los botones de editar y eliminar
function createTaskElement(task) {
  const li = document.createElement("li"); // Crea un elemento <li>
  li.textContent = task; // Asigna el texto de la tarea
  // Añade los botones de eliminar y editar
  li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));
  return li; // Devuelve el <li> creado
}

// Crea un botón <span> con texto y clase CSS personalizada
function createButton(text, className) {
  const btn = document.createElement("span"); // Crea un <span>
  btn.textContent = text; // Establece el contenido (emoji o texto)
  btn.className = className; // Asigna la clase
  return btn; // Devuelve el botón
}

// Escucha eventos de clic en la lista de tareas
taskList.addEventListener("click", (event) => {
  // Si se hace clic en el botón de eliminar
  if (event.target.classList.contains("delete-btn")) {
    deleteTask(event.target.parentElement); // Llama a la función para eliminar
  }
  // Si se hace clic en el botón de editar
  else if (event.target.classList.contains("edit-btn")) {
    editTask(event.target.parentElement); // Llama a la función para editar
  }
});

// Elimina una tarea del DOM y también del localStorage
function deleteTask(taskItem) {
  // Pide confirmación antes de eliminar
  if (confirm("Estás segura / seguro de borrar este elemento?")) {
    removeFromLocalStorage(taskItem.firstChild.textContent); // Elimina del localStorage
    taskItem.remove(); // Elimina del DOM
  }
}

// Permite editar una tarea visualmente y actualiza el localStorage
function editTask(taskItem) {
  // Abre un prompt con el texto actual de la tarea
  const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);
  // Si el usuario no canceló
  if (newTask !== null) {
    taskItem.firstChild.textContent = newTask; // Actualiza el texto del <li>
    updateLocalStorage(); // Actualiza el localStorage con la lista actual
  }
}

// Almacena una nueva tarea en localStorage
function storeTaskInLocalStorage(task) {
  // Obtiene las tareas actuales o un arreglo vacío si no hay
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push(task); // Agrega la nueva tarea
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Guarda en localStorage
}

// Carga todas las tareas desde localStorage al iniciar la página
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  // Por cada tarea encontrada, la crea visualmente en la lista
  tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task));
  });
}

// Actualiza localStorage con el contenido actual de la lista de tareas
function updateLocalStorage() {
  // Convierte cada <li> en una cadena de texto (solo el contenido de la tarea)
  const tasks = Array.from(taskList.querySelectorAll("li")).map(
    (li) => li.firstChild.textContent
  );
  // Guarda la lista actualizada en localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Elimina una tarea específica del localStorage
function removeFromLocalStorage(taskContent) {
  // Obtiene todas las tareas guardadas
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  // Filtra para excluir la tarea que se desea eliminar
  const updateTasks = tasks.filter((task) => task !== taskContent);
  // Guarda el nuevo arreglo sin la tarea eliminada
  localStorage.setItem("tasks", JSON.stringify(updateTasks));
}

