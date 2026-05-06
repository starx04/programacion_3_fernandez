//funcion declarada para menú
function mostrarMenu(){
    console.log("Bienvenido al Restaurante!");
}

mostrarMenu(); // "Bienvenido al Restaurante!"

//funcion expresada para menú
const mostrarPlatos = function(){
    console.log("Mostrando platos disponibles");
}

mostrarPlatos(); // "Mostrando platos disponibles"

//funcion flecha para menú
const calcularTotal = () => {
    console.log("Calculando total de la cuenta");
}
calcularTotal(); // "Calculando total de la cuenta"

//funcion anonima para menú
setTimeout(function() {
    console.log("Preparando pedido en 1 segundos...");
}, 1000);

//funcion con parametros para menú
function mostrarPrecio(plato) {
    console.log(`El precio de ${plato} es $12.99`);
}
mostrarPrecio("Pasta"); // "El precio de Pasta es $12.99"

///
/// Funciones flecha (Arrow Functions) para menú
///

// Sintaxis completa
const sumarPrecios = (a, b) => {
  return a + b;
};

// Retorno implícito — cuando el cuerpo es una sola expresión
const sumarPreciosCorto = (a, b) => a + b;

// Un solo parámetro — precio con IVA
const agregarIVA = precio => precio * 1.21;

// Sin parámetros — menú del día
const menuDelDia = () => "Pasta Carbonara";

console.log(sumarPrecios(12.99, 8.50));        // 21.49
console.log(sumarPreciosCorto(12.99, 8.50));   // 21.49
console.log(agregarIVA(10));          // 12.1
console.log(menuDelDia());     // "Pasta Carbonara"

//funcion para verificar si un plato está disponible
const estaDisponible = (cantidad) => {
    if (cantidad > 0) {
        console.log(`Plato disponible (${cantidad} unidades).`);
    } else {
        console.log(`Plato agotado.`);
    }
};

estaDisponible(5); // "Plato disponible (5 unidades)."
estaDisponible(0); // "Plato agotado."

//
//Parametros por defecto en menú
//

function ordenarPlato(plato = "Pasta", cantidad = 1) {
  return `Orden: ${cantidad}x ${plato}`;
}

console.log(ordenarPlato());                     // "Orden: 1x Pasta"
console.log(ordenarPlato("Pollo"));               // "Orden: 1x Pollo"
console.log(ordenarPlato("Ensalada", 2)); // "Orden: 2x Ensalada"

// También funciona con arrow functions
const aplicarDescuento = (precio, descuento = 0.1) => precio * (1 - descuento);

console.log(aplicarDescuento(20));     // 18   (10% descuento)
console.log(aplicarDescuento(20, 0.2));  // 16  (20% descuento)

//funcion para calcular propina con parametros por defecto
const calcularPropina = (total = 20, porcentaje = 0.1) => total * porcentaje;

console.log(calcularPropina(50, 0.15)); // 7.5
console.log(calcularPropina(50));    // 5
console.log(calcularPropina());     // 2

//
//Parametros rest en menú
//

// ...precios captura todos los precios en un array
function sumarCuenta(...precios) {
  let total = 0;
  for (const precio of precios) {
    total += precio;
  }
  return total;
}

console.log(sumarCuenta(12.99, 8.50, 3.50));          // 25.99
console.log(sumarCuenta(12.99, 8.50, 3.50, 2.00));   // 27.99
console.log(sumarCuenta());                 // 0

// Se puede combinar con parámetros normales
function registrarPedido(mesa, ...platos) {
  for (const plato of platos) {
    console.log(`[Mesa ${mesa}] ${plato}`);
  }
}

registrarPedido("5", "Pasta", "Pollo", "Postre");
// [Mesa 5] Pasta
// [Mesa 5] Pollo
// [Mesa 5] Postre

//ingreso e impresion de pedido con parametro rest
function procesarPedido(cliente, ...items) {
  console.log(`Pedido de: ${cliente}`);
  console.log("Items ordenados:");
  for (const item of items) {
    console.log(`- ${item}`);
  }
}

procesarPedido("Fernandez", "Pasta Carbonara", "Agua", "Tiramisu");
// Pedido de: Fernandez
// Items ordenados:
// - Pasta Carbonara
// - Agua
// - Tiramisu

//
//Operador spread (...) en menú
//

const preciosPlatos = [12.99, 15.50, 8.75, 6.50, 22.00];

// Sin spread — Math.max no acepta un array directamente
console.log(Math.max(preciosPlatos));       // NaN

// Con spread — expande el array en argumentos
console.log(Math.max(...preciosPlatos));    // 22.00
console.log(Math.min(...preciosPlatos));    // 6.50

// Combinar menús
const entradas = ["Ensalada", "Sopa"];
const principales = ["Pasta", "Pollo", "Pescado"];
const menuCompleto = [...entradas, ...principales];
console.log(menuCompleto);   // ["Ensalada", "Sopa", "Pasta", "Pollo", "Pescado"]

// Copiar un menú (copia superficial)
const menuOriginal = ["Pasta", "Pollo", "Ensalada"];
const menuCopia = [...menuOriginal];
menuCopia.push("Postre");
console.log(menuOriginal);   // ["Pasta", "Pollo", "Ensalada"]  — no se modifica
console.log(menuCopia);      // ["Pasta", "Pollo", "Ensalada", "Postre"]

// Spread con objetos de pedido
const pedidoBase = { plato: "Pasta", precio: 12.99 };
const pedidoCompleto = { ...pedidoBase, cantidad: 2, mesa: 5 };
console.log(pedidoCompleto);   // { plato: 'Pasta', precio: 12.99, cantidad: 2, mesa: 5 }

// Una función sin return devuelve undefined implícitamente
function sinConfirmacion() {
  const pedido = "procesando";
  // no hay return
}
console.log(sinConfirmacion());   // undefined

// return detiene la ejecución de la función
function verificarDisponibilidad(cantidad) {
  if (cantidad > 0) {
    return "Disponible";    // sale aquí si hay stock
  }
  return "Agotado";     // solo llega aquí si no hay stock
}

// Forma más concisa — devolver la expresión directamente
const verificarStock = cantidad => cantidad > 0 ? "Disponible" : "Agotado";

console.log(verificarDisponibilidad(5));         // "Disponible"