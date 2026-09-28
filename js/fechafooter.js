const usuario = "daniinigogarcia98";
const repositorio = "daniinigogarcia98.github.io";

async function obtenerUltimaActualizacion() {
  const elemento = document.getElementById("fecha-actualizacion");

  try {
    const url = `https://api.github.com/repos/${usuario}/${repositorio}`;

    console.log("Consultando:", url);

    const respuesta = await fetch(url);

    console.log("Estado:", respuesta.status);

    if (!respuesta.ok) {
      throw new Error(`GitHub respondió con HTTP ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    console.log("Datos de GitHub:", datos);

    if (!datos.pushed_at) {
      throw new Error("GitHub no devolvió pushed_at");
    }

    const fecha = new Date(datos.pushed_at);

    const fechaFormateada = fecha.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    elemento.textContent = fechaFormateada;

  } catch (error) {
    console.error("Error al obtener la fecha de GitHub:", error);

    if (elemento) {
      elemento.textContent = "No disponible";
    }
  }
}

document.addEventListener("DOMContentLoaded", obtenerUltimaActualizacion);
