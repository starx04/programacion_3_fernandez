// dom15-liquidacion-mesero_mp.js
// Liquidacion de turno de mesero: pago base + propinas repartidas - descuentos

function fmt(valor) {
    return '$ ' + valor.toFixed(2);
}

function calcularLiquidacion() {
    const pagoBase = parseFloat(document.getElementById('inPagoBase').value);
    const propinas = parseFloat(document.getElementById('inPropinas').value);
    const porcentajeComision = parseFloat(document.getElementById('inComision').value);
    const descuentoUniforme = parseFloat(document.getElementById('inDescuento').value);

    const divError = document.getElementById('error');
    const divResultado = document.getElementById('resultado');

    divError.style.display = 'none';
    divResultado.style.display = 'none';

    if (isNaN(pagoBase) || pagoBase <= 0) {
        divError.textContent = 'Ingresa un pago base valido (mayor que cero).';
        divError.style.display = 'block';
        return;
    }

    if (isNaN(porcentajeComision) || porcentajeComision < 0 || porcentajeComision > 100) {
        divError.textContent = 'El porcentaje de comision debe estar entre 0 y 100.';
        divError.style.display = 'block';
        return;
    }

    const propinasVal = isNaN(propinas) ? 0 : Math.max(0, propinas);
    const descuentoVal = isNaN(descuentoUniforme) ? 0 : Math.max(0, descuentoUniforme);

    const comisionPropinas = propinasVal * (porcentajeComision / 100);
    const totalIngresos = pagoBase + comisionPropinas;
    const totalDeducciones = descuentoVal;
    const liquidoAPagar = totalIngresos - totalDeducciones;

    document.getElementById('rPagoBase').textContent = fmt(pagoBase);
    document.getElementById('rComisionPropinas').textContent = fmt(comisionPropinas);
    document.getElementById('rTotalIngresos').textContent = fmt(totalIngresos);
    document.getElementById('rDescuento').textContent = '- ' + fmt(descuentoVal);

    const spanNeto = document.getElementById('rLiquidoAPagar');
    spanNeto.textContent = fmt(liquidoAPagar);
    spanNeto.style.color = liquidoAPagar >= 0 ? '#1e8449' : '#c0392b';

    divResultado.style.display = 'block';
}

function limpiar() {
    ['inPagoBase', 'inPropinas', 'inDescuento'].forEach(id => {
        document.getElementById(id).value = '';
    });
    document.getElementById('inComision').value = '10';
    document.getElementById('error').style.display = 'none';
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('inPagoBase').focus();
}

window.onload = () => {
    ['inPagoBase', 'inPropinas', 'inComision', 'inDescuento'].forEach(id => {
        document.getElementById(id).addEventListener('keydown', e => {
            if (e.key === 'Enter') calcularLiquidacion();
        });
    });
    document.getElementById('btnCalcular').addEventListener('click', calcularLiquidacion);
    document.getElementById('btnLimpiar').addEventListener('click', limpiar);
};
