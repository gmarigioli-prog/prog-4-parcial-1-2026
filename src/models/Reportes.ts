import { Pedido, ProductoConPrecio } from './Pedido';

export function facturacionTotal(pedidos: Pedido[], productos: ProductoConPrecio[]): number {
  let total = 0;
  for(const pedido of pedidos){
    total = total + pedido.calcularTotal(productos);
  }
    return total;
}
export function cantidadVendidaPorProducto(pedidos: Pedido[], productos: ProductoConPrecio[]): Record<string, number> {
    const cantidades: Record<string, number> = {};
    for (const pedido of pedidos){
        for (const item of pedido.items){
            const producto = productos.find(p => p.id === item.productoId);
            if (producto) {
                cantidades[producto.nombre] = (cantidades[producto.nombre] ?? 0) + item.cantidad;
            }
        }
    }
    return cantidades;
}