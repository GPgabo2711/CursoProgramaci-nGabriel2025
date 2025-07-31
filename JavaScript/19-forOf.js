//For of es como un for tradicional que ejecuta una pieza de codigo mientras una condicion sea verdadera;
//este ejecuta mientras haya elementos por 

/*let pendientes = [`Tarea`, `Comer`, `Proyecto`, `Estudiar JavaScript`];

for (let pendiente of pendientes)
    console.log(pendiente);


let viajes = [`Italia`, `Roma`, `Rusia`, `Maragarita`, `Tachira`];
for (let viaje of viajes)
    console.log(viaje);


const carrito = [
    {id: 1, producto:`Libro`},
    {id: 2, producto:`Camisa`},
    {id: 3, producto:`Disco`}
];

for (let producto of carrito) {
    console.log(producto.producto);
}*/


const gimnasio = [
    {entrenador: 'Alan Brito',
    especialidad: 'Crossfit',
    sucursal: 'Turmero',
    año: '2023'},  
    {entrenador: 'Armando Parades',
    especialidad: 'Calistenia',
    sucursal: 'Maracay',
    año: '2025'}

]

for(let gym of gimnasio) {
    console.log(gym)
}
