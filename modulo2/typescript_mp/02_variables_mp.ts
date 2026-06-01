// VARIABLES EN TYPESCRIPT para menú
// TIPOS 
// Con tipo explícito
const nombrePlato: string  = "Pasta Carbonara";
const precioPlato:   number  = 15.99;
const disponiblePlato: boolean = true;

// Sin tipo — TypeScript lo infiere automáticamente del valor
const nombre2 = "Pollo";   // TypeScript sabe que es string
const precio2   = 12.50;      // TypeScript sabe que es number
const disponible2 = false;    // TypeScript sabe que es boolean

//
// TIPO NUMÉRICOS
//
const entero:     number = 42;
const decimal:    number = 3.14;
const negativo:   number = -100;
const grande:     number = 1_000_000;  // el _ es solo visual, no cambia el valor
const resultado:  number = 10 / 3;

console.log(entero);
console.log(decimal);
console.log(grande);
console.log(resultado);                   // 3.3333...
console.log(resultado.toFixed(2));        // "3.33"

// Operaciones
console.log(10 + 3);   // 13
console.log(10 - 3);   // 7
console.log(10 * 3);   // 30
console.log(10 / 3);   // 3.333...
console.log(10 % 3);   // 1  (resto de la división)
console.log(2 ** 10);  // 1024  (potencia)

//
// TIPO BOOLEANOS
//
const mayorDeEdad:  boolean = true;
const tieneReserva:  boolean = false;

console.log(mayorDeEdad);
console.log(!mayorDeEdad);              // false  (negación)
console.log(mayorDeEdad && tieneReserva); // false  (ambos deben ser true)
console.log(mayorDeEdad || tieneReserva); // true   (al menos uno es true)

// Los booleanos suelen venir de comparaciones
const edad = 20;
const esAdulto: boolean = edad >= 18;
console.log(`¿Es adulto? ${esAdulto}`); // ¿Es adulto? true 

//
// any — el tipo que desactiva TypeScript
//

let dato: any = "hola";
dato = 42;        // ✅ sin error
dato = true;      // ✅ sin error
dato = [1, 2, 3]; // ✅ sin error

// Parece útil pero es trampa: pierdes el autocompletado
// y los errores vuelven a aparecer en tiempo de ejecución
console.log((dato as any).metodoQueNoExiste()); // TypeScript no avisa, pero falla al ejecutar

//
// unknown — la alternativa segura a any
//

function procesarDato(valor: unknown): string {
  // No puedo usar valor directamente — debo verificar primero

  if (typeof valor === "string") {
    // Aquí TypeScript sabe que es string
    return valor.toUpperCase();
  }

  if (typeof valor === "number") {
    // Aquí TypeScript sabe que es number
    return valor.toFixed(2);
  }

  if (typeof valor === "boolean") {
    return valor ? "Sí" : "No";
  }

  return "Tipo no reconocido";
}

console.log(procesarDato("hola"));   // HOLA
console.log(procesarDato(3.14159));  // 3.14
console.log(procesarDato(true));     // Sí
console.log(procesarDato(null));     // Tipo no reconocido

//
// void — funciones que no devuelven nada
//

function saludar(nombre: string): void {
  console.log(`Hola, ${nombre}!`);
  // No hay return — esta función solo hace algo, no devuelve nada
}

saludar("Cliente");

// Comparación: esto sí devuelve algo
function duplicar(n: number): number {
  return n * 2;
}

const resultadoDoble = duplicar(5);
console.log(resultadoDoble);