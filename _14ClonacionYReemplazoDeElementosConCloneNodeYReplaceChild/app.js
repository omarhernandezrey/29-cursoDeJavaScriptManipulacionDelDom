// Seleccionamos el contenedor con el párrafo original
const contentArea = document.querySelector("#contentArea");

// Obtenemos el párrafo original dentro de contentArea
const originalP = contentArea.querySelector("p");

// Clonamos el párrafo completo (incluye contenido)
const clonedP = originalP.cloneNode(true);

// Insertamos el clon al final del mismo contenedor
contentArea.append(clonedP);

// Cambiamos el texto del párrafo clonado
clonedP.textContent = "Este es un nuevo texto";

// Seleccionamos la lista <ul> con id="listArea"
const list = document.querySelector("#listArea");

// Seleccionamos el tercer elemento de la lista (índice 2)
const itemToReplace = list.children[2];

// Reemplazamos ese <li> por el párrafo clonado
itemToReplace.replaceWith(clonedP);
