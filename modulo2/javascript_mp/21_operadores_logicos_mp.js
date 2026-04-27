// Valores FALSY en menú — los únicos 6 que existen en JavaScript
false        // plato no disponible
0            // cero pedidos
""           // nombre vacío
null         // plato sin precio
undefined    // precio no definido
NaN          // precio inválido

// Todo lo demás es TRUTHY — incluyendo estos casos que sorprenden:
"false"      // truthy — string no vacío (aunque diga "false")
"0"          // truthy — string no vacío
[]           // truthy — array vacío de pedidos
{}           // truthy — objeto vacío de menú
-1           // truthy — descuento negativo

// Verificar con Boolean() en menú
console.log(Boolean(0));        // false - cero platos
console.log(Boolean(""));       // false - nombre vacío
console.log(Boolean("agotado"));  // true  ← string no vacío
console.log(Boolean([]));       // true  ← array vacío es truthy

// Uso booleano clásico en validaciones de menú
console.log(true && true);    // true - disponible y en stock
console.log(true && false);   // false - disponible pero sin stock
console.log(false && true);   // false - no disponible
console.log(false && false);  // false - no disponible y sin stock

// Cortocircuito — devuelve el primer valor falsy o el último si todos son truthy
console.log(15.99 && 2);          // 2     ← ambos truthy, devuelve cantidad
console.log(0 && 2);          // 0     ← precio 0 es falsy, devuelve 0
console.log("" && "pasta");    // ""    ← nombre vacío es falsy
console.log("pasta" && "disponible");      // "disponible"   ← ambos truthy

// Uso práctico: ejecutar algo solo si el plato está disponible
const plato = { nombre: "Pasta", disponible: true, precio: 12.99 };

plato.disponible && console.log("Plato disponible para ordenar");
// equivale a: if (plato.disponible) { console.log(...) }

// Acceso seguro a propiedades anidadas del menú
const precioEspecial = plato.oferta && plato.oferta.precio;
// Si plato.oferta no existe (falsy), precioEspecial = undefined (no lanza error)

// Uso booleano clásico
console.log(true || false);   // true - disponible o en promoción
console.log(false || true);   // true - no disponible pero en promoción
console.log(false || false);  // false - no disponible ni en promoción

// Cortocircuito — devuelve el primer valor truthy
console.log(12.99 || 15.99);          // 12.99     ← precio normal es truthy
console.log(0 || 15.99);          // 15.99     ← precio 0 es falsy, devuelve alternativo
console.log(0 || "");         // ""    ← ambos falsy, devuelve el último
console.log("" || "Precio no disponible"); // "Precio no disponible" ← "" es falsy

// Uso práctico: precio por defecto (patrón clásico pre-ES2020)
const precioMenu = plato.precio || 9.99;
// Si plato.precio es 0 o undefined, precioMenu = 9.99

function mostrarPrecio(nombre, precio) {
  const p = precio || "Consultar";
  console.log(`${nombre}: $${p}`);
}

mostrarPrecio("Pasta", 12.99);    // Pasta: $12.99
mostrarPrecio("Pollo", 0);       // Pollo: $Consultar  (0 es falsy)