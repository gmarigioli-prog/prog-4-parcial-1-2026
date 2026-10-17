import { describe, it, expect } from "vitest";
import { Expreso } from "../../src/models/Producto";

describe('calcularPrecio()', () => {
   it('Expreso Pocillo Brasil cuesta 5020', () => {
    const producto = new Expreso(1, 'Pocillo', 'Brasil');
    const precio = producto.calcularPrecio()
    expect(precio).toBe(5020)
});
});