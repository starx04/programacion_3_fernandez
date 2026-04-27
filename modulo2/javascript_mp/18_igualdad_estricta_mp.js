// === Igualdad estricta en menú (recomendada SIEMPRE)
// Compara valor Y tipo — no hace conversión implícita
console.log(15.99 === 15.99);        // true  — mismo precio
console.log(15.99 === "15.99");      // false — precio vs string
console.log(0 === false);    // false — cero vs falso
console.log(null === undefined); // false — nulo vs indefinido

// == Igualdad débil en menú (con coerción de tipos — EVITAR)
// Convierte ambos valores al mismo tipo antes de comparar
console.log(15.99 == "15.99");       // true  ← peligroso: convierte string a número
console.log(0 == false);     // true  ← peligroso: false se convierte a 0
console.log(null == undefined); // true ← excepción especial del lenguaje
console.log("" == false);    // true  ← ambos se convierten a 0

// !== Desigualdad estricta en menú (recomendada)
console.log(15.99 !== "15.99");      // true  — precio diferente de string
console.log(15.99 !== 15.99);        // false — mismo precio

// != Desigualdad débil en menú (EVITAR por las mismas razones que ==)