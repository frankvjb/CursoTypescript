function sumaTotal(aDatos: Array<any> = []) {
  // aClon = aDatos.slice()
  let r = 0;
// tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < aDatos.length; i++) {
      const item = aDatos[i];
      r += item;
  }
  return r;
}

function sumaTotal2(aDatos: Array<any> = []) {
  let r = 0;
// tslint:disable-next-line: forin
  for (const i in aDatos) {
      const item = aDatos[i];
      r += item;
  }
  return r;
}

// ES6

function sumaTotalES6(aDatos: Array<any> = []) {
  let r = 0;
  for (const item of aDatos) {
      r += item;
  }
  return r;
}

const aDatos = [1, 56, 4, 6, 8, 23, 5, 9, 17];
console.log(sumaTotal(aDatos));
console.log(sumaTotal2(aDatos));
console.log(sumaTotalES6(aDatos));

aDatos.slice(); // Funciones ejecutadas como inmutables
aDatos.splice(2, 2); // Funciones ejecutadas como mutables

aDatos.sort( (a, b) => a - b ); // Funciones ejecutadas como mutables
console.log(aDatos);

/* aDatos.forEach()
aDatos.map()
aDatos.filter()
aDatos.reduce()
aDatos.reduceRight()
aDatos.some()
aDatos.every() */

function mostrar(aDatos: Array<any> = []) {
  aDatos.forEach( (item, i) => console.log(`El item ${i + 1} vale ${item}`));
}

mostrar(aDatos);

// Proyecciones

function cuadrados(aDatos: Array<any> = []) {
  return aDatos.map( (item) => item * item);
}

console.log(cuadrados(aDatos));

// Filtros

function pares(aDatos: Array<any> = []) {
  return aDatos.filter( (item) => !(item % 2));
}

console.log(pares(aDatos));

// Reduce

function sumaTotalReduce(aDatos: Array<any> = []) {
  return aDatos.reduce( (total, item) => total += item );
}

console.log(sumaTotalReduce(aDatos));

// Some y every

function sonTodosImpares(aDatos: Array<any> = []) {
  return aDatos.every( (item) => (item % 2));
}

console.log(sonTodosImpares(aDatos));

function hayAlgunoCentenas(aDatos: Array<any> = []) {
  return aDatos.some( (item) => item >= 100 );
}

console.log(hayAlgunoCentenas(aDatos));

// Objetos envolventes (wrapper objects)

let cadena = 'Hola';
let number = 23;

cadena.toUpperCase();
console.log(cadena[3]);
number.toLocaleString();
