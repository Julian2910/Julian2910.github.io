document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contacto');
    var submitButton = form.querySelector('input[type="submit"]');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el envío automático del formulario

        if (validarFormulario()) {
            alert('Mensaje enviado');
            location.reload(); // Refrescar la página
        }
    });


function validarFormulario() {
    var nombre = document.forms["contacto"]["nombre"].value;
    var email = document.forms["contacto"]["email"].value;
    var mensaje = document.forms["contacto"]["mensaje"].value;

    if (nombre == "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }
    if (email == "") {
        alert("Por favor, ingresa tu correo electrónico.");
        return false;
    }
    if (mensaje == "") {
        alert("Por favor, ingresa tu mensaje.");
        return false;
    }

    return true;
    }
});