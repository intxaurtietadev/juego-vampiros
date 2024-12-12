function showPopup(message) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.querySelector('p').textContent = message;
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Manejador del formulario inicial
document.getElementById('guestForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    const guestInput = document.getElementById('guestInput').value.toLowerCase();

    if (guestInput.includes('vampiro')) {
        showPopup('🩸¡Bienvenido al Banquete Sangriento!🩸');
        document.getElementById('secretCodeForm').style.display = 'block'; // Muestra el formulario del código secreto
    } else if (guestInput.includes('hombre lobo')) {
        showPopup('¡¡¡FUERA DE AQUÍ, CHUCHO 🐺!!!');
    } else if (guestInput.includes('miau')) {
        showPopup('Ven aquí gatito, te estábamos buscando 🐈‍⬛.');
    } else {
        showPopup('Bienvenido, puedes esperar en el salón mientras llegan los demás invitados...🧛🏻');
    }
});

// Manejador del formulario del código secreto
document.getElementById('secretCodeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario
    const codigoSecreto = 'Edward Cullen no está invitado';
    const loQueDiceLaPersona = document.getElementById('secretCodeInput').value;

    if (codigoSecreto === loQueDiceLaPersona) {
        showPopup('Puedes pasar a la fiesta secreta... la cena está esperando en el salón 🧛🏻🩸🧛🏻');
    } else {
        showPopup('Impostor, acabaremos contigo 🦇🦇🦇');
    }
});