const num1 = prompt("Ingresa el primer numero");
const num2 = prompt("Ingresa otro numero");

const resta = num1 - num2;

if (resta > 0){
    alert("El resultado es: " + resta);
    alert("Es mayor a 0");
    let Impar = resta % 2; 
if (Impar === 0){
    alert("Es par");
} 
else{
    alert("No es par");
} 
}
else{
    alert("Es menor o igual a 0")
} 

