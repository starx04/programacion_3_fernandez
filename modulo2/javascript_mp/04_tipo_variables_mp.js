// Números — un solo tipo para enteros y decimales
const precioBase = 12;
const descuento = 0.15;
const cantidadPlatos = 5_000;     // _ como separador visual (ES2021)
const precioNegativo = -5;

// String — texto entre comillas simples, dobles o backticks
const plato   = 'pasta';
const descripcion    = "carbonara";
const menuCompleto = `Menú: ${plato} ${descripcion}`;        // template literal — permite expresiones

// Boolean
const disponible = true;
const agotado     = false;

// null y undefined — dos formas de "sin valor"
const platoEspecial   = null;          // ausencia intencional de valor
let pedidoPendiente;                   // undefined — declarada pero sin valor

// Symbol — identificador único (avanzado)
const idMenu = Symbol("menu");

// BigInt — enteros de precisión arbitraria
const ventasAnuales = 9999999999999999999n;      // sufijo n

// typeof — conocer el tipo en tiempo de ejecución
console.log(typeof 12);           // "number"
console.log(typeof "pasta");       // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" ← bug histórico de JS, null no es un objeto
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"