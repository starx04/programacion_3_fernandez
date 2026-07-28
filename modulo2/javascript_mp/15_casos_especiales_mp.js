// División por cero en cálculos de menú
console.log(100 / 0);    // Infinity  — descuento infinito
console.log(-50 / 0);   // -Infinity
console.log(0 / 0);     // NaN       — precio indeterminado

// Operaciones con NaN en precios
console.log(NaN + 15.99);   // NaN  — cualquier operación con precio inválido produce NaN
console.log(NaN === NaN); // false  — precio inválido no es igual a nada

// Precisión decimal en precios — punto crítico en JavaScript
console.log(15.99 + 8.50);  // 24.49 normalmente, pero podría tener precisión issues
// Solución para comparar precios:
console.log(Math.abs((15.99 + 8.50) - 24.49) < Number.EPSILON);  // true

// Redondeo con toFixed (devuelve string)
const precioFinal = (15.99 + 8.50).toFixed(2);
console.log(precioFinal);         // "24.49"
console.log(typeof precioFinal);  // "string" — recuerda convertir si necesitas número