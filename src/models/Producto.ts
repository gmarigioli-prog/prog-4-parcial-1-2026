export class Expreso {
  constructor(
    public id: number,
    public tamanio: string,
    public variedad: string
  ) {}

  calcularPrecio(): number {
    const GramosPorTamanio = {Pocillo: 18, Mediano: 27, 'Taza grande': 36};
    const precioPorGramo = {Brasil: 140, Colombia: 180, Etiopia: 240};
    const gramos = GramosPorTamanio[this.tamanio];
    const precioGramo = precioPorGramo[this.variedad];
    return  2500 + gramos * precioGramo;
  }
}