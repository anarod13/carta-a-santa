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