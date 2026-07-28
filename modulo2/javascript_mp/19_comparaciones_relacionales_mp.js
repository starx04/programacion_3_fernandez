const precioPasta = 12.99;
const precioPollo = 15.50;

console.log(precioPasta > precioPollo);    // false — pasta más cara que pollo
console.log(precioPasta < precioPollo);    // true  — pasta más barata que pollo
console.log(precioPasta >= 12.99);  // true  — precio mayor o igual
console.log(precioPasta <= 10);   // false — precio menor o igual a 10

// Con strings — se compara por orden Unicode (lexicográfico)
console.log("pasta" < "pollo");      // true
console.log("Pollo" < "pasta");      // true  ← mayúsculas tienen código menor
console.log("15.99" > "12.99");     // false ← compara como string
console.log(15.99 > 12.99);         // true  ← correcto: comparando como números

// Comparación mixta (número vs string) — JS convierte a número
console.log("15.99" > 12.99);    // true  ← "15.99" se convierte a número