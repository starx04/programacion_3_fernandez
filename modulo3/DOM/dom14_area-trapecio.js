const baseMayor = document.getElementById('baseMayor');
const baseMenor = document.getElementById('baseMenor');
const altura = document.getElementById('altura');
const btnCalcular = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');
const error = document.getElementById('error');

btnCalcular.addEventListener('click', () => {
    const baseMayorNumerico = parseFloat(baseMayor.value);
    const baseMenorNumerico = parseFloat(baseMenor.value);
    const alturaNumerico = parseFloat(altura.value);

    if (isNaN(baseMayorNumerico)
         || isNaN(baseMenorNumerico) 
         || isNaN(alturaNumerico)
    ) {
          error.textContent = 'Por favor, ingresa valores numéricos válidos.'
          return;
    }
    if (baseMayorNumerico <= 0 
        || baseMenorNumerico <= 0 
        || alturaNumerico <= 0) 
    {
        error.textContent = 'Por favor, ingresa valores mayores a cero.';
        return;
    }
    const area = ((baseMayorNumerico + baseMenorNumerico) / 2) * alturaNumerico;
    resultado.textContent = `Resultado: ${area}`;

});