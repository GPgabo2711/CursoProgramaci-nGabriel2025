function validar(event) {

    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let ciudad = document.getElementById('ciudad').value;
    let estado = document.getElementById('estado').value;
    let codigoPostal = document.getElementById('codigoPostal').value;
    let clave = document.getElementById('clave').value;
    let confirmarClave = document.getElementById('confirmarClave').value;

    let errorNombre = document.getElementById('errorNombre');
    let errorApellido = document.getElementById('errorApellido');
    let errorEmail = document.getElementById('errorEmail');
    let errorTelefono = document.getElementById('errorTelefono');
    let errorDireccion = document.getElementById('errorDireccion');
    let errorCiudad = document.getElementById('errorCiudad');
    let errorEstado = document.getElementById('errorEstado');
    let errorCodigoPostal = document.getElementById('errorCodigoPostal');
    let errorClave = document.getElementById('errorClave');
    let errorConfirmarClave = document.getElementById('errorConfirmarClave');
    let mensajeExito = document.getElementById('mensajeExito');

    let hayError = false;

    
    errorNombre.style.display = 'none';
    errorApellido.style.display = 'none';
    errorEmail.style.display = 'none';
    errorTelefono.style.display = 'none';
    errorDireccion.style.display = 'none';
    errorCiudad.style.display = 'none';
    errorEstado.style.display = 'none';
    errorCodigoPostal.style.display = 'none';
    errorClave.style.display = 'none';
    errorConfirmarClave.style.display = 'none';
    mensajeExito.style.display = 'none';


    if (nombre.trim() === '') {
        errorNombre.style.display = 'block';
        hayError = true;
    }

    if (apellido.trim() === '') {
        errorApellido.style.display = 'block';
        hayError = true;
    }

    if (email.trim() === '') {
        errorEmail.style.display = 'block';
        hayError = true;
    }

    if (telefono.trim() === '') {
        errorTelefono.style.display = 'block';
        hayError = true;
    }

    if (direccion.trim() === '') {
        errorDireccion.style.display = 'block';
        hayError = true;
    }

    if (ciudad.trim() === '') {
        errorCiudad.style.display = 'block';
        hayError = true;
    }

    if (estado === '') {
        errorEstado.style.display = 'block';
        hayError = true;
    }

    if (codigoPostal.trim() === '') {
        errorCodigoPostal.style.display = 'block';
        hayError = true;
    }

    if (clave.trim() === '') {
        errorClave.style.display = 'block';
        hayError = true;
    }

    if (confirmarClave.trim() === '' || confirmarClave !== clave) {
        errorConfirmarClave.style.display = 'block';
        hayError = true;
    }

    if (!hayError) {
        console.log('Formulario enviado exitosamente.');
        console.log('Nombre:', nombre);
        console.log('Apellido:', apellido);
        console.log('Email:', email);
        console.log('Teléfono:', telefono);
        console.log('Dirección:', direccion);
        console.log('Ciudad:', ciudad);
        console.log('Estado:', estado);
        console.log('Código Postal:', codigoPostal);
        console.log('Clave:', clave);

        mensajeExito.style.display = 'block';
        document.getElementById('miForm').reset();

        setTimeout(() => {
            mensajeExito.style.display = 'none';
        }, 3000);
    }
}
