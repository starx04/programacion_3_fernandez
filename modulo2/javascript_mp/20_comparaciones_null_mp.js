// Con igualdad estricta en menú: solo son iguales entre sí
console.log(null === null);        // true - plato no disponible
console.log(undefined === undefined); // true - precio no definido
console.log(null === undefined);   // false - disponible diferente de no definido

// Con igualdad débil en menú: null y undefined son "iguales" entre sí (solo entre ellos)
console.log(null == undefined);    // true - ambos significan "no hay"
console.log(null == 0);            // false ← ¡no se convierte a 0 con ==!
console.log(null == false);        // false - no disponible no es falso

// Con operadores relacionales en menú: null se convierte a 0
console.log(null > 0);    // false - no disponible no es mayor que cero
console.log(null == 0);   // false ← inconsistencia famosa de JS
console.log(null >= 0);   // true  ← porque null se convierte a 0

// undefined se convierte a NaN en comparaciones relacionales → siempre false
console.log(undefined > 0);   // false - precio indefinido no es mayor que cero
console.log(undefined < 0);   // false - precio indefinido no es menor que cero