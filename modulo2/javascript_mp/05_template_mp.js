const plato   = "Pasta";
const tipo = "Carbonara";
const precio     = 15.99;

// Variable simple
console.log(`Plato: ${plato}`);

// Expresión dentro de ${ }
console.log(`Nombre completo: ${plato.toUpperCase()} ${tipo.toUpperCase()}`);
console.log(`Precio con IVA: $${(precio * 1.21).toFixed(2)}`);
console.log(`¿Es caro? ${precio >= 20 ? "Sí" : "No"}`);

// String multilínea — sin caracteres especiales extra
const menuItem = `
  Plato:  ${plato} ${tipo}
  Precio: $${precio}
  Disponible:  ${precio > 0 ? "Sí" : "No"}
`;