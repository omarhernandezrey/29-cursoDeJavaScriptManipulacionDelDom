// Selecciona el primer <li> encontrado en el documento
const firstItem = document.querySelector("li");

// Elimina directamente ese <li> del DOM
firstItem.remove();

// Selecciona el elemento <ul>
const list = document.querySelector("ul");

// Elimina el primer hijo elemento de la lista (<li> restante)
list.removeChild(list.firstElementChild);
