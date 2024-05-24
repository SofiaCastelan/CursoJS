//colocar un nuevo elemento
console.log("colocar un nuevo elemento");
let frutas = ["kiwui", "banana"];
frutas.push("manzana");
console.log(frutas)
console.log("--------------------------------");

//borrar el ultimo elemento
console.log("borrar el ultimo elemento");
frutas.pop();
console.log(frutas);
console.log("--------------------------------");

//borrar el primer elemento
console.log("borrar el primer elemento");
frutas.shift();
console.log(frutas);
console.log("--------------------------------");

//agregar un nuevo elemento
console.log("agregar un nuevo elemento");
frutas.unshift("cerezo")
console.log(frutas);
console.log("--------------------------------");

//filtrar
//=> indica que va a filtrar
//includes (que incluya)
console.log("filtrar");
let frutasConA = frutas.filter(fruta => fruta.includes("a"));
console.log(frutasConA);
console.log("--------------------------------");


//concatenar
console.log("concatenar");
let verduras = ["brocoli", "jitomate"];
let verduras2 = ["espinaca", "tomate"];

let todasLasVerduras = verduras.concat(verduras2);
console.log(todasLasVerduras);
console.log("--------------------------------");


//revertir
console.log("revertir");
todasLasVerduras.reverse();
console.log(todasLasVerduras);
console.log("--------------------------------");


//Ordenar alfabeticamente
console.log("ordenar alfabeticamente");
todasLasVerduras.sort();
console.log(todasLasVerduras);
console.log("--------------------------------");

