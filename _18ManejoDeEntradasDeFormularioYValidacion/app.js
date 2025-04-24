// Selecciona el formulario por su ID "myForm" y lo guarda en una constante
const form = document.getElementById("myForm");

// Agrega un "escuchador de eventos" al formulario para el evento 'submit' (cuando se envía el formulario)
form.addEventListener("submit", (event) => {
  // Previene el comportamiento por defecto del formulario, que es recargar la página al enviar
  event.preventDefault();

  // Obtiene el valor del campo de texto con nombre "name" dentro del formulario
  const name = form.elements["name"].value;
  console.log(name); // Muestra el nombre ingresado en consola

  // Valida que el nombre tenga al menos 3 caracteres
  if (name.length < 3) {
    alert("El nombre necesita más de 3 letras"); // Alerta si el nombre es muy corto
    return; // Sale de la función sin continuar
  }

  // Obtiene el valor del campo de texto con nombre "email"
  const email = form.elements["email"].value;
  console.log(email); // Muestra el correo ingresado en consola

  // Valida que el correo contenga el símbolo '@'
  if (!email.includes("@")) {
    alert("Please enter a valid email address"); // Alerta si el correo no es válido
    return; // Sale de la función sin continuar
  }

  // Si pasa todas las validaciones, muestra una alerta indicando éxito
  alert("Formulario enviado exitosamente!");

  // Muestra en consola un mensaje combinando el nombre y correo
  console.log(`El nombre del usuario es: ${name} y su correo es: ${email}`);

  // Crea un objeto con los datos del formulario
  const formData = {
    name: name,
    email: email,
  };

  // Muestra el objeto con los datos en consola
  console.log(formData);
});
