// Selecciona el primer elemento <input> del documento
const input = document.querySelector("input");

// Muestra el elemento <input> como tal en consola (estructura visual del DOM)
console.log(input);

// Muestra el objeto completo del input con todas sus propiedades internas (más útil para inspección)
console.dir(input);

// Accede y muestra el valor actual del input
console.log("Valor del input:", input.value);

// Accede al ID del input
console.log("ID del input:", input.id);

// Accede a la clase del input
console.log("Clase del input:", input.className);

// Cambia el valor del input mediante JavaScript
input.value = "Juan Pérez";
console.log("Nuevo valor del input:", input.value);

// Cambia el estilo del input
input.style.border = "2px solid #47cfac";
input.style.padding = "8px";
input.style.fontSize = "16px";
