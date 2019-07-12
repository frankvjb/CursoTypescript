// Inferencia de tipos

class Reptil {
  constructor(public name: string = '') {}
}

// tslint:disable-next-line: max-classes-per-file
class Serpiente extends Reptil {
  picar() {}
  ponerHuevos() {}
}
// tslint:disable-next-line: max-classes-per-file
class Tortuga extends Reptil {
  nadar() {}
  ponerHuevos() {}
}
// tslint:disable-next-line: max-classes-per-file
class Lagarto extends Reptil {}
// tslint:disable-next-line: max-classes-per-file
class Cocodrilo extends Reptil {
  dientes = true;
}

// Se infiere un tipo unión
let bichos = [new Serpiente(), new Tortuga(), new Lagarto()];
// bichos.push(22) //Error de tipos
bichos.push(new Cocodrilo());

let Bichos2: Reptil[] = [new Serpiente(), new Tortuga(), new Lagarto()];
Bichos2.push(new Cocodrilo());

// Tipos union

function getAnimal(): Serpiente | Tortuga {
  return new Serpiente()
}

let reptil = getAnimal();
reptil.ponerHuevos();
// reptil.picar() // Método no soportdo

// Aserción de tipos

let reptil2 = getAnimal() as Serpiente;
reptil2.ponerHuevos();
reptil2.picar();
/* (<Serpiente>reptil2).picar(); */

// TypeGuards

function isSerpiente(reptil: Serpiente | Tortuga) : reptil is Serpiente {
  return (<Serpiente>reptil).picar() != undefined
}

let reptil3 = getAnimal()
if (isSerpiente(reptil3) ) {
  reptil3.picar()
}

// Extender los tipos usando genericos

function getAnimalMejor<T extends Serpiente | Tortuga> () : T {
  const a = new Serpiente();
  return  a as T;
}

let reptil4 = getAnimalMejor<Serpiente>();
reptil4.ponerHuevos();
reptil4.picar();
