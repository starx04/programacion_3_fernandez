// tipos-string.ts
const nombre:    string = "Menú Especial";
const saludo:    string = `Bienvenido al ${nombre}`;
const vacia:     string = "";
const comillas:  string = 'También con comillas simples';

console.log(nombre);
console.log(saludo);
console.log(`La cadena vacía tiene longitud: ${vacia.length}`);

// Métodos de string funcionan igual que en JS
console.log(nombre.toUpperCase());      // MENÚ ESPECIAL
console.log(nombre.toLowerCase());      // menú especial
console.log(nombre.includes("Especial")); // true