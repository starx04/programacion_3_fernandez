const campoPlato1 = document.getElementById('campo_plato1');
const campoPlato2 = document.getElementById('campo_plato2');
const btnCalcularTotal = document.getElementById('btn_calcular_total');
const resultado = document.getElementById('resultado');

btnCalcularTotal.addEventListener('click', () => {
    const precioPlato1 = parseFloat(campoPlato1.value);
    const precioPlato2 = parseFloat(campoPlato2.value);
    const total = precioPlato1 + precioPlato2;
    resultado.textContent = `Total de la cuenta: $${total.toFixed(2)}`;
});
