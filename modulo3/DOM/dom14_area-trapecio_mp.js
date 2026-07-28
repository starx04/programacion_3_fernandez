// dom14-costo-mesa_mp.js
// Calculo del costo total por mesa: promedio de dos platos * cantidad de comensales

const precioPlato1 = document.getElementById('precioPlato1');
const precioPlato2 = document.getElementById('precioPlato2');
const comensales = document.getElementById('comensales');
const btnCalcular = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');
const error = document.getElementById('error');

btnCalcular.addEventListener('click', () => {
    const precio1Numerico = parseFloat(precioPlato1.value);
    const precio2Numerico = parseFloat(precioPlato2.value);
    const comensalesNumerico = parseFloat(comensales.value);

    if (isNaN(precio1Numerico)
        || isNaN(precio2Numerico)
        || isNaN(comensalesNumerico)
    ) {
        error.textContent = 'Por favor, ingresa valores numericos validos.';
        return;
    }
    if (precio1Numerico <= 0
        || precio2Numerico <= 0
        || comensalesNumerico <= 0)
    {
        error.textContent = 'Por favor, ingresa valores mayores a cero.';
        return;
    }

    error.textContent = '';
    const costoTotal = ((precio1Numerico + precio2Numerico) / 2) * comensalesNumerico;
    resultado.textContent = `Costo total de la mesa: $${costoTotal.toFixed(2)}`;
});
