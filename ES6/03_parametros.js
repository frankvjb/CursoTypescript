
function sumaBad(a, b) {
  return a + b
}

// ES6 parámetros por defecto y operador rest

function suma(a = 0, b = 0, ...rest) {
  console.log(rest)
  let r = a + b
  if(rest.length) {
      r += rest.reduce( (a,b) => a + b)
  }
  return r
}

console.log(suma('2', 2))

console.log(suma())
console.log(sumaBad())
console.log(suma(2))
console.log(sumaBad(4))
console.log(suma(3,5,6,8,9))

const aDatos = [3,5,6,8,9]

// ES6 spread operator
console.log(...aDatos)

// destructuring 

function algo() {
  let n = 23
  let condicion = true
  return [n, condicion]
}

let [number, cond] = algo()
console.log(number, typeof number)
console.log(cond, typeof cond)

function otra() {
  let n = 23
  let condicion = true
  return {n: n, condicion: condicion}
}

let {condicion, n} = otra()
console.log(n, typeof n)
console.log(condicion, typeof condicion)