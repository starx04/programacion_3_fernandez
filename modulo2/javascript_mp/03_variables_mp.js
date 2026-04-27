// const — no se puede reasignar (equivalente a val en Kotlin, final en Java)
const platoPrincipal = "Pasta Carbonara";           // tipo inferido: string
const precio = 15.99;                // tipo inferido: number
const descuento = 0.1;             // tipo inferido: number

// let — se puede reasignar
let cantidad = 1;
cantidad = cantidad + 1;        // permitido
cantidad++;                     // también permitido

// platoPrincipal = "Pizza";             // TypeError en tiempo de ejecución — const no se reasigna

console.log(`${platoPrincipal} cuesta $${precio}`);  // template literal

// var — forma antigua, evitar en código moderno
// tiene comportamiento de "hoisting" que puede causar bugs difíciles de detectar