var fecha = window.prompt("Ingresa una fecha en formato mm/dd/yyyy");
var Fecha = new Date(fecha);

var dia = Fecha.getDay();

alert("Dia que corresponde de la semana: " + dia);