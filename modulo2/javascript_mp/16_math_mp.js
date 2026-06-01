console.log(Math.round(15.6));     // 16   — redondeo de precio
console.log(Math.floor(15.9));     // 15   — precio mínimo
console.log(Math.ceil(15.1));      // 16   — precio máximo
console.log(Math.abs(-7.99));        // 7.99   — descuento absoluto
console.log(Math.max(12.99, 15.50, 8.75));   // 15.50   — precio más caro
console.log(Math.min(12.99, 15.50, 8.75));   // 8.75   — precio más barato
console.log(Math.sqrt(16));       // 4   — raíz cuadrada (ejemplo)
console.log(Math.pow(1.1, 2));     // 1.21 — IVA al cuadrado
console.log(Math.trunc(15.9));     // 15   — precio entero
console.log(Math.random());       // número aleatorio entre 0 y 1

// Plato aleatorio del menú
function platoAleatorio() {
  const platos = ["Pasta", "Pollo", "Ensalada", "Pizza"];
  return platos[Math.floor(Math.random() * platos.length)];
}