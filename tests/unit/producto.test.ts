import { describe, it, expect } from "vitest";
import { Expreso } from "../../src/models/Producto";
import { Filtrado } from "../../src/models/Producto"

describe('calcularPrecio()', () => {
   it('Expreso Pocillo Brasil cuesta 5020', () => {
    const producto = new Expreso(1, 'Pocillo', 'Brasil');
    const precio = producto.calcularPrecio()
    expect(precio).toBe(5020)
});
    it('Expreso Taza Grande Etiopia', () =>{
        const producto = new Expreso(9, 'Taza grande', 'Etiopia')
        const precio = producto.calcularPrecio()
        expect(precio).toBe(11140)
})
    it('Filtrado Mediano Colombia', () => {
        const producto = new Filtrado(14, 'Mediano', 'Colombia')
        const precio = producto.calcularPrecio()
        expect(precio).toBe(5900)
    })
});
