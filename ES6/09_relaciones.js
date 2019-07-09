function Mascota() {

}

function Perro () {
    
}

Perro.prototype = new Mascota()
Perro.prototype.constructor = Perro
console.log(Perro.prototype.constructor)

// Mascota.prototype.constructor.call(this, parámetros)

function Persona() {
    this.mascotas = [new Mascota()]  // Asociacion -> propiedad
    
}

Persona.prototype.compraMascota = function() {
    this.mascotas.push(new Mascota) // Dependencia -> metodo
}

Persona.prototype.adoptarMascota = function(mascota) {
    this.mascotas.push(mascota) // Inyeccion de Dependencia -> metodo
}

let p1 = new Persona()
let m1 = new Mascota()
p1.adoptarMascota(m1)
