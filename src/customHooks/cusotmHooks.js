import React, { useState } from "react";


export default function useLocalStorage () {
    // Creamos tanto parseTask como storageTask para no tener problemas con el scope
    // parseTask se inicia como una variable vacia
    let parseTask;
    // Creamos una variable que solicita la informacion dentro de localStorage
    const storageTask = localStorage.getItem("Task");
    // Con este condicional podemos dar un valor inicial [] que se usara en el useState
    // Si la informacion almacenada en storageTask es null, undefined o false se asigna un []
    // De lo contario se mostrara el valor almacenado en localStorage
    if(!storageTask){
      parseTask = [];
    }else {
      parseTask = JSON.parse(storageTask);
    }
  
    const [arrTask, setArrTask] = useState(parseTask);
    // En las siguientes 2 lineas se vuelve arrTask en una cadena de strings
    // Luego se actualiza el valor en el useState
    // Por tanto la logica es que si parseTask esta vacio se retorna un [] para el useState, al agregar tareas se actualiza el arrTask lo que permite guardarlo en el localStorage y a su vez masntiene un estado inicial con la informacion agregada
    const stringnifyTask = JSON.stringify(arrTask);
    localStorage.setItem("Task", stringnifyTask);
  
    return {arrTask, setArrTask};
  }