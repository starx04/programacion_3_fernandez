// dom16-calificaciones-platos_mp.js
// Arreglo de objetos: platos con nombre y calificacion de clientes (0-10)
// Calculos: promedio, calificacion maxima, minima, conteo de recomendados/no recomendados

const platosCalificados = [];
const CALIFICACION_MINIMA_RECOMENDADO = 6;

function agregarCalificacion() {
    const nombre = document.getElementById('inNombre').value.trim();
    const calificacion = parseFloat(document.getElementById('inNota').value);

    const divError = document.getElementById('error');
    divError.style.display = 'none';

    if (nombre === '') {
        divError.textContent = 'Por favor ingresa el nombre del plato.';
        divError.style.display = 'block';
        return;
    }

    if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
        divError.textContent = 'La calificacion debe ser un numero entre 0 y 10.';
        divError.style.display = 'block';
        return;
    }

    platosCalificados.push({ nombre, calificacion });

    document.getElementById('inNombre').value = '';
    document.getElementById('inNota').value = '';
    document.getElementById('inNombre').focus();

    renderizarTabla();

    document.getElementById('estadisticas').style.display = 'none';
}

function renderizarTabla() {
    const tbody = document.getElementById('tablaBody');
    tbody.innerHTML = '';

    platosCalificados.forEach((plato, index) => {
        const recomendado = plato.calificacion >= CALIFICACION_MINIMA_RECOMENDADO;
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${plato.nombre}</td>
            <td>${plato.calificacion.toFixed(2)}</td>
            <td class="${recomendado ? 'estado-recomendado' : 'estado-no-recomendado'}">
                ${recomendado ? 'Recomendado' : 'No recomendado'}
            </td>
            <td>
                <button class="btn-eliminar" onclick="eliminarCalificacion(${index})" title="Eliminar">X</button>
            </td>
        `;
        tbody.appendChild(fila);
    });

    document.getElementById('listaPlatos').style.display =
        platosCalificados.length > 0 ? 'block' : 'none';
}

function eliminarCalificacion(index) {
    platosCalificados.splice(index, 1);
    renderizarTabla();
    document.getElementById('estadisticas').style.display = 'none';
}

function calcularEstadisticas() {
    const divError = document.getElementById('error');
    divError.style.display = 'none';

    if (platosCalificados.length === 0) {
        divError.textContent = 'Agrega al menos un plato calificado antes de calcular.';
        divError.style.display = 'block';
        return;
    }

    const calificaciones = platosCalificados.map(p => p.calificacion);
    const promedio = calificaciones.reduce((acc, n) => acc + n, 0) / calificaciones.length;
    const mayor = Math.max(...calificaciones);
    const menor = Math.min(...calificaciones);
    const recomendados = platosCalificados.filter(p => p.calificacion >= CALIFICACION_MINIMA_RECOMENDADO).length;

    document.getElementById('sPromedio').textContent = promedio.toFixed(2);
    document.getElementById('sMayor').textContent = mayor.toFixed(2);
    document.getElementById('sMenor').textContent = menor.toFixed(2);
    document.getElementById('sRecomendados').textContent = `${recomendados} / ${platosCalificados.length}`;

    document.getElementById('estadisticas').style.display = 'block';
}

function limpiar() {
    platosCalificados.length = 0;
    renderizarTabla();
    document.getElementById('estadisticas').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    document.getElementById('inNombre').value = '';
    document.getElementById('inNota').value = '';
    document.getElementById('inNombre').focus();
}

window.onload = () => {
    ['inNombre', 'inNota'].forEach(id => {
        document.getElementById(id).addEventListener('keydown', e => {
            if (e.key === 'Enter') agregarCalificacion();
        });
    });
    document.getElementById('btnAgregar').addEventListener('click', agregarCalificacion);
    document.getElementById('btnCalcular').addEventListener('click', calcularEstadisticas);
    document.getElementById('btnLimpiar').addEventListener('click', limpiar);
};
