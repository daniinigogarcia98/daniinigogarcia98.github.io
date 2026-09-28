const usuario = "daniinigogarcia98";
const repositorio = "daniinigogarcia98.github.io";

async function obtenerUltimaActualizacion() {
  try {
    const respuesta = await fetch(
      `https://api.github.com/repos/${usuario}/${repositorio}`
    );

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    // Fecha del último push al repositorio
    const fechaISO = datos.pushed_at;

    const fechaFormateada = new Date(fechaISO).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    const elemento = document.getElementById("fecha-actualizacion");

    if (elemento) {
      elemento.innerText = fechaFormateada;
    }

  } catch (error) {
    console.error("Error al obtener la fecha de GitHub:", error);

    const elemento = document.getElementById("fecha-actualizacion");

    if (elemento) {
      elemento.innerText = "No disponible";
    }
  }
}

document.addEventListener("DOMContentLoaded", obtenerUltimaActualizacion);
