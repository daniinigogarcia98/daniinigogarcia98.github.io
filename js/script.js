const usuario = "daniinigogarcia98";
const repositorio = "daniinigogarcia98.github.io";

async function obtenerDatosRepositorio() {
    const elementoFecha = document.getElementById("fecha-actualizacion");
    const elementoRepositorio = document.getElementById("nombre-repositorio");

    try {
        const url = `https://api.github.com/repos/${usuario}/${repositorio}`;

        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error(`GitHub respondió con HTTP ${respuesta.status}`);
        }

        const datos = await respuesta.json();

        // Mostrar nombre del repositorio
        if (elementoRepositorio) {
            elementoRepositorio.textContent = datos.name;
        }

        // Mostrar fecha de última actualización
        if (datos.pushed_at && elementoFecha) {
            const fecha = new Date(datos.pushed_at);

            elementoFecha.textContent = fecha.toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });
        }

    } catch (error) {
        console.error("Error al obtener los datos de GitHub:", error);

        if (elementoRepositorio) {
            elementoRepositorio.textContent = "No disponible";
        }

        if (elementoFecha) {
            elementoFecha.textContent = "No disponible";
        }
    }
}

document.addEventListener("DOMContentLoaded", obtenerDatosRepositorio);
