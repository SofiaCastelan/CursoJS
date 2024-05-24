function agregarTarea() {

    //value es obtener el valor
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    //validamos que no este vacio 
    if (nuevaTareaTexto === "" ){
        alert("Por favor ingresa una tarea");
        return;
    }

    //Crear elemento en la lista
    let nuevaTarea = document.createElement("li");

    //obtener o asignar el valor de texto dentro de un dom
    nuevaTarea.textContent = nuevaTareaTexto + " ";


    //colocamos ahora el boton eliminar
    let botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar";

    //al hacer click en el boton tenga una subfuncion
    //remove permite eliminar algun elemento del DOM
    botonEliminar.onclick = function() { nuevaTarea.remove();}

    //asignamos el boton eliminar a la lista que se crea

    nuevaTarea.appendChild(botonEliminar);


    //agregar el elemento de la lista al darle click
    //en agregar
    document.getElementById("listaTarea").appendChild(nuevaTarea);

    //cuando termine de agregar todo
    //limpie el cuadro de texto
    //cuando agregue tarea
    document.getElementById("listaTareas").value = "";

}