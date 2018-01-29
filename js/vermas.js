function mostrar(elemento) {
  var id = elemento.name;
  var parrafo = document.getElementById(id);
  var clase = document.getElementById(id).className;
  if (clase == 'hidden') {
    parrafo.className = 'mostrar';
  }else {
    parrafo.className = 'hidden';
  }
}
