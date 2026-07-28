document.addEventListener("DOMContentLoaded", function(){
    const titulo = document.getElementById("titulo");
    console.log("Tìtulo:", titulo);

    const notas = document.getElementsByClassName("nota");
    console.log("Notas:", notas);

    const items = document.getElementsByTagName("li");
    console.log("items:", items);

    const primerItem = document.querySelector(".item");
    console.log("Primer item:", primerItem);

    const todosLosItems = document.querySelector(".item");
    console.log("Todos los items:", todosLosItems);

    Array.from(todosLosItems).forEach(Element =>{});
    console.log("Item:", Element);
});