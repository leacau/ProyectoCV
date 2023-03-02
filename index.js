
var nombre = prompt("Para una mejor experiencia decime tu nombre");

while (nombre==="" || nombre === null){
  var nombre = prompt("Para una mejor experiencia decime tu nombre");
};

let saludo = document.querySelector('.nombre');
saludo.innerHTML = "Hola " + nombre + "  soy Leandro Chena";