//Manipular fechas
var fecha = new Date();
alert("La fecha de hoy es: " + fecha)

//Crear una fecha determinada
var FechaN = new Date(2004, 9, 7);
alert(FechaN)
//Otra forma de crear una fecha con string
var FechaNN = new Date("05/25/2023");
alert(FechaNN)

//Podemos obtener cada una de lo que nos mando de la fecha 
//Funciones especiales
var dia = FechaN.getDay();
var mes = FechaN.getMonth();
alert("Dia: " + dia);
alert("Mes: " + (mes+1));