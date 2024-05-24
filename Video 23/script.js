//Procedimiento
function saludar(){
    console.log("Hola estoy en la funcion saludar");
}

saludar();

//Funcion
function sumar(num1,num2){
    let resultado;
    resultado = num1 + num2;
    return resultado;
}

//invoca suma
let suma = sumar(5,2);
console.log("El resultado es: " + suma);
suma = sumar(9,5);
console.log("El resultado es: " + suma);