import { Pedido, ProductoConPrecio } from './Pedido';

export function facturacionTotal(pedidos: Pedido[], productos: ProductoConPrecio[]): number {
  let total = 0;
  for(const pedido of pedidos){
    total = total + pedido.calcularTotal(productos);
  }
    return total;
}