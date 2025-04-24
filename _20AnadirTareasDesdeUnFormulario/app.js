// Obtiene el formulario por su ID "task-form" y lo guarda en una constante
const taskForm = document.getElementById("task-form");

// Obtiene el elemento de lista donde se agregarán las tareas, con ID "task-list"
const taskList = document.getElementById("task-list");

// Agrega un escuchador al evento "submit" del formulario
taskForm.addEventListener("submit", (event) => {
  // Evita que el formulario recargue la página al enviarse
  event.preventDefault();

  // Obtiene el campo de entrada de texto con ID "task-input"
  const taskInput = document.getElementById("task-input");

  // Guarda el valor que el usuario escribió en el input
  const task = taskInput.value;
  console.log(task); // Muestra la tarea en consola

  // Si el campo no está vacío, se crea y agrega un nuevo elemento <li> con la tarea
  if (task) {
    taskList.append(createTaskElement(task)); // Crea y agrega la tarea a la lista
    taskInput.value = ""; // Limpia el input después de agregar
  }
});

// Función que crea un nuevo elemento <li> representando una tarea
function createTaskElement(task) {
  const li = document.createElement("li"); // Crea un elemento <li>
  li.textContent = task; // Asigna el texto de la tarea al <li>

  // Agrega dos botones: uno para eliminar (❌) y otro para editar (✏️)
  li.append(
    createButton("❌", "delete-btn"), // Botón para eliminar
    createButton("✏️", "edit-btn")   // Botón para editar
  );

  return li; // Devuelve el elemento completo
}

// Función para crear un botón con el texto y clase que se le indiquen
function createButton(text, className) {
  const btn = document.createElement("span"); // Crea un <span> para usar como botón
  btn.textContent = text; // Asigna el texto (emoji)
  btn.className = className; // Asigna la clase CSS para estilo o funcionalidad
  return btn; // Devuelve el botón creado
}
