// Seleccionamos el elemento h1 con querySelector
const title = document.querySelector("h1");

// Cambiamos el color del texto del h1 a rojo
title.style.color = "red";

// Seleccionamos el elemento <menu>
const menu = document.querySelector("menu");

// Cambiamos el fondo del menú a rojo
menu.style.backgroundColor = "red";

// Cambiamos el tamaño de fuente del menú a 25 píxeles
menu.style.fontSize = "25px";

// Reemplazamos la clase del menú por "main-menu"
menu.className = "main-menu";

// Mostramos el elemento h1 y el menú en consola como objeto para inspección
console.dir(title);
console.dir(menu);

// ----------------------
// Bonus: comportamiento dinámico
// Cambiar el texto del <h1> después de 2 segundos
setTimeout(() => {
  title.textContent = "Título actualizado dinámicamente";
}, 2000);

// Cambiar la visibilidad del menú con el botón
const toggleButton = document.querySelector("button");
toggleButton.addEventListener("click", () => {
  // Alternamos las clases "visible" e "invisible"
  if (menu.classList.contains("invisible")) {
    menu.classList.remove("invisible");
    menu.classList.add("visible");
  } else {
    menu.classList.remove("visible");
    menu.classList.add("invisible");
  }
});
