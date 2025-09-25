  // Función para mostrar el contenido correspondiente
  document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Ocultar todos los pasos
        document.querySelectorAll('.content div').forEach(div => {
            div.style.display = 'none';
        });
        // Mostrar el paso correspondiente
        const target = document.querySelector(this.getAttribute('href'));
        target.style.display = 'block';
    });
});