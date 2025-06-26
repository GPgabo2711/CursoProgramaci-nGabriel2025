let text= "";
let texto = "";
var n1=parseInt(prompt("introduce un número",0));
var n2=parseInt(prompt("Introduce el segundo número",0));

let resultado = n1 + n2;
texto = "El resultado de la suma es: " + resultado;

while(resultado <= 100){
    console.log(resultado);
    text+= "el número a imprimir es " + resultado + "<br>";
    resultado++;
}
document.getElementById("text").innerHTML= text;
document.getElementById("resultado").innerHTML= texto;