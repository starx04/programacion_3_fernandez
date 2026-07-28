    // Crear un objeto — llaves {}
const plato = {
  nombre: "Pasta",        // clave: "nombre", valor: "Pasta"
  precio: 15.99,             // clave: "precio",   valor: 15.99
  disponible: true          // clave: "disponible", valor: true
};

// Acceso a propiedades — notación de punto (preferida)
console.log(plato.nombre);   // "Pasta"
console.log(plato.precio);     // 15.99

// Acceso con corchetes — necesario cuando la clave es dinámica o tiene espacios
console.log(plato["nombre"]);         // "Pasta"
const clave = "precio";
console.log(plato[clave]);            // 15.99

// Propiedad que no existe → undefined (no lanza error)
console.log(plato.ingredientes);          // undefined

// Añadir propiedades después de crear el objeto
plato.categoria = "Principal";
console.log(plato.categoria);            // "Principal"

// Eliminar propiedades
delete plato.disponible;
console.log(plato.disponible);            // undefined

////////////////////////////////////////////////////

const calculadoraMenu = {
  // Forma clásica
  calcularSubtotal: function(cantidad, precio) {
    return cantidad * precio;
  },

  // Shorthand de método (ES6) — forma preferida
  aplicarDescuento(subtotal, descuento) {
    return subtotal * (1 - descuento);
  },

  // Arrow function — ojo con this (lo veremos más adelante)
  calcularIVA: (subtotal) => subtotal * 0.21
};

console.log(calculadoraMenu.calcularSubtotal(3, 15.99));        // 47.97
console.log(calculadoraMenu.aplicarDescuento(47.97, 0.1));      // 43.173
console.log(calculadoraMenu.calcularIVA(43.173));  // 9.06633

//////////////////////////////////////////////////////////////

const platoMenu = {
  nombre: "Pasta Carbonara",
  precio: 15.99,

  // ✅ function o shorthand — this apunta al objeto
  descripcion() {
    return `Deliciosa ${this.nombre} por $${this.precio}.`;
  },

  aplicarOferta() {
    this.precio *= 0.9;   // modifica la propiedad del objeto
    return `¡Oferta! Ahora cuesta $${this.precio.toFixed(2)}.`;
  },

  // ❌ Arrow function — this NO apunta al objeto, apunta al scope externo
  descripcionArrow: () => {
    return `Plato: ${this.nombre}`;   // this.nombre es undefined
  }
};

console.log(platoMenu.descripcion());      // "Deliciosa Pasta Carbonara por $15.99."
console.log(platoMenu.aplicarOferta());   // "¡Oferta! Ahora cuesta $14.39."
console.log(platoMenu.descripcionArrow()); // "Plato: undefined"

////////////////////////////////////////////////////////////
//
//Shorthand properties — sintaxis abreviada
//
const nombrePlato = "Pasta";
const precioPlato   = 15.99;
const categoriaPlato = "Italiana";

// Sin shorthand — repetitivo
const plato1 = {
  nombre: nombrePlato,
  precio: precioPlato,
  categoria: categoriaPlato
};

// Con shorthand (ES6) — forma preferida
const plato2 = { nombrePlato, precioPlato, categoriaPlato };

console.log(plato2);