//funcion declarada
function saludo (){
    console.log("Hola, mundo!");
}

saludo(); // "Hola, mundo!"

//funcion expresada
const saludar_Hola = function(){
    console.log("Hola con funcion expresada");
}

saludar_Hola(); // "Hola con funcion expresada"

//funcion flecha
const saludar_Flecha = () => {
    console.log("Hola con funcion flecha");
}
saludar_Flecha(); // "Hola con funcion flecha"

//funcion anonima
setTimeout(function() {
    console.log("Ejecutando función anónima después de 1 segundos...");
}, 1000);

//funcion con parametros
function saludar_con_parametros(nombre) {
    console.log(`Hola, ${nombre}!`);
}
saludar_con_parametros("Fernandez"); // "Hola, Fernandez!"

