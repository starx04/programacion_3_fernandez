const platos = [
    {
        "id": 1,
        "nombre": "Ceviche de camaron",
        "descripcion": "Camaron marinado en limon con cebolla y culantro",
        "precio": 8.50
    },
    {
        "id": 2,
        "nombre": "Lomo saltado",
        "descripcion": "Lomo de res salteado con papas fritas y arroz",
        "precio": 9.90
    },
    {
        "id": 3,
        "nombre": "Tiramisu",
        "descripcion": "Postre italiano con cafe y mascarpone",
        "precio": 4.50
    }
];

function renderPlatos() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';

    platos.forEach(plato => {
        const platoElement = document.createElement('tr');
        platoElement.innerHTML = `
            <td>${plato.id}</td>
            <td>${plato.nombre}</td>
            <td>${plato.descripcion}</td>
            <td>$${plato.precio.toFixed(2)}</td>
            <td>
                <button onclick="editarPlato(${plato.id})">Editar</button>
                <button onclick="eliminarPlato(${plato.id})">Eliminar</button>
            </td>
        `;
        cuerpoTabla.appendChild(platoElement);
    });
}

function agregarPlato() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const descripcionInput = document.getElementById('descripcion').value.trim();
    const precioInput = document.getElementById('precio').value.trim();

    if (!nombreInput || !descripcionInput || !precioInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const nuevoPlato = {
        id: platos.length > 0 ? Math.max(...platos.map(p => p.id)) + 1 : 1,
        nombre: nombreInput,
        descripcion: descripcionInput,
        precio: parseFloat(precioInput)
    };

    platos.push(nuevoPlato);
    renderPlatos();
    actualizarEstadisticas();
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('precio').value = '';
}

const agregarBtn = document.getElementById('btn_agregar');
agregarBtn.addEventListener('click', agregarPlato);

let idEditar = null;

function editarPlato(id) {
    const plato = platos.find(p => p.id === id);
    if (plato) {
        document.getElementById('nombre').value = plato.nombre;
        document.getElementById('descripcion').value = plato.descripcion;
        document.getElementById('precio').value = plato.precio;
        idEditar = id;
        agregarBtn.textContent = 'Actualizar plato';
        agregarBtn.removeEventListener('click', agregarPlato);
        agregarBtn.addEventListener('click', actualizarPlato);
    }
}

function actualizarPlato() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const descripcionInput = document.getElementById('descripcion').value.trim();
    const precioInput = document.getElementById('precio').value.trim();

    if (!nombreInput || !descripcionInput || !precioInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const platoIndex = platos.findIndex(p => p.id === idEditar);
    if (platoIndex !== -1) {
        platos[platoIndex] = {
            id: idEditar,
            nombre: nombreInput,
            descripcion: descripcionInput,
            precio: parseFloat(precioInput)
        };
        renderPlatos();
        actualizarEstadisticas();
        limpiarFormulario();
        agregarBtn.textContent = 'Agregar plato';
        agregarBtn.removeEventListener('click', actualizarPlato);
        agregarBtn.addEventListener('click', agregarPlato);
        idEditar = null;
    }
}

function cancelarEdicion() {
    limpiarFormulario();
    agregarBtn.textContent = 'Agregar plato';
    agregarBtn.removeEventListener('click', actualizarPlato);
    agregarBtn.addEventListener('click', agregarPlato);
    idEditar = null;
}
const cancelarBtn = document.getElementById('btn_cancelar');
cancelarBtn.addEventListener('click', cancelarEdicion);

function eliminarPlato(id) {
    const index = platos.findIndex(p => p.id === id);
    if (index !== -1) {
        if (confirm('¿Estas seguro de que queres eliminar este plato del menu?')) {
            platos.splice(index, 1);
            renderPlatos();
            actualizarEstadisticas();
        }
    }
}

function actualizarEstadisticas() {
    const totalPlatos = platos.length;
    const precioPromedio = totalPlatos > 0 ?
        (platos.reduce((sum, p) => sum + p.precio, 0) / totalPlatos).toFixed(2) : 0;
    document.getElementById('totalPlatos').textContent = totalPlatos;
    document.getElementById('precioPromedio').textContent = precioPromedio;

    const precioMasCaro = totalPlatos > 0 ?
        Math.max(...platos.map(p => p.precio)).toFixed(2) : 'N/A';
    const precioMasBarato = totalPlatos > 0 ?
        Math.min(...platos.map(p => p.precio)).toFixed(2) : 'N/A';

    document.getElementById('precioMasCaro').textContent = precioMasCaro;
    document.getElementById('precioMasBarato').textContent = precioMasBarato;
}

window.onload = function () {
    renderPlatos();
    actualizarEstadisticas();
};
