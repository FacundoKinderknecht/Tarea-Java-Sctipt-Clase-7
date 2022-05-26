

console.log("")
console.log("Ejercicios Funciones")



console.log("")
console.log("Ejercicio 6-a y 6-2")

let suma = (a, b) => {
    if (typeof (a) === "number" && typeof (b) === "number") {
        if (Number.isInteger(a, b)) {
            return a + b
        } else {
            return console.log("Uno de los numeros no es un entero")
        }
    }else{
        return console.log("Uno de los caracteres no es un numero")
    }
}
console.log(suma(1, 2))




console.log("")
console.log("Ejercicio 6-b")

console.log(suma("a", 2))




console.log("")
console.log("Ejercicio 6-c")

console.log(suma(1.2, 2))


console.log("")
console.log("-------------------------------------------------------------")
