const video = document.getElementById('miVideo');
const botonContainer = document.getElementById('boton-container');

// Al cargar la página, oculta el botón
document.addEventListener('DOMContentLoaded', function() {
    botonContainer.style.display = 'none';
});

// Evento: Mostrar el botón al finalizar el video
video.addEventListener('ended', function() {
    botonContainer.style.display = 'flex'; // Muestra el contenedor al terminar el video
});


// Función: Navegar a la siguiente vista
function irASiguienteVista() {
    // Redirige a la nueva página
    window.location.href = "./vista/felicidades.html";

    // Elimina el historial actual para que no se pueda volver
    //window.history.replaceState(null, '', './vista/felicidades.html');
}

function cerrarVentana() {
    alert("Por favor, cierra el navegador manualmente para finalizar.");
}
