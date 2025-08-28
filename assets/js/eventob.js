function validar(event) {

    event.preventDefault();

    let nombre = document.getElementById('nombre').value;

    let errorNombre = document.getElementById('errorNombre');

    let hayError = false;

    errorNombre.style.display = 'block';

    if (nombre() === '') {
        errorNombre.style.display = 'block';
        hayError = true;
    }

    if (!hayError) {
        console.log('Formulario enviado exitosamente.');
        console.log('Nombre:', nombre);

        mensajeExito.style.display = 'block';
        document.getElementById('miForm').reset();

        setTimeout(() => {
            mensajeExito.style.display = 'none';
        }, 3000);
    }
}