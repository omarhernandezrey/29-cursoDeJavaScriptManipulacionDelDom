// Obtenemos el formulario donde se ingresan las tareas
const taskForm = document.getElementById("task-form");

// Obtenemos la lista (ul o ol) donde se mostrarán las tareas
const taskList = document.getElementById("task-list");

// Escuchamos el evento 'submit' del formulario (cuando se envía una nueva tarea)
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

  // Obtenemos el input donde el usuario escribe la tarea
  const taskInput = document.getElementById("task-input");

  // Guardamos el valor ingresado por el usuario
  const task = taskInput.value;
  console.log(task); // Mostramos la tarea en consola (para depuración)

  // Si hay una tarea escrita (no está vacía)
  if (task) {
    // Creamos el elemento de tarea y lo agregamos a la lista
    taskList.append(createTaskElement(task));

    // Limpiamos el campo de entrada para permitir una nueva tarea
    taskInput.value = "";
  }
});

// Función que crea un elemento <li> con el texto de la tarea y los botones de editar y eliminar
function createTaskElement(task) {
  const li = document.createElement("li"); // Creamos el <li> para la tarea
  li.textContent = task; // Le asignamos el texto de la tarea
  // Agregamos los botones de eliminar (❌) y editar (✏️)
  li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));
  return li; // Devolvemos el <li> creado
}

// Función reutilizable que crea un botón tipo <span> con texto y clase CSS
function createButton(text, className) {
  const btn = document.createElement("span"); // Usamos <span> como botón
  btn.textContent = text; // Asignamos el ícono (❌ o ✏️)
  btn.className = className; // Asignamos la clase para identificar el botón
  return btn;
}

// Delegamos el manejo de clics en los botones de eliminar y editar dentro de la lista
taskList.addEventListener("click", (event) => {
  // Si el clic fue en un botón con clase 'delete-btn'
  if (event.target.classList.contains("delete-btn")) {
    deleteTask(event.target.parentElement); // Llamamos a la función para eliminar
  } 
  // Si el clic fue en un botón con clase 'edit-btn'
  else if (event.target.classList.contains("edit-btn")) {
    editTask(event.target.parentElement); // Llamamos a la función para editar
  }
});

// Función que elimina una tarea después de confirmar con el usuario
function deleteTask(taskItem) {
  if (confirm("¿Estás segura / seguro de borrar este elemento?")) {
    taskItem.remove(); // Elimina el <li> de la lista
  }
}

// Función que permite editar el texto de una tarea con un prompt
function editTask(taskItem) {
  // Solicitamos un nuevo texto para la tarea
  const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);
  // Si el usuario no cancela (no es null), actualizamos el texto
  if (newTask !== null) {
    taskItem.firstChild.textContent = newTask;
  }
}
