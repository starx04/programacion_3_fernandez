const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () => {
    caja.style.backgroundColor = 'yellow';
});
caja.addEventListener('mouseout', () => {
    caja.style.backgroundColor = 'ligthgray';
});
caja.addEventListener('click', () => {
    alert('Haz hecho click en la caja');
});

const area = document.getElementById('areaTouch');

area.addEventListener('touchstart', () => {
    caja.style.backgroundColor = 'green';
});
area.addEventListener('touchend', () => {
    caja.style.backgroundColor = 'blue';
});





