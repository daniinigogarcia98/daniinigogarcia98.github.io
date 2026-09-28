// Reemplaza con tu usuario y el nombre de tu repositorio de GitHub
const usuario = "daniinigogarcia98";
const repositorio = "daniinigogarcia98.github.io";

async function obtenerUltimaActualizacion() {
  try {
    const respuesta = await fetch(`https://github.com{usuario}/${repositorio}`);
    
    if (respuesta.ok) {
      const datos = await respuesta.json();
      // 'pushed_at' indica la fecha y hora del último commit enviado
      const fechaISO = datos.pushed_at; 
      
      // Formatear la fecha al idioma local (Español)
      const fechaFormateada = new Date(fechaISO).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      document.getElementById('fecha-actualizacion').innerText = fechaFormateada;
    } else {
      document.getElementById('fecha-actualizacion').innerText = "No disponible";
    }
  } catch (error) {
    console.error("Error al obtener la fecha de GitHub:", error);
    document.getElementById('fecha-actualizacion').innerText = "Error al cargar";
  }
}

// Ejecutar la función cuando cargue la página
document.addEventListener("DOMContentLoaded", obtenerUltimaActualizacion);
