/**
 * Mixins: añaden propiedades y funcionalidades a las clases
 */

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
          Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
      });
  });
}



abstract class Persona {
  public name: string;
  saludar() {
      console.log(`Hola soy ${this.name}`);
  }
}

// tslint:disable-next-line: max-classes-per-file
abstract class Animal2 {
  public comida: string;
  comer() {
      console.log(`Estoy comiendo ${this.comida}`);
  }
}

// tslint:disable-next-line: max-classes-per-file
class Alumno implements Persona, Animal2 {

  saludar: () => void;
  comer: () => void;
  constructor(public name: string,
              public curso: string,
              public comida: string) {}
}

applyMixins(Alumno, [Persona, Animal2]);

let al = new Alumno('Pepe', 'TS', 'pizza');

al.saludar();
al.comer();
