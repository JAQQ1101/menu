document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionar todos los pares de idiomas
    const languagePairs = document.querySelectorAll('.language-pair');
    let currentIndex = 0;

    function changeLanguage() {
        if (languagePairs.length === 0) return;

        // Ocultar el par actual
        languagePairs[currentIndex].classList.remove('active');

        // Calcular el índice del siguiente par
        currentIndex = (currentIndex + 1) % languagePairs.length;

        // Mostrar el siguiente par
        languagePairs[currentIndex].classList.add('active');
    }

    // Establecer un único intervalo para cambiar el par de idiomas cada 5 segundos
    setInterval(changeLanguage, 5000);
});