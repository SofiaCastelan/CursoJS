//Array para los nombres
let nombresPkm = ['Chamander','Pikachu','Balbasaur']

//Matriz para sus habilidades
let habilidades = [
    [80,75,90],//Chamander
    [65,55,50],//Pikachu
    [80,70,65]//Balbasaur
]

//Funcion para que pueda ir a la liga pokemon
//Calcular promedio
function calcularPromHab(habilidades){
    //sumar por cada fila las habilidades para calcular el promedio
    let promedios = [];

    for(let i=0;i<habilidades.length;i++){
        //Obtener la fila
        let fila = habilidades[i];
        //total es como el nombre de una variable que va
        //a estar sumando cada numero que hay en las filas de la matriz
        //por ejemplo total = 80+75+90
        //80 tiene el nombre de habilidad
        //75 tiene nombre de habilidad
        //90 tiene nombre de habilidad
        //ya luego de que les asignamos "nombres"
        //le decimos que se debe de acumular las habilidades en
        //la variable total y que empezara desde el indice 0
        // osea desde 80
        let suma = fila.reduce((total,habilidad)=>total+habilidad,0);
        //calcularemos el promedio de cada fila
        promedios[i]= suma / fila.length;
    }
    return promedios;
}
//Calcular si puede o no participar
function evaluarAptitud(nombresPkm, promedios){
    for (let i = 0; i < promedios.length; i++){
        if(promedios[i] >= 70) {
            console.log("El pokemon " + nombresPkm[i] + " Supera el promedio con: " 
            + promedios[i])
        } else{
            console.log("El pokemon " + nombresPkm[i] + " No supera el promedio con: "
                + promedios[i])
        }
    }
}


//llamar funcion
//crea vector promedios
//pasa por parametros la matriz de habilidades
let promedios = calcularPromHab(habilidades);
evaluarAptitud(nombresPkm, promedios);