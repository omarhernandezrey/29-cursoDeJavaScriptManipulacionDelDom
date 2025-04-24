// const listItems = document.querySelectorAll("li");

// listItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     // Alterna la clase "highlight" cuando se hace clic en un <li>
//     event.target.classList.toggle("highlight");
//   });
// });

// Selecciona el elemento <ul> del documento
const list = document.querySelector("ul");

// Agrega un escuchador de eventos al <ul> que se activa cuando se hace clic en cualquier parte dentro de él
list.addEventListener("click", (event) => {
  // Encuentra el elemento <li> más cercano al objetivo del evento (por si se hace clic dentro del <li>)
  event.target.closest("li").classList.toggle("highlight");
});
