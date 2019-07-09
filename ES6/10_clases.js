// ES6 aparecen las "clases"

class Persona {
  constructor(nombre = '', edad = 0) {
      this.nombre = nombre
      this.edad = edad
  }

  saludar (otro = 'amigo') {
      console.log(`Hola ${otro}, soy ${this.nombre}`)
  }
}

const p1 = new Persona('Pepe', 34)
const p2 = new Persona('Elena', 28)

p1.saludar()
p1.saludar(p2.nombre)

p2.trabajo = 'Programadora'
delete p2.edad

console.log(p1)
console.log(p2)


class Alumno extends Persona {
  constructor(nombre, edad, curso) {
      super(nombre, edad)
      this.curso = curso
  }

  saludar (otro = 'amigo') {
      super.saludar(otro)
      console.log(`Y estudio ${this.curso}`)
  }
}

const a1 = new Alumno('Carlos', 31, 'Angular')
console.log(a1)
a1.saludar()

console.log(a1 instanceof Alumno)
console.log(a1 instanceof Persona)
console.log(a1 instanceof Object)