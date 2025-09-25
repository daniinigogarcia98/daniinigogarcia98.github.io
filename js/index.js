window.onload = function() {
    // Cargar contenido dinámico (por ejemplo, un resumen de la instalación)
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <h3>¿Qué es VirtualBox?</h3>
        <p>VirtualBox es una herramienta de virtualización gratuita que te permite crear y ejecutar máquinas virtuales en tu computadora. A continuación, te proporcionamos una guía completa sobre cómo instalar y usar VirtualBox para crear una máquina virtual de Windows.</p>
        <h4>Recursos Oficiales</h4>
        <p><a href="https://www.virtualbox.org/" target="_blank" class="btn btn-primary">Visita el sitio oficial de VirtualBox</a></p>
        <hr>
        <h4>Últimos Consejos</h4>
        <ul>
            <li><strong>Usa una memoria dinámica:</strong> VirtualBox permite usar memoria dinámica, lo que significa que la RAM no siempre está asignada completamente.</li>
            <li><strong>Guest Additions:</strong> Instala los Guest Additions para mejorar la integración entre el sistema operativo host y la máquina virtual.</li>
        </ul>
    `;
}