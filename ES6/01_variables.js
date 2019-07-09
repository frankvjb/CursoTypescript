// eslint-disable-next-line no-unused-vars
var x

// ES6

let global = ''

function algo() {

  let localFuncion = ''

  {
    let localBloque = ''
  }

}

const z = 9
// z = 8 DA error

// Diferencia entre elementales y referencias
'Pepe'
23
true
undefined
 {}

 const o = {}
 o.nombre = 'Pepe'

 // Funciones por asignación

 const suma = function(a,b) { return a+b }
 console.log(suma(3,5))

// Diferencia entre elemntales y referencias
// en términos de mutabilidad / inmutabilidad

const o1 = {nombre: 'Pepe'}
const o2 = o1 

o2.nombre = 'Jose'
console.log(o1)

function inscribir(alumno) {
  alumno.curso = 'Typescript'
}

inscribir(o1)
console.log(o1)
o1.nacim = new Date(2000, 12, 6)
o1.direccion =  {
  ciudad : 'Cádiz'
}
o1.saludar = function () {
  console.log(`Hola, soy ${this.name}`)
}

function objetoIndependiente(obj) {
  // clonado de objetos no deep
  const r = Object.assign({}, obj)
  // clonado de objetos deep
  // const r = JSON.parse(JSON.stringify(obj))
  r.nombre = 'Esnesto'
  r.cambios = 'Lo que sea'
  return r
}

const oNuevo = objetoIndependiente(o1)

oNuevo.direccion.ciudad = 'Malaga'
oNuevo.nacim = new Date(oNuevo.nacim)
console.log(o1)
console.log(oNuevo)