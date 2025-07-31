//For Each y Map con Array Function......

/*const carrito = [
    { nombre: `Monitor 20 Pulgadas`, precio: 500},
    { nombre: `Televisión 50 Pulgadas`, precio: 700},
    { nombre: `Tablet`, precio: 300},
    { nombre: `Audifonos`, precio: 200},
    { nombre: `teclado`, precio: 50},
    { nombre: `Celular`, precio: 500}
]

const nuevoArray = carrito.map( producto => `Articulo: ${producto.nombre} Precio: ${producto.precio}`)
/// con .map(), puedes crear un nuevo arreglo con los resultadfos de esa operacion sin modificar el arreglo original

const nuevoArray2 = carrito.forEach( producto => console.log( `Articulo: ${producto.nombre} Precio: ${producto.precio}`))

console.log(nuevoArray);
console.log(nuevoArray2);*/




const numero = 3;
const numero2 = 4;
const multiplicadores = [1,2,3,4,5,6,7,8,9]

const tablaDos = multiplicadores.map( multiplicadores => `El resultado de ${numero} por ${multiplicadores} es igual a = ${numero * multiplicadores}`)

const tablatres = multiplicadores.forEach( multiplicadores => console.log( `El resultado de ${numero2} por ${multiplicadores} es igual a = ${numero2 * multiplicadores}`))

console.log(tablaDos);
console.log(tablatres);