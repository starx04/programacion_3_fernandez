const platoDelDia = document.getElementById('platoDelDia');

platoDelDia.addEventListener('mouseover', () => {
    platoDelDia.style.backgroundColor = 'yellow';
});
platoDelDia.addEventListener('mouseout', () => {
    platoDelDia.style.backgroundColor = 'lightgray';
});
platoDelDia.addEventListener('click', () => {
    alert('Plato del dia: Ceviche de camaron - $8.50');
});

const areaTouch = document.getElementById('areaTouch');

areaTouch.addEventListener('touchstart', () => {
    platoDelDia.style.backgroundColor = 'green';
});
areaTouch.addEventListener('touchend', () => {
    platoDelDia.style.backgroundColor = 'blue';
});
