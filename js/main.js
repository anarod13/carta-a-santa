const $form = document.querySelector("#carta-a-santa");


function validarNombre(nombre) {
    if (nombre === '') {
        return 'El nombre debe tener al menos 1 caracter';
    }
    if (nombre.length >= 50) {
        return 'El nombre no puede exceder los 50 caracteres';
    }
    if (!/^[a-z]+$/i.test(nombre)) {
        return 'El nombre solo puede incluir letras'
    }
    return "";

}

function validarCiudad(ciudad) {
    if (ciudad === "") {
        return "Debe indicar una ciudad";
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo === "") {
        return "Debe incluir una descripcion del regalo";
    } else if (descripcionRegalo.length >= 100) {
        return "La descripcion del regalo no puede exceder los 100 caracteres";
    } else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return "La descripción del regalo solo puede incluir letras o números";
    }
    return "";
}

function validarFormulario(event) {

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;
    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo,

    };
    const isExito = manejaErrores(errores) === 0;
    if (isExito) {
        $form.className = "oculto";
        document.querySelector("#exito").className = "";

    }


    event.preventDefault();


}

function manejaErrores(errores) {
    const keys = Object.keys(errores);
    let cantidadErrores = 0;
    let erroresListados = [];
    listarErrores(erroresListados);

    keys.forEach(function(key, i) {
        let nombreError = "error-" + keys[i];
        const error = errores[key];
        if (error) {
            $form[key].className = "error";
            cantidadErrores++;

            if (erroresListados === "") {
                mostrarError(error, nombreError);

            } else {

                chequearSiErrorExiste(erroresListados, error, nombreError);
            }
        } else {
            $form[key].className = "";

            removerErroresCorregidos(nombreError);
        }


    });

    return cantidadErrores;
}

function mostrarError(error, nombreError) {
    const $error = document.createElement("li");
    $error.innerText = error;
    $error.className = "errores-mostrados";
    $error.id = nombreError;
    let $errores = document.querySelector("#errores");
    return $errores.appendChild($error);


}

function listarErrores(erroresListados) {
    const $erroresListados = document.querySelectorAll(".errores-mostrados");
    $erroresListados.forEach(function($errorenLista) {
        erroresListados.push($errorenLista.innerText);
    });
    return erroresListados;
}

function removerErroresCorregidos(nombreError) {
    const $erroresListados = document.querySelectorAll(".errores-mostrados");
    $erroresListados.forEach(function($errorEnLista) {
        if ($errorEnLista.id === nombreError) {
            $errorEnLista.remove();
        }
    });
}

function chequearSiErrorExiste(erroresListados, error, nombreError) {
    if (erroresListados.every(errorEnLista => errorEnLista !== error)) {
        return mostrarError(error, nombreError);
    }
}


$form.onsubmit = validarFormulario;