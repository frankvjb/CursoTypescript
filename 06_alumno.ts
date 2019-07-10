import Persona from './06_persona';

export default class Alumno extends Persona {
    constructor(nombre: string, edad: number, public curso: string) {
        super(nombre, edad);
    }

    saludar(otro = 'amigo') {
        super.saludar(otro);
        console.log(`Estudio ${this.curso}`);
        console.log(`y tengo ${this.edad} años`)
    }
}
