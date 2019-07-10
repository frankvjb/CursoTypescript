// declaración 

function una(n) {
  return n
}

// asignación

const otra = function(n) {
  return n
}

// ES6: asignación de arrow functions o lambdas

// const lambda = (n) => {return n}
const lambda = n => n

// Diferencias en el this segun la forma de invocación

function mostrar() {
  console.log(this)
} 

// Funcion
mostrar() // This es el objeto global

// Metodo
let o = {nombre : 'Luis'}
o.mostrar = mostrar
o.mostrar() // This es el objeto

// Constructor
const o2 = new mostrar() // This es el nuevo objeto que se instancia

// Apply | call
const o3 = {
  nombre: 'Objeto 3'
}

mostrar.apply(o3) // This es el objeto parametro, que "toma prestada la función" 


// Uso de metodos como handlers

setTimeout(o.mostrar, 1000)
setTimeout(o.mostrar.bind(o), 2000)

console.clear()

// Arrow
// - siempre son anonimas
// - nunca son constructoras
// - no suelen usarse como métodos
// - this consistente: la funcion

mostrarA = () => {console.log(this)}
mostrarA()

let oA = {nombre : 'Pepe'}
oA.mostrar = mostrarA
oA.mostrar()
