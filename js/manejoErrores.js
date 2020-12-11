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