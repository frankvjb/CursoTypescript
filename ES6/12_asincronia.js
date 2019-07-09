
// Callbacks

function leerDatos(callback) {
  setTimeout(
      () => {
          let data = 'los datos'
          callback(data)
      }, 1000
  )
}

function mostrarDatos (datos) {
  console.log(datos)
}

leerDatos(mostrarDatos)

// ES6 Promesas

function leerDatosAsinc(timer = 1000) {
  return new Promise( (resolve, reject) => {
      setTimeout(() => {
          const n = Math.random() 
          if( n < 0.75) {
              // OK
                  resolve(n)
          } else {
              //
              reject(new Error(n))
           }
      }, timer)
  })
}

leerDatosAsinc()
.then( ( datos ) => { 
  console.log('Unico', datos)
  return leerDatosAsinc()}, 
  ( error ) => { 
      console.log('Error: ' + error.message)
  }
)

leerDatosAsinc()
.then( ( datos ) => { 
  console.log(1, datos)
  return leerDatosAsinc()
})
.then( ( datos ) => {
   console.log(2, datos)
   return leerDatosAsinc()
  })
.then( ( datos ) => { console.log(3, datos)})
.catch( ( error ) => { console.log('Error: ' + error.message)}); 


// ES2017 (ES8) async/await

(async function () {
  try {
      const datos = await leerDatosAsinc()
      console.log('await', datos)
  } catch (error) {
      console.log('Error: ' + error.message)
  }
})()