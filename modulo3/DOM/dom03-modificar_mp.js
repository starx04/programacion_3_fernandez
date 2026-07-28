document.addEventListener("DOMContentLoaded", function () {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Plato del dia: Seco de pollo con arroz y menestra";
    console.log("mensaje:", mensaje);

    const link = document.getElementById("link");
    link.textContent = "Ver carta completa";
    link.href = "https://www.restaurante-ejemplo.com/carta";
    link.classList.add("boton");
    console.log("link:", link);
});
