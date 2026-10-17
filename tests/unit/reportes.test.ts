import { describe, it, expect } from "vitest";
import { Expreso, Filtrado, Pasteleria } from '../../src/models/Producto'
import { Pedido } from '../../src/models/Pedido'
import {facturacionTotal, cantidadVendidaPorProducto} from '../../src/models/Reportes'

describe('Reportes()', () => {
    it('la facturacion total suma los totales de todos los pedidos', () => {
        const productos = [
            new Expreso(1, 'Pocillo', 'Brasil'),
            new Filtrado(14, 'Mediano', 'Colombia'),
            new Pasteleria(19, 'Muffin de chocolate', 2500),
        ]
        const pedidos = [
            new Pedido(1, [{ productoId: 1, cantidad: 2 }, {productoId: 19, cantidad: 1 }]),
            new Pedido(2, [{ productoId: 14, cantidad: 1}]),
        ];
        expect(facturacionTotal(pedidos, productos)).toBe(12540 + 5900);
    });
    it('cuenta las unidades vendidas por producto', () => {
        const productos = [
            new Expreso(1, 'Pocillo', 'Brasil'),
            new Filtrado(14, 'Mediano', 'Colombia'),
            new Pasteleria(19, 'Muffin de chocolate', 2500),
        ]
        const pedidos = [
            new Pedido(1, [{ productoId: 1, cantidad: 2 }, {productoId: 19, cantidad: 1 }]),
            new Pedido(2, [{ productoId: 14, cantidad: 1}]),
        ];
        expect(cantidadVendidaPorProducto(pedidos, productos)).toEqual({
            'Expreso Pocillo Brasil': 2 ,
            'Filtrado Mediano Colombia': 1 ,
            'Muffin de chocolate': 1 ,

        });
    })
})
