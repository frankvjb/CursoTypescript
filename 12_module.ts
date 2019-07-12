export module MiModulo {
  export class Animal {
      public static vivo = true
      parasitos: Array<Parasito>
      constructor(public especie: string) {
          this.parasitos = [new Parasito('pulga')]
      }
  }

  class Parasito {
      constructor(public especie: string) {
      }
  }
}