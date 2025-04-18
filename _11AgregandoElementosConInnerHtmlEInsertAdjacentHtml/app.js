// Selecciona el elemento <ul> con id="listArea"
const listArea = document.getElementById("listArea");

// Agrega un nuevo <li> al final del contenido usando innerHTML
listArea.innerHTML += "<li>Item 5</li>";

// Agrega otro <li> al final usando insertAdjacentHTML
listArea.insertAdjacentHTML("beforeend", "<li>Item 6</li>");
