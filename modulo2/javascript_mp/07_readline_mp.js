const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("¿Qué plato deseas ordenar? ", (plato) => {
  console.log(`¡Excelente elección! Has ordenado: ${plato}`);
  rl.close();
});