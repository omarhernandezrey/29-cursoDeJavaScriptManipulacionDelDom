// Selecciona el elemento con la clase "container" y lo guarda en una constante
const container = document.querySelector(".container");

// Selecciona el primer botón que encuentre en el documento
const button = document.querySelector("button");

// Agrega un evento al contenedor para cuando el mouse pase por encima (mouseover)
container.addEventListener("mouseover", () => {
  // Cambia el color de fondo del contenedor a azul
  container.style.backgroundColor = "blue";
});

// Agrega un evento al contenedor para cuando el mouse salga del área del contenedor (mouseout)
container.addEventListener("mouseout", () => {
  // Restaura el color de fondo del contenedor a rojo
  container.style.backgroundColor = "red";
});

// Este bloque está comentado. Si se descomenta, muestra una alerta al hacer clic en el botón
// button.addEventListener("click", () => {
//   alert("Button clicked!");
// });

// Se define una función que será ejecutada cuando se haga clic en el botón
const buttonClickCallback = () => {
  alert("Button Clicked!"); // Muestra una alerta al usuario
};

// Se agrega el evento 'click' al botón y se le asigna la función previamente declarada
button.addEventListener("click", buttonClickCallback);

// Después de 2 segundos (2000 milisegundos), se elimina el evento click del botón
setTimeout(() => {
  button.removeEventListener("click", buttonClickCallback);
}, 2000);
