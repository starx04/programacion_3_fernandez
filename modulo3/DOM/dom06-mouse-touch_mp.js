// Ficha de categoria de plato: arrastrable y cambia de color/categoria
const ficha = document.getElementById('ficha');
const categorias = ['Entradas', 'Fuertes', 'Postres', 'Bebidas', 'Especiales'];
const colores = ['#e67e22', '#c0392b', '#8e44ad', '#2980b9', '#16a085'];
let categoriaActual = 0;

let arrastrando = false;

function cambiarCategoria() {
    categoriaActual = (categoriaActual + 1) % categorias.length;
    ficha.style.background = colores[categoriaActual];
    ficha.textContent = categorias[categoriaActual];
}

function moverFicha(x, y) {
    const container = document.getElementById('container');
    const containerRect = container.getBoundingClientRect();
    const fichaRect = ficha.getBoundingClientRect();
    const mitadAncho = fichaRect.width / 2;
    const mitadAlto = fichaRect.height / 2;

    const offsetTop = containerRect.top + window.scrollY;
    const offsetLeft = containerRect.left + window.scrollX;

    ficha.style.left = (x - offsetLeft - mitadAncho) + 'px';
    ficha.style.top = (y - offsetTop - mitadAlto) + 'px';
}

// Touch Events
ficha.addEventListener('touchstart', (e) => {
    e.preventDefault();
    cambiarCategoria();
    arrastrando = true;
});

document.addEventListener('touchmove', (e) => {
    if (!arrastrando) return;
    const touch = e.touches[0];
    moverFicha(touch.pageX, touch.pageY);
});

document.addEventListener('touchend', () => {
    arrastrando = false;
});

// Mouse Events
ficha.addEventListener('mousedown', (e) => {
    e.preventDefault();
    cambiarCategoria();
    arrastrando = true;
});

document.addEventListener('mousemove', (e) => {
    if (!arrastrando) return;
    moverFicha(e.clientX, e.clientY);
});

document.addEventListener('mouseup', () => {
    arrastrando = false;
});
