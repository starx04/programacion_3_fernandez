const empleados = [
    {
        "id": 1,
        "nombre": "Teclado",
        "apellido": "Teclado mecánico",
        "sueldo": 40.99
    },
    {
        "id": 2,
        "nombre": "Mouse",
        "apellido": "Mouse",
        "sueldo": 19.99
    },
    {
        "id": 3,
        "nombre": "Monitor",
        "apellido": "Monitor 19 pulgadas",
        "sueldo": 500.49
    }
];

function renderEmpleados() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';

    empleados.forEach(empleado => {
        const empleadoElement = document.createElement('tr');
        empleadoElement.innerHTML = `
            <td>${empleado.id}</td>
            <td>${empleado.nombre}</td>
            <td>${empleado.apellido}</td>
            <td>$${empleado.sueldo.toFixed(2)}</td>
            <td>
                <button onclick="editarEmpleado(${empleado.id})">Editar</button>
                <button onclick="eliminarEmpleado(${empleado.id})">Eliminar</button>
            </td>
        `;
        cuerpoTabla.appendChild(empleadoElement);
    });
}

function agregarEmpleado() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const apellidoInput = document.getElementById('apellido').value.trim();
    const sueldoInput = document.getElementById('sueldo').value.trim();

    if (!nombreInput || !apellidoInput || !sueldoInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const nuevoEmpleado = {
        id: empleados.length > 0 ? Math.max(...empleados.map(p => p.id)) + 1 : 1,
        nombre: nombreInput,
        apellido: apellidoInput,
        sueldo: parseFloat(sueldoInput)
    };

    empleados.push(nuevoEmpleado);
    renderEmpleados();
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('sueldo').value = '';
}

const agregarBtn = document.getElementById('btn_agregar');
agregarBtn.addEventListener('click', agregarEmpleado);

let idEditar = null;

function editarEmpleado(id) {
    const empleado = empleados.find(p => p.id === id);
    if (empleado) {
        document.getElementById('nombre').value = empleado.nombre;
        document.getElementById('apellido').value = empleado.apellido;
        document.getElementById('sueldo').value = empleado.sueldo;
        idEditar = id;
        agregarBtn.textContent = 'Actualizar empleado';
        agregarBtn.removeEventListener('click', agregarEmpleado);
        agregarBtn.addEventListener('click', actualizarEmpleado);
    }
}

function actualizarEmpleado() {
    const nombreInput = document
        .getElementById('nombre').value.trim();

    const apellidoInput = document
        .getElementById('apellido').value.trim();

    const sueldoInput = document
        .getElementById('sueldo').value.trim();
    if (!nombreInput || !apellidoInput || !sueldoInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const empleadoIndex = empleados.findIndex(p => p.id === idEditar);
    if (empleadoIndex !== -1) {
        empleados[empleadoIndex] = {
            id: idEditar,
            nombre: nombreInput,
            apellido: apellidoInput,
            sueldo: parseFloat(sueldoInput)
        };
        renderEmpleados();
        limpiarFormulario();
        agregarBtn.textContent = 'Agregar empleado';
        agregarBtn.removeEventListener('click', actualizarEmpleado);
        agregarBtn.addEventListener('click', agregarEmpleado);
        idEditar = null;
    }
}
function cancelarEdicion() {
    limpiarFormulario();
    agregarBtn.textContent = 'Agregar empleado';
    agregarBtn.removeEventListener('click', actualizarEmpleado);
    agregarBtn.addEventListener('click', agregarEmpleado);
    idEditar = null;
}
const cancelarBtn = document.getElementById('btn-cancelar');
cancelarBtn.addEventListener('click', cancelarEdicion);

function eliminarEmpleado(id) {
    const index = empleados.findIndex(p => p.id === id);
    if (index !== -1) {
        if (confirm('¿Estás seguro de que quieres eliminar este empleado?')) {
            empleados.splice(index, 1);
            renderEmpleados();
        }
    }
}

function actualizarEstadisticas() {
    const totalempleados = empleados.length;
    const sueldoPromedio = totalempleados > 0 ?
        (empleados.reduce((sum, e) => sum + e.sueldo, 0) / totalempleados).toFixed(2) : 0;
    document.getElementById('sueldoPromedio')
        .textContent = sueldoPromedio;
}
window.onload = function () {
    renderEmpleados();
    actualizarEstadisticas();
};