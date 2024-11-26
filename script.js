const video = document.getElementById('miVideo');
const botonContainer = document.getElementById('boton-container');

// Al cargar la página, oculta el botón
document.addEventListener('DOMContentLoaded', function() {
    botonContainer.style.display = 'none';
});

// Mostrar el botón al finalizar el video
video.addEventListener('ended', function() {
    botonContainer.style.display = 'flex'; // Muestra el contenedor al terminar el video
});


// Navegar a la siguiente vista
function irASiguienteVista() {
    // Redirige a la nueva página
    window.location.href = "./vista/felicidades.html";

    // Elimina el historial actual para que no se pueda volver a la ventana anterior
    //window.history.replaceState(null, '', './vista/felicidades.html');
}

function cerrarVentana() {
    alert("DEBES CERRAR EL NAVEGADOR MANUALMENTE")
}
