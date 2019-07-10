
// Callbacks
function leerDatos(callback: (any: any) => void) {
  setTimeout(
      () => {
          const data = 'los datos';
          callback(data);
      }, 1000 );
}

// tslint:disable-next-line: array-type
function mostrarDatos(datos: Array<any>) {
  console.log(datos);
}

leerDatos(mostrarDatos);

// ES6 Promesas

function leerDatosAsinc(timer = 1000) {
  return new Promise( (resolve, reject) => {
      setTimeout(() => {
          const n = Math.random();
          if( n < 0.75) {
              // OK
                  resolve(n);
          } else {
              //
              reject(new Error(String(n)));
           }
      }, timer);
  });
}

leerDatosAsinc()
.then( ( datos ) => {
  console.log('Unico', datos);
  return leerDatosAsinc(); },
  ( error ) => {
      console.log('Error: ' + error.message); },
);

leerDatosAsinc()
.then( ( datos ) => {
  console.log(1, datos);
  return leerDatosAsinc();
})
.then( ( datos ) => {
   console.log(2, datos);
   return leerDatosAsinc();
  })
.then( ( datos ) => { console.log(3, datos); })
.catch( ( error ) => { console.log('Error: ' + error.message); });

// ES2017 (ES8) async/await

(async () => {
  try {
      const datos = await leerDatosAsinc();
      console.log('await', datos);
  } catch (error) {
      console.log('Error: ' + error.message);
  }
})();
