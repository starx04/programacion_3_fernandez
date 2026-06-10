document.addEventListener("DOMContentLoaded", function(){
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent= ("Texto modificado desde :");
    console.log("mensaje:", mensaje);

    const link = document.getElementById("link");
    link.textContent = "www.google.com";
    link.href = "http://www.google.com";
    link.classList.add("boton");
    console.log("link:", link);


});