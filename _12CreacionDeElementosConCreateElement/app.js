// Crear un nuevo párrafo
const newPElement = document.createElement("p");
newPElement.textContent = "Fuí creado con CreateElement";

// Seleccionar el contenedor con id="contentArea"
const contentArea = document.getElementById("contentArea");

// Insertar el nuevo párrafo dentro del contenedor
contentArea.append(newPElement);

// Crear un nuevo elemento <li>
const newItem = document.createElement("li");
newItem.textContent = "Item 5";

// Seleccionar la lista <ul> con id="listArea"
const listArea = document.getElementById("listArea");

// Insertar el nuevo <li> en diferentes posiciones
listArea.prepend(newItem); // Lo coloca al inicio de la lista
listArea.before(newItem);  // Lo coloca antes del <ul>
listArea.after(newItem);   // Lo coloca después del <ul>
