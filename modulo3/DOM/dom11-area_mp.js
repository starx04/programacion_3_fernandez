const campoCuenta = document.getElementById('campo_cuenta');
const campoPorcentaje = document.getElementById('campo_porcentaje');
const btnPropina = document.getElementById('btn_propina');
const resultado1 = document.getElementById('resultado1');

btnPropina.addEventListener('click', () => {
    const cuenta = parseFloat(campoCuenta.value);
    const porcentaje = parseFloat(campoPorcentaje.value);
    const propina = (cuenta * porcentaje) / 100;
    resultado1.textContent = `Propina sugerida: $${propina.toFixed(2)}`;
});
