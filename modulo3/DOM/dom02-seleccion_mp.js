document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.getElementById("titulo");
    console.log("Titulo:", titulo);

    const destacados = document.getElementsByClassName("destacado");
    console.log("Platos destacados:", destacados);

    const items = document.getElementsByTagName("li");
    console.log("Items del menu:", items);

    const primerPlato = document.querySelector(".plato");
    console.log("Primer plato:", primerPlato);

    const todosLosPlatos = document.querySelectorAll(".plato");
    console.log("Todos los platos:", todosLosPlatos);

    Array.from(todosLosPlatos).forEach(plato => {
        console.log("Plato del menu:", plato.textContent.trim());
    });
});
