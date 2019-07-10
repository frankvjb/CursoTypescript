abstract class Animal {
  vivo: boolean;
  constructor(public especie: string) {
      this.vivo = true;
  }
  comer() {
      console.log('Estoy comiendo')
  }
}

interface IFelino {
  color: string;
  uñas: boolean;
  maullar: () => void;
}

// tslint:disable-next-line: max-classes-per-file
class Gato extends Animal implements IFelino {

  constructor(especie: string, public color: string , public uñas: boolean) {
      super(especie)
  }

  maullar() {
      console.log('Miau');
  }
}

let g = new Gato('gato', 'negro', true);

let a: Animal;
let g1: Gato;
let f: IFelino;

a = {
  especie: 'bicho',
  vivo: true,
  comer() {console.log('Estoy comiendo'); },
};

f = {
  color: '',
  uñas: true,
  maullar() {},
};

console.log(a);