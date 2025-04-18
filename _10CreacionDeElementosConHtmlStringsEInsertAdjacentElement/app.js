// Selecciona el elemento con id="contentArea"
const contentArea = document.getElementById("contentArea");

// Reemplaza todo su contenido con un nuevo párrafo
contentArea.innerHTML = "<p>Este es un nuevo parrafo.</p>";

// Inserta otro párrafo adicional al final del contenido existente
contentArea.insertAdjacentHTML("beforeend", "<p>Esta es otro parrafo nuevo nuevo.</p>");
