let cantidadPedidos = 5;

// Incremento de pedidos
cantidadPedidos++;           // post-incremento: registra el pedido actual, luego suma 1
++cantidadPedidos;           // pre-incremento: suma 1 primero, luego registra

// Decremento de pedidos
cantidadPedidos--;           // post-decremento
--cantidadPedidos;           // pre-decremento

// La diferencia importa cuando el resultado se asigna
let pedidosHoy = 5;
let pedidosAyer = pedidosHoy++;   // pedidosAyer = 5, pedidosHoy = 6 (post: se asigna antes de incrementar)
let pedidosTotales = ++pedidosHoy;   // pedidosTotales = 7, pedidosHoy = 7 (pre: se incrementa antes de asignar)