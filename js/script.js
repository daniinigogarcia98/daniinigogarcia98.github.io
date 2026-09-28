const usuario = "daniinigogarcia98";
const repositorio = "daniinigogarcia98.github.io";

async function obtenerDatosRepositorio() {
  const elementoFecha = document.getElementById("fecha-actualizacion");
  const elementoRepositorio = document.getElementById("nombre-repositorio");

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

    // Mostrar nombre del repositorio
    if (elementoRepositorio) {
      elementoRepositorio.textContent = datos.name;
    }

    // Comprobar fecha
    if (!datos.pushed_at) {
      throw new Error("GitHub no devolvió pushed_at");
    }

    const fecha = new Date(datos.pushed_at);

    const fechaFormateada = fecha.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    if (elementoFecha) {
      elementoFecha.textContent = fechaFormateada;
    }

  } catch (error) {
    console.error("Error al obtener los datos de GitHub:", error);

    if (elementoFecha) {
      elementoFecha.textContent = "No disponible";
    }

    if (elementoRepositorio) {
      elementoRepositorio.textContent = "No disponible";
    }
  }
}

document.addEventListener("DOMContentLoaded", obtenerDatosRepositorio);
