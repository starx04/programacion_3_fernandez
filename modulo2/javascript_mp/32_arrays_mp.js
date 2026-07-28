// Crear un array de platos — corchetes []
const platos   = ["pasta", "pollo", "ensalada"];
const precios  = [12.99, 15.50, 8.75, 6.50, 22.00];
const disponible = [true, false, true, true];          // válido pero poco recomendable
const pedidoVacio = [];

// Acceso por índice — empieza en 0
console.log(platos[0]);   // "pasta"
console.log(platos[2]);   // "ensalada"
console.log(platos[9]);   // undefined — no lanza error

// Índice negativo — NO funciona en JS (devuelve undefined)
console.log(platos[-1]);  // undefined ← en Python sí funciona, en JS no

// at() — acceso con índice negativo (ES2022)
console.log(platos.at(-1));   // "ensalada"  ← el último elemento
console.log(platos.at(-2));   // "pollo"

// Longitud
console.log(platos.length);   // 3

// Modificar un elemento
platos[1] = "pescado";
console.log(platos);   // ["pasta", "pescado", "ensalada"]

const pedido = [1, 2, 3];

// push — añade al final, devuelve la nueva longitud
pedido.push(4);
pedido.push(5, 6);           // se pueden añadir varios a la vez
console.log(pedido);          // [1, 2, 3, 4, 5, 6]

// pop — elimina el último, devuelve el elemento eliminado
const ultimoItem = pedido.pop();
console.log(ultimoItem);       // 6
console.log(pedido);          // [1, 2, 3, 4, 5]

// unshift — añade al inicio (más lento que push)
pedido.unshift(0);
console.log(pedido);          // [0, 1, 2, 3, 4, 5]

// shift — elimina el primero, devuelve el elemento eliminado
const primerItem = pedido.shift();
console.log(primerItem);      // 0
console.log(pedido);          // [1, 2, 3, 4, 5]

// splice — elimina, reemplaza o inserta en cualquier posición
// splice(inicio, cuántos_eliminar, ...elementos_a_insertar)
const menuSemanal = ["lunes", "martes", "jueves", "viernes"];
menuSemanal.splice(2, 0, "miercoles");          // inserta "miercoles" en posición 2, elimina 0
console.log(menuSemanal);                  // ["lunes", "martes", "miercoles", "jueves", "viernes"]

const eliminados = menuSemanal.splice(1, 2);  // elimina 2 desde posición 1
console.log(eliminados);             // ["martes", "miercoles"]
console.log(menuSemanal);                  // ["lunes", "jueves", "viernes"]

const preciosMenu = [12.99, 15.50, 15.50, 8.75, 22.00];

// indexOf — primera posición del valor, -1 si no existe
console.log(preciosMenu.indexOf(15.50));    // 1
console.log(preciosMenu.indexOf(99.99));    // -1

// lastIndexOf — última posición del valor
console.log(preciosMenu.lastIndexOf(15.50));  // 2

// includes — ¿existe el valor? devuelve boolean
console.log(preciosMenu.includes(22.00));   // true
console.log(preciosMenu.includes(99.99));   // false

// slice — extrae una porción SIN modificar el original
// slice(inicio, fin_exclusivo)
const categorias = ["entradas", "principales", "postres", "bebidas", "cafes"];
console.log(categorias.slice(1, 3));    // ["principales", "postres"]
console.log(categorias.slice(2));       // ["postres", "bebidas", "cafes"]
console.log(categorias.slice(-2));      // ["bebidas", "cafes"]
console.log(categorias);                // ["entradas", "principales", "postres", "bebidas", "cafes"] — sin cambios

// concat — une arrays, devuelve uno nuevo
const vegetarianos = ["pasta", "ensalada"];
const carnivoros = ["pollo", "pescado"];
console.log(vegetarianos.concat(carnivoros));           // ["pasta", "ensalada", "pollo", "pescado"]
console.log([...vegetarianos, ...carnivoros]);          // igual con spread — forma moderna preferida

// join — une elementos en un string
const ingredientes = ["tomate", "queso", "albahaca"];
console.log(ingredientes.join(", "));    // "tomate, queso, albahaca"
console.log(ingredientes.join(" + "));   // "tomate + queso + albahaca"
console.log(ingredientes.join(""));     // "tomatequesoalbahaca"

// reverse — invierte el array EN SU LUGAR (muta el original)
const ordenItems = [1, 2, 3, 4, 5];
ordenItems.reverse();
console.log(ordenItems);                  // [5, 4, 3, 2, 1]

// sort — ordena EN SU LUGAR (muta el original)
const preciosDesordenados = [22.00, 8.75, 15.50, 6.50];
preciosDesordenados.sort((a, b) => a - b);  // orden ascendente numérico
console.log(preciosDesordenados);           // [6.50, 8.75, 15.50, 22.00]

// ⚠️ sort sin función de comparación convierte a string — bug clásico
const preciosBug = [22.00, 8.75, 15.50, 6.50];
preciosBug.sort();
console.log(preciosBug);   // [15.50, 22.00, 6.50, 8.75] ← orden lexicográfico, NO numérico

const platosMenu = ["pasta", "pollo", "ensalada"];

// forEach no devuelve nada (undefined)
platosMenu.forEach((plato, indice) => {
  console.log(`${indice}: ${plato}`);
});
// 0: pasta
// 1: pollo
// 2: ensalada

// Equivalente con for...of (más legible en casos simples)
for (const plato of platosMenu) {
  console.log(plato);
}

const cantidades = [1, 2, 3, 4, 5];

// Calcular precios totales
const preciosTotales = cantidades.map(cantidad => cantidad * 12.99);
console.log(preciosTotales);    // [12.99, 25.98, 38.97, 51.96, 64.95]
console.log(cantidades);   // [1, 2, 3, 4, 5] — original intacto

// Extraer nombres de platos de cada pedido
const pedidos = [
  { plato: "Pasta", precio: 12.99 },
  { plato: "Pollo", precio: 15.50 },
  { plato: "Ensalada", precio: 8.75 }
];

const nombresPlatos = pedidos.map(p => p.plato);
console.log(nombresPlatos);   // ["Pasta", "Pollo", "Ensalada"]

// Transformar la estructura de cada pedido
const resumenPedidos = pedidos.map(p => ({
  nombre: p.plato,
  precioConIVA: p.precio * 1.21
}));
console.log(resumenPedidos);
// [
//   { nombre: 'Pasta', precioConIVA: 15.6979 },
//   { nombre: 'Pollo', precioConIVA: 18.755 },
//   { nombre: 'Ensalada', precioConIVA: 10.5875 }
// ]

const preciosVariados = [12.99, 15.50, 8.75, 22.00, 6.50, 18.25];

// Solo los precios bajos (menores a 15)
const preciosBajos = preciosVariados.filter(precio => precio < 15);
console.log(preciosBajos);   // [12.99, 8.75, 6.50]

// Solo los precios altos (mayores a 20)
const preciosAltos = preciosVariados.filter(precio => precio > 20);
console.log(preciosAltos); // [22.00]

// Filtrar pedidos por disponibilidad y precio
const menuCompleto = [
  { plato: "Pasta", precio: 12.99, disponible: true  },
  { plato: "Pollo", precio: 15.50, disponible: false },
  { plato: "Ensalada", precio: 8.75, disponible: true  },
  { plato: "Pizza", precio: 18.50, disponible: true  }
];

const platosDisponiblesBaratos = menuCompleto.filter(item => item.disponible && item.precio < 15);
console.log(platosDisponiblesBaratos.map(item => item.plato));   // ["Pasta", "Ensalada"]

// reduce(callback, valorInicial)
// callback recibe: (acumulador, elementoActual, indice, array)

const preciosCuenta = [12.99, 8.75, 15.50, 3.50];

// Suma total de la cuenta
const totalCuenta = preciosCuenta.reduce((acum, precio) => acum + precio, 0);
console.log(totalCuenta);   // 40.74

// Calcular precio promedio
const precioPromedio = preciosCuenta.reduce((acum, precio) => acum + precio, 0) / preciosCuenta.length;
console.log(precioPromedio);   // 10.185

// Máximo precio sin Math.max
const precioMaximo = preciosCuenta.reduce((max, precio) => precio > max ? precio : max, -Infinity);
console.log(precioMaximo);   // 15.50

// Contar tipos de plato — acumulador es un objeto
const platosOrdenados = ["pasta", "pollo", "pasta", "ensalada", "pollo", "pasta"];
const conteoPlatos = platosOrdenados.reduce((acum, plato) => {
  acum[plato] = (acum[plato] ?? 0) + 1;
  return acum;
}, {});
console.log(conteoPlatos);
// { pasta: 3, pollo: 2, ensalada: 1 }

// Aplanar pedidos de diferentes mesas
const pedidosMesas = [["pasta", "pollo"], ["ensalada", "pizza"], ["postre", "cafe"]];
const todosLosPedidos = pedidosMesas.reduce((acum, mesa) => [...acum, ...mesa], []);
console.log(todosLosPedidos);   // ["pasta", "pollo", "ensalada", "pizza", "postre", "cafe"]
// alternativa moderna: pedidosMesas.flat()

//
//EJERCICIOS EN CLASE PARA MENÚ
//

/*Ejercicio 1 — map y filter para menú
Dado este array de precios en euros:
Usa map para convertir todas a dólares. Tipo de cambio: 1€ = 1.1$
Usa filter para quedarte solo con los precios entre 10 y 25 euros
Encadena filter + map: filtra las que estén entre 10 y 25 euros y conviértelas a dólares*/

const preciosEuros = [8.50, 12.99, 6.75, 18.25, 32.00, 45.50, 4.25, 22.75];
const preciosDolares = preciosEuros.map(euro => euro * 1.1);
console.log(preciosDolares);

const entre10y25Euros = preciosEuros.filter(euro => euro >= 10 && euro <= 25);
console.log(entre10y25Euros);

const entre10y25Dolares = preciosEuros.filter(euro => euro >= 10 && euro <= 25).map(euro => euro * 1.1);