// JS -> funcional
// funcion === objeto

// funciones anidadas
// Patrón MODULE

// Patrón IIAF

// Closures

const main = 
    (() => {

        let app = 'Mi aplicación'

        function presentar() {
            console.log(app)   
        }
        
        return {presentar: presentar}
    })()    

main.presentar()