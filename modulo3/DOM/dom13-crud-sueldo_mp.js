const meseros = [
    { "id": 1, "nombre": "Carlos", "apellido": "Ramirez", "sueldo": 420.00 },
    { "id": 2, "nombre": "Ana", "apellido": "Torres", "sueldo": 410.50 },
    { "id": 3, "nombre": "Luis", "apellido": "Vera", "sueldo": 430.75 }
];

function renderMeseros() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';

    meseros.forEach(mesero => {
        const meseroElement = document.createElement('tr');
        meseroElement.innerHTML = `
            <td>${mesero.id}</td>
            <td>${mesero.nombre}</td>
            <td>${mesero.apellido}</td>
            <td>$${mesero.sueldo.toFixed(2)}</td>
            <td>
                <button onclick="editarMesero(${mesero.id})">Editar</button>
                <button onclick="eliminarMesero(${mesero.id})">Eliminar</button>
            </td>
        `;
        cuerpoTabla.appendChild(meseroElement);
    });
}

function agregarMesero() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const apellidoInput = document.getElementById('apellido').value.trim();
    const sueldoInput = document.getElementById('sueldo').value.trim();

    if (!nombreInput || !apellidoInput || !sueldoInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const nuevoMesero = {
        id: meseros.length > 0 ? Math.max(...meseros.map(m => m.id)) + 1 : 1,
        nombre: nombreInput,
        apellido: apellidoInput,
        sueldo: parseFloat(sueldoInput)
    };

    meseros.push(nuevoMesero);
    renderMeseros();
    actualizarEstadisticas();
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('sueldo').value = '';
}

const agregarBtn = document.getElementById('btn_agregar');
agregarBtn.addEventListener('click', agregarMesero);

let idEditar = null;

function editarMesero(id) {
    const mesero = meseros.find(m => m.id === id);
    if (mesero) {
        document.getElementById('nombre').value = mesero.nombre;
        document.getElementById('apellido').value = mesero.apellido;
        document.getElementById('sueldo').value = mesero.sueldo;
        idEditar = id;
        agregarBtn.textContent = 'Actualizar mesero';
        agregarBtn.removeEventListener('click', agregarMesero);
        agregarBtn.addEventListener('click', actualizarMesero);
    }
}

function actualizarMesero() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const apellidoInput = document.getElementById('apellido').value.trim();
    const sueldoInput = document.getElementById('sueldo').value.trim();

    if (!nombreInput || !apellidoInput || !sueldoInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const meseroIndex = meseros.findIndex(m => m.id === idEditar);
    if (meseroIndex !== -1) {
        meseros[meseroIndex] = {
            id: idEditar,
            nombre: nombreInput,
            apellido: apellidoInput,
            sueldo: parseFloat(sueldoInput)
        };
        renderMeseros();
        actualizarEstadisticas();
        limpiarFormulario();
        agregarBtn.textContent = 'Agregar mesero';
        agregarBtn.removeEventListener('click', actualizarMesero);
        agregarBtn.addEventListener('click', agregarMesero);
        idEditar = null;
    }
}

function cancelarEdicion() {
    limpiarFormulario();
    agregarBtn.textContent = 'Agregar mesero';
    agregarBtn.removeEventListener('click', actualizarMesero);
    agregarBtn.addEventListener('click', agregarMesero);
    idEditar = null;
}
const cancelarBtn = document.getElementById('btn_cancelar');
cancelarBtn.addEventListener('click', cancelarEdicion);

function eliminarMesero(id) {
    const index = meseros.findIndex(m => m.id === id);
    if (index !== -1) {
        if (confirm('¿Estas seguro de que queres eliminar este mesero?')) {
            meseros.splice(index, 1);
            renderMeseros();
            actualizarEstadisticas();
        }
    }
}

function actualizarEstadisticas() {
    const totalMeseros = meseros.length;
    const sueldoPromedio = totalMeseros > 0 ?
        (meseros.reduce((sum, m) => sum + m.sueldo, 0) / totalMeseros).toFixed(2) : 0;
    document.getElementById('sueldoPromedio').textContent = sueldoPromedio;
}

window.onload = function () {
    renderMeseros();
    actualizarEstadisticas();
};
