/*const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion id ${id}`)
    },
    pausar: function() {
        console.log(`Pausando...`)
    },
    borrar: function(id) {
        console.log(`Borrando cancion con id: ${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`)
    },
}
reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearPlaylist("romanticas");
reproductor.reproducirPlaylist("romanticas");*/

const automovil = {
    marca: function(nombre) {
        console.log(`la marca del carro es: ${nombre}`);
    },
    modelo: function(nombre) {
        console.log(`El modelo del carro es: ${nombre}`);
    },
    placa: function(nombre) {
        console.log(`la placa del carro es: ${nombre}`);
    },
    kilometros: function(nombre) {
        console.log(`El kilometraje del carro es de: ${nombre}`);
    },
    encender: function() {
        console.log(`encendiendo...`);
    },
    acelerar: function() {
        console.log(`acelerando...`);
    },
    parabrisasOn: function() {
        console.log(`activando parabrisas...`);
    },
    ParabrisasOff: function() {
        console.log(`desactivando parabrisas...`);
    },
    frenar: function() {
        console.log(`frenando...`);
    },
    apagar: function() {
        console.log(`apagando...`);
    }
}
automovil.marca("Chevrolet");
automovil.modelo("Corvette");
automovil.placa("ADR76RT");
automovil.kilometros("50.000km");
automovil.encender();
automovil.acelerar();
automovil.parabrisasOn();
automovil.ParabrisasOff();
automovil.frenar();
automovil.apagar();
