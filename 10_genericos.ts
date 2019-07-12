import Persona from './06_persona';

function algo(a:any, b:any) : any {
    return a + b;
}

// Genéricos o tipos dinámicos

function algoMejor<T>(a: T, b: T): T {
    return a as any + b as any;
}

const x = algoMejor<number>(2, 8);

// Ejmplo de TypeScript nativo

let z : Array<string>;
let y: Promise<Array<Persona>>

interface esNumerico<T> {
    prop1: T
    prop2: T
    prop3: T
}

class Generic<T> {
    add: (x: T, y: T) =>  T 
    /* add(x: T, y:T): T {return x + y } */
}

const g1 = new Generic<number>()
g1.add(8, 8)

const g2 = new Generic<string>()
g2.add('Pepe', 'Juan')


// Se pueden usar diversos genéticos

function dobeleGeneric<T, U> (a: T, b: U): T {
    return a
}

// Genericos ue extienden interfaces

interface withLength {
    length: number;
}

function generic2<T extends withLength> (a: T): T {
    console.log(a.length)
    return a
}
