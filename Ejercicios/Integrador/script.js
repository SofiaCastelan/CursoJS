let listaNom = ["Sofia", "Oscar", "Kevin", "Carlos"];
let buscarNom = window.prompt("Coloca el nombre a buscar");

// Convertir buscarNom a minúsculas para la comparación
let buscarNomLower = buscarNom.toLowerCase();

// Buscar en la lista convirtiendo cada nombre a minúsculas
//some() comprueba si al menos uno de los elementos de la matriz satisface 
//la condición comprobada por el método argumento 
let busca = listaNom.some(nombre => nombre.toLowerCase() === buscarNomLower);

if (busca) {
    console.log("si esta");
} else {
    console.log("no esta");
}
