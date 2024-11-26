document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form"); // Selecciona el formulario

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtiene los valores de los campos de entrada
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelectorAll('input[type="password"]')[0].value; // Primera contraseña
        const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value; // Segunda contraseña

        // Muestra una alerta con la información ingresada
        alert(`Registro:\nNombre: ${name}\nEmail: ${email}\nContraseña: ${password}\nConfirmar Contraseña: ${confirmPassword}`);

        // Aquí podrías agregar lógica adicional, como validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
        }
    });
});