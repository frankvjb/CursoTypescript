// Objetos literales (JSON)

const p1 = {
  nombre: 'Pepe',
  edad: 23,
  saludar: function () {
      console.log(`Hola soy ${this.nombre}`)
  }
}

// p1 = new Object()

p1.saludar()
console.log(p1.__proto__)
console.log(p1.hasOwnProperty('nombre'))

// Objetos dinámicos

p1.edad = 24
p1.curso = 'TypeScript'
delete p1.nombre
console.log(p1)

// Funciones constructores

function Persona (nombre = '', edad = 0) {
  console.log('Ha nacido una persona')
  this.nombre = nombre
  this.edad = edad
}

Persona.prototype.cerebro = true
Persona.prototype.saludar = function (otro = 'amigo') {
      console.log(`Hola ${otro}, soy ${this.nombre}`)
  }

Persona.definir = function () {
  console.log('¿Que es una persona?')
}

let p2 = new Persona('Pepe')
let p3 = new Persona('Elena', 34)

console.log(p2 instanceof Persona)
console.log(p2 instanceof Object)

p2.saludar('Juan')
Persona.definir()
p2.trabajo = 'Programador'
delete p2.edad
console.log(p2.cerebro)
p3.cerebro = false
console.log(p3.cerebro)
console.log(p2)
console.log(p3)

const aDatos = [1,2,3,4]
console.log(Array.isArray(aDatos))

/* 
Array.prototype.push = () => console.log('Soy un array')
aDatos.push(8)
console.log(aDatos) 
*/
