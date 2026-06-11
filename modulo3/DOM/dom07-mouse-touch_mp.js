// Boton "Agregar al pedido" que crece con eventos mouse/touch
const boton = document.getElementById('botonPedido');

function agrandar() {
    boton.style.transform = 'scale(1.5)';
}

function normalizar() {
    boton.style.transform = 'scale(1)';
}

// Mouse events
boton.addEventListener('mouseover', agrandar);
boton.addEventListener('mouseout', normalizar);

// Touch events
boton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    agrandar();
});
boton.addEventListener('touchend', normalizar);
