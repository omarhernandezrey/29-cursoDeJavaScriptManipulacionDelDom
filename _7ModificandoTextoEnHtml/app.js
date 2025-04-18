// Seleccionamos el elemento con id "app-title"
const title = document.querySelector("#app-title");

// Mostramos el elemento como objeto HTML
console.log(title);

// Mostramos todas sus propiedades internas en forma de objeto
console.dir(title);

// Cambiamos el texto usando textContent (más rápido, ignora estilos CSS como "display: none")
title.textContent = "Nuevo Texto";
console.log("Nuevo textContent:", title.textContent);

// Cambiamos el texto usando innerText (más preciso con estilos visibles, respeta display)
title.innerText = "Este es otro título";
console.log("Nuevo innerText:", title.innerText);
