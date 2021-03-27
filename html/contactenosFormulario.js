/*let botonEnviar = document.querySelector('#btnEnviar');
let inputNombre = document.querySelector('nombre');
let inputCorreo = document.querySelector('email');
let inputComentarios = document.querySelector('comment');

botonEnviar.addEventListener('click', obtenerDatos);*/

let validar = () => {
    let inputs_obligatorios = document.querySelector('#formulario');
    let error = false;

    for (let i = 0; i < inputs_obligatorios.length; i++) {
        if (inputs_obligatorios[i].value == '' || inputs_obligatorios[i].value == 'null') {
            if (inputs_obligatorios[0]) {
                inputs_obligatorios[0].placeholder = "Por favor ingrese la información requerida"
            }
            inputs_obligatorios[i].classList.add('input-error');
            error = true;
        } else {
            inputs_obligatorios[i].classList.remove('input-error');
        }
        error = true;
    }

    return error;
};



let obtenerDatos = () => {

    let error = validar();

    if (error) {
        Swal.fire({

            'title': 'Sus datos no se pudieron enviar',
            'text': 'Por favor revise la información',
            'icon': 'warning'
        });
    } else {
        Swal.fire({
            'title': 'Proceso realizado con éxito',
            'text': 'Sus datos se enviaron correctamente',
            'icon': 'success'
        });
    }

};

botonEnviar.addEventListener('click', obtenerDatos);