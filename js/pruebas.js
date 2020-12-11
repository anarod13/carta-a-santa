function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'El nombre debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'El nombre no puede exceder los 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );

    console.assert(validarNombre(9933) === 'El nombre solo puede incluir letras',
        'Validar nombre no validó que el nomber solo incluya letras')
}

probarValidarNombre();

function probarValidarCiudad() {
    console.assert(validarCiudad("") === "Debe indicar una ciudad",
        "Validar ciudad no validó que se haya seleccionado una ciudad");
}

probarValidarCiudad();



function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo("") === "Debe incluir una descripcion del regalo",
        "Validar descripcion regalo no validó que descripción regalo no este vacio");
    console.assert(validarDescripcionRegalo("alksdcñsdvsdvdnldvnlskdnvlksdnvacnlanclsndvsnvlsvnlsdvnlsvdnlsnvlsdvnlksdnvlkksdnvacnlnldnvkcldknsldnsldlksdnv") ===
        "La descripcion del regalo no puede exceder los 100 caracteres",
        "Validar descripcion regalo no validó que descripción regalo no exceda los 100 caracteres");
    console.assert(validarDescripcionRegalo("-.-..") === "La descripción del regalo solo puede incluir letras o números",
        "validar descripción regalo no validó que descripción regalo solo incluya letras o números");
}

probarValidarDescripcionRegalo();