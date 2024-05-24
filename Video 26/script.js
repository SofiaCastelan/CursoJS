//para pasar las mayusculas a minusculas
let frase = "Hace mucho frio y no tengo sueter"
let mayus = frase.toUpperCase();
//pasar a minusculas
let minus = frase.toLocaleLowerCase();

console.log(mayus);
console.log(minus);


//unir dos cadenas de caracteres
let frase2 = " pasen sueter";

let mensajeFinal = frase.concat(frase2);
console.log(mensajeFinal);

//Encontrar una cadena de caracteres en una frase
//si no encuentra coloca un -1
//la palabra debe de estar tal cual como en la frase original
let frase3 = "Otra vez tengo mucho frio";
let posicion = frase.indexOf("frio");
console.log(posicion)


//metodo incluye
//solo responde si la cadena de caracteres esta en la frase
//solo devuelve un valor booleano
let posicion1 = frase.includes("frio");
console.log(posicion1)