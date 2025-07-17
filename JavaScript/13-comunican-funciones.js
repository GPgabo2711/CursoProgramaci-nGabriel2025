/*iniciarApp(); //INVOCANDO LA FUNCION INICIAR APP

function iniciarApp() {
    console.log(`iniciando App...`);
    segundaFuncion();
}

function segundaFuncion() {
    console.log(`Desde la segunda funcion...`)
    usuarioAutenticado(`= Pablo`);
}

function usuarioAutenticado(usuario) {
    console.log(`Autenticando usuario...`);
    console.log(`Usuario autenticado con exito ${usuario}`)
}*/

//iniciar App - sumar dos numeros - el resultado de la suma multiplicarlo x50


IniciarApp();

function IniciarApp() {
    console.log(`iniciando App...`)
    funcionSuma(10, 10)
}

function funcionSuma(n1, n2) {
    suma = (n1+n2)
    console.log(`la suma de ${n1} y ${n2} es: ${suma}`)
    funcionMulti(suma)
}

function funcionMulti() {
    console.log(`la multiplicacion x50 de la suma es: ${suma*50}`)
}



