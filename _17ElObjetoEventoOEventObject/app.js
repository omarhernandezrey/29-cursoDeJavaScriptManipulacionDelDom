// Selecciona el primer botón del documento HTML (en este caso el que tiene id="btn")
// y lo guarda en una constante llamada "button"
const button = document.querySelector("button");

// Se define una función llamada "buttonClicked" que será ejecutada cuando ocurra el evento 'click'
// Esta función recibe como parámetro el objeto "event" que contiene toda la información del evento
const buttonClicked = (event) => {
  // Muestra en consola el elemento HTML que disparó el evento (el botón en este caso)
  console.log(event.target);

  // Muestra en consola el valor del atributo 'id' del elemento que disparó el evento
  console.log(event.target.id);

  // Muestra en consola el contenido de texto que hay dentro del botón
  console.log(event.target.textContent);
};

// Se agrega un "escuchador de eventos" al botón que escucha el evento 'click'
// Cuando el botón se hace clic, se ejecuta la función "buttonClicked"
button.addEventListener("click", buttonClicked);
