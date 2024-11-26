document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form"); // Selecciona el formulario

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtiene el valor del campo de entrada
        const email = form.querySelector('input[type="email"]').value;

        // Muestra una alerta con la información ingresada
        alert(`Se ha enviado un enlace de recuperación a:\nEmail: ${email}`);

        // Aquí podrías agregar lógica adicional, como validar el correo electrónico
    });
});