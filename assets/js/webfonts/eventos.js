const miBoton = document.getElementById('miBoton');
const mensaje = document.getElementById('mensaje');
miBoton.addEventListener('click', function() {
    mensaje.textContent = '¡Hiciste click en el boton! oh noooooooooo!!!!!!!';
});


document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');

    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'green';
    });

    box.addEventListener('mouseout', () => {
        box.style.backgroundColor = 'red';
    });
});

function validar(event) {

    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let clave = document.getElementById('clave').value;
    let errorClave = document.getElementById('errorClave');
    let errorNombre = document.getElementById('errorNombre');
    let errorEmail = document.getElementById('errorEmail');
    let mensajeExito = document.getElementById('mensajeExito');

    let hayError = false;

    errorNombre.style.display = 'none';
    errorEmail.style.display = 'none';
    errorClave.style.display = 'none';
    mensajeExito.style.display = 'none';

    if (nombre.trim() === '') {
        errorNombre.style.display = 'block';
        hayError = true;
    }


    if (email.trim() === '') {
        errorEmail.style.display = 'block';
        hayError = true;
    }

    if (clave.trim() === '') {
        errorClave.style.display = 'block';
        hayError = true;
    }

    if(!hayError) {
        console.log('formulario enviado exitosamente.');
        console.log('nombre:', nombre);
        console.log('Email:', email);
        console.log('Clave:', clave);
  

    mensajeExito.style.display = 'block';
  
    document.getElementById('miForm').reset();//limpiar formulario

    setTimeout(() => {
        mensajeExito.style.display = 'none';
    }, 3000);
    }
}
