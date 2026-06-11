const campoPedido = document.getElementById('campo_pedido');
const botonAgregar = document.getElementById('btn_agregar');
const listaPedidos = document.getElementById('lista_pedidos');

botonAgregar.addEventListener('click', function () {
    const pedido = campoPedido.value.trim();
    if (pedido !== '') {
        const li = document.createElement('li');
        li.textContent = pedido;
        listaPedidos.appendChild(li);
        campoPedido.value = '';
    }
});
