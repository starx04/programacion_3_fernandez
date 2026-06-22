
const campoNumero3 = document.getElementById('campo_numero3');
const campoNumero4 = document.getElementById('campo_numero4');
const btnArea = document.getElementById('btn_area');
const resultado1 = document.getElementById('resultado1');



btnArea.addEventListener('click', () => {


    const numero3 = parseFloat(campoNumero3.value);
    const numero4 = parseFloat(campoNumero4.value);
    const area_triangulo = (numero3 * numero4) / 2;
    resultado1.textContent = `Área del triángulo: ${area_triangulo}`;
});