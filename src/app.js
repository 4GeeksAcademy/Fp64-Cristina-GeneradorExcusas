function generarArgumento() {
  let quien = ["Canarias", "Europa", "España"];
  let action = ["está explotada", "sufre"];
  let what = ["por los turistas", "por el petróleo"];
  let when = ["todos los años", "en verano", "en temporada alta"];

  let quienSeleccionado = quien[Math.floor(Math.random() * quien.length)];
  let actionSeleccionada = action[Math.floor(Math.random() * action.length)];
  let whatSeleccionado = what[Math.floor(Math.random() * what.length)];
  let whenSeleccionado = when[Math.floor(Math.random() * when.length)];

  let argumento =
    quienSeleccionado +
    " " +
    actionSeleccionada +
    " " +
    whatSeleccionado +
    " " +
    whenSeleccionado +
    ".";

  document.getElementoPorId("argumento").textContent = argumento;
}

window.onload = generarArgumento;
