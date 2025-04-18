// Selecciona el elemento <menu>
const menu = document.querySelector("menu");

// Selecciona el botón
const button = document.querySelector("button");

// Agrega un listener para alternar la clase "invisible" al hacer clic en el botón
button.addEventListener("click", () => {
  menu.classList.toggle("invisible");
});
