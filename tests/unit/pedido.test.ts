import { describe, it, expect } from "vitest";
import { Expreso, Pasteleria } from "../../src/models/Producto";
import { Pedido } from "../../src/models/Pedido";

describe('Pedido()', () => {
   it('calcula el total de un pedido', () => {
    const productos = [
    new Expreso(1, 'Pocillo', 'Brasil'),
    new Pasteleria(19,'Muffin de chocolate', 2500),
   ]
   const pedido = new Pedido(1, [{productoId: 1, cantidad: 2}, {productoId: 19, cantidad: 1}]);
    expect(pedido.calcularTotal(productos)).toBe(12540)
});
})