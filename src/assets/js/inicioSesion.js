document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form"); // Selecciona el formulario

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtiene los valores de los campos de entrada
        const email = form.querySelector('input[type="text"]').value;
        const password = form.querySelector('input[type="password"]').value;

        // Muestra una alerta con la información ingresada
        alert(`Iniciar sesión con:\nEmail: ${email}\nContraseña: ${password}`);

        // Aquí podrías agregar lógica adicional si es necesario
        // Por ejemplo, validar los campos o enviar datos a un servidor
    });
});