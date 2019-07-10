import Alumno from './06_alumno';
import Persona from './06_persona';

let p3: Persona;

const p1 = new Persona('Pepe', 34);
const p2 = new Persona('Elena', 28);
p3 = new Persona();

p1.saludar();
p1.saludar(p2.nombre);

// p2.trabajo = 'Programadora'; // Da error porque la propiedad no existe
// delete p2.edad; // Da error porque edad es protected

console.log(p1);
console.log(p2);
console.log(Persona.especie);
console.log(Persona.pensar());

const a1 = new Alumno('Carlos', 31, 'Angular');
let a2: Alumno;
a2 = new Alumno('Juan', 21, 'TypeScript')

console.log(a1);
a1.saludar();

console.log(a1 instanceof Alumno);
console.log(a1 instanceof Persona);
console.log(a1 instanceof Object);
