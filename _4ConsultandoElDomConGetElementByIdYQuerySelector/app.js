    // Selecciona el elemento con id "app-title"
    const tituloPorId = document.getElementById("app-title");
    console.log(tituloPorId);

    // Selecciona el mismo elemento usando querySelector (por su id con #)
    const tituloQuery = document.querySelector("#app-title");
    console.log(tituloQuery);

    // Selecciona el primer párrafo encontrado
    const primerParrafo = document.querySelector("p");
    console.log(primerParrafo);

    // Selecciona todos los elementos con clase "menu-items"
    const itemsPorClase = document.getElementsByClassName("menu-items");
    console.log(itemsPorClase);

    // Selecciona todos los elementos <p> del documento
    const parrafos = document.getElementsByTagName("p");
    console.log(parrafos);

    // Alternativa moderna: selecciona todos los elementos con clase "menu-items" usando querySelectorAll
    const itemsQuery = document.querySelectorAll(".menu-items");
    console.log(itemsQuery);
