// Función que muestra la información principal
function mostrarInformacionPrincipal() {
    // Mostramos la información principal
    const infoPrincipal = document.querySelector('.info-adicional');
    infoPrincipal.classList.remove('hidden');
    
    // Ocultamos las secciones adicionales (esto es solo por si ya están visibles)
    const secciones = document.querySelectorAll('.seccion-info');
    secciones.forEach(function (seccion) {
        seccion.classList.add('hidden');
    });
}

// Función que muestra la sección correspondiente cuando se hace clic en un botón
function mostrarSeccion(seccion) {
    // Ocultamos la información principal
    const infoPrincipal = document.querySelector('.info-adicional');
    infoPrincipal.classList.add('hidden');

    // Ocultamos todas las secciones
    const secciones = document.querySelectorAll('.seccion-info');
    secciones.forEach(function (seccion) {
        seccion.classList.add('hidden');
    });

    // Mostramos la sección seleccionada
    const seccionSeleccionada = document.getElementById(seccion);
    seccionSeleccionada.classList.remove('hidden');
}

// Llamar a la función de mostrar la información principal al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarInformacionPrincipal();
});
