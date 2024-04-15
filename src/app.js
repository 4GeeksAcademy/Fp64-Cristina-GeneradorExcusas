function generarArgumento() {
  let quien = ["Canarias", "Europa", "España"];
  let action = ["está explotada", "sufre"];
  let what = ["por los turistas", "por el petróleo"];
  let when = ["todos los años", "en verano", "en temporada alta"];

  // Seleccionar una palabra aleatoria de cada uno de los arrays
  let quienSeleccionado = quien[Math.floor(Math.random() * quien.length)];
  let actionSeleccionada = action[Math.floor(Math.random() * action.length)];
  let whatSeleccionado = what[Math.floor(Math.random() * what.length)];
  let whenSeleccionado = when[Math.floor(Math.random() * when.length)];

  // Construir la frase
  let argumento =
    quienSeleccionado +
    " " +
    actionSeleccionada +
    " " +
    whatSeleccionado +
    " " +
    whenSeleccionado +
    ".";

  // Actualizar el contenido del elemento HTML con id "argumento"
  document.getElementById("argumento").textContent = argumento;
}

// Llamar a la función para generar la excusa cuando la ventana esté completamente cargada
window.onload = generarArgumento;
