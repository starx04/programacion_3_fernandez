// Conversión explícita — recomendada
const precioTexto   = "15.99";
const precioNumero  = Number(precioTexto);          // 15.99
const cantidadEntera  = parseInt("5 platos", 10);  // 5   (segundo argumento: base 10)
const descuentoDecimal = parseFloat("10.5%");    // 10.5
const precioCadena  = String(12.50);            // "12.5"
const disponibleBool    = Boolean(1);            // true

console.log(precioNumero);   // 15.99
console.log(cantidadEntera);   // 5
console.log(descuentoDecimal);  // 10.5
console.log(precioCadena);   // "12.5"
console.log(disponibleBool);     // true

// Conversión implícita (coerción) — la que hay que conocer para evitar sorpresas
console.log("Precio: $" + 15.99);    // "Precio: $15.99"  ← + con string concatena
console.log("15.99" - 5);    // 10.99     ← - convierte a número
console.log("2" * "3");  // 6    ← * convierte a número
console.log(true + 1);   // 2     ← true es 1
console.log(false + 1);  // 1     ← false es 0

// Valores "falsy" — se comportan como false en condiciones
// false, 0, "", null, undefined, NaN

// Number() con valores no numéricos
console.log(Number("precio"));  // NaN (Not a Number)
console.log(Number(""));     // 0
console.log(Number(null));   // 0
console.log(Number(undefined)); // NaN

// isNaN — verificar si un valor no es número
console.log(isNaN(Number("precio")));  // true