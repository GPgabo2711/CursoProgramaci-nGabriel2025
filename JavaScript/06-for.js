let x=10
text=""
/*for (let x=0; x<=100; x++){
    //ciclo for. primero declaro la variable la cual se suele inicializar en cero,
    //despues viene la condicion que se va a cumplir, se autoincrementa o se decrementa.
    console.log("El alumno tiene el codigo = "+ x) + "<br>"
}*/


//* ARRAY*/
const alumnos=["Joni","Pedro","Julio","carlo","Mario"];
for(let i=0; i<alumnos.length; i++){
    console.log("El alumno "+ alumnos[i]+ " esta raspado");
    text += "- El alumno "+ alumnos[i]+ " está raspado." + "<br>";
}
document.getElementById("alumnos").innerHTML = text



text2=""
const fruta=["manzana","naranja","pera","lechoza","uva"];
for(let g=0; g<fruta.length; g++){
    console.log("La "+ fruta[g]+ " se pudrio");
    text2 += "- La "+ fruta[g]+ " se pudrió." + "<br>";
}
document.getElementById("fruta").innerHTML = text2