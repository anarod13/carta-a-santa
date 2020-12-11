const $form = document.querySelector("#carta-a-santa");

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
        enviarAWishlist();


    }
    event.preventDefault();
}

function enviarAWishlist() {
    return setTimeout(function() {
        window.location.href = "wishlist.html";

    }, 5000);
}



$form.onsubmit = validarFormulario;