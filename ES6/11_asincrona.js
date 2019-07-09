// JS lenguaje monohilo

// Tareas que consumen tiempo 
//     - Tareas bloqueantes
//     - Tareas no bloqueantes o asíncronas

// Bucle de eventos

setTimeout( () => console.log('Linea 1'), 0)
console.log('Linea 2')
console.log('Linea 3')
setTimeout( () => console.log('Linea 4'), 2000)
console.log('Linea 5')
setTimeout( () => console.log('Linea 6'), 1000)
console.log('Linea 7')