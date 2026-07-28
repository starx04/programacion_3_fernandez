function mostrarAlerta() {
    alert('Bienvenido al restaurante');
}

function agregarPlatoAlPedido() {
    const lista = document.getElementById('lista-pedido');
    const nuevoPlato = document.createElement('li');
    nuevoPlato.textContent = 'Plato agregado al pedido';
    lista.appendChild(nuevoPlato);
}

document.getElementById('btn3').addEventListener('click', () => {
    const lista2 = document.getElementById('lista-pedido2');
    const nuevoPlato = document.createElement('li');
    nuevoPlato.textContent = 'Plato agregado desde event listener';
    lista2.appendChild(nuevoPlato);
});

function modificarTexto() {
    const texto = document.getElementById("texto-modificable");
    texto.textContent = "Su pedido fue enviado a cocina";
    console.log("texto:", texto);
}

function modificarH2() {
    const texto = document.getElementById("h2-mod");
    texto.textContent = "Gracias por su visita";
    console.log("texto:", texto);
}

document.getElementById('btn').addEventListener('click', mostrarAlerta);
document.getElementById('btn2').addEventListener('click', agregarPlatoAlPedido);
document.getElementById('btn4').addEventListener('click', modificarTexto);
document.getElementById('btn5').addEventListener('click', modificarH2);
