
console.log("")
console.log("Ejercicios For")




console.log("")
console.log("Ejercicio 5-a")
let arrayPalabras = ["Hola","como","estas","Bien","vos?"];

for (let index = 0; index < arrayPalabras.length; index++) {
  console.log(arrayPalabras[index]);
}



console.log("")
console.log("Ejercicio 5-b")
for (let index = 0; index < arrayPalabras.length; index++) {
    
    let palabra = arrayPalabras[index];
    palabra = palabra.substring(0,1).toUpperCase() + palabra.substring(1);
    console.log(palabra) 
}




console.log("")
console.log("Ejercicio 5-c")

let arrayVacio = []

for (let index = 0; index < 10; index++) {3
    arrayVacio.push(index)
}

console.log(arrayVacio);

console.log("")
console.log("-------------------------------------------------------------")
