function mostrarAlerte() {
    alert('¡Hola desde el boton!');
}


function agregarProducto() {
    const lista = document.getElementById('lista-productos');
    const nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = 'Nuevo Producto';
    lista.appendChild(nuevoProducto);
}

document.getElementById('btn3').addEventListener('click', () => {
    const lista2 = document.getElementById('lista-productos2');
    const nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = 'Nuevo Producto desde evento Listener';
    lista2.appendChild(nuevoProducto);
})


function modificarTexto() {
    const texto = document.getElementById("texto-modificable");
    texto.textContent = ("Texto modificado desde boton:");
    console.log("texto:", texto)
};

function modificarH2() {
    const texto = document.getElementById("h2-mod");
    texto.textContent = ("Texto de h2 modificado desde boton:");
    console.log("texto:", texto)
};