// Ejercicio: Recorrer arrays con for y forEach en JavaScript

// 1. Creamos un array de números
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);

// 2. Recorremos el array con un bucle for
for(let i = 0; i < numeros.length; i++){console.log(`Indice: ${i}: ${numeros[i]}`);}

// 3. Recorremos el array con forEach
numeros.forEach(numero => {console.log(numeros);});
numeros.forEach((numero, indice) => {console.log(`Indice ${indice}: ${numero}`);}); //los dos son lo mismo pero hecho de otra forma, ademas en la consola se ve diferente

// 4. Calculamos la suma de los números usando for
let sumaFor = 0;
for(let i = 0; i < numeros.length; i++){
    sumaFor = sumaFor + numeros[i];
}
console.log(`La suma es: ${sumaFor}`);

//multiplicamos usando for 
let multFor = 1;
for(let i = 0; i < numeros.length; i++){
    multFor = multFor * numeros[i];
}
console.log(`La multiplicacion es: ${multFor}`);

// 5. Calculamos la suma de los números usando forEach
let sumaForeach = 0;
numeros.forEach(numero => {sumaForeach+= numero;});
console.log(`La suma con forEach es: ${sumaForeach}`);

// 6. Creamos un nuevo array con los números pares usando for
let numPares = [];
for(let i = 0; i < numeros.length; i++){
    if((numeros[i] % 2) === 0)//comprobar si numeros[i] es un numero par y si es par se añade 
    {numPares.push(numeros[i]);}
}
console.log("Numeros pares utilizando for: ", numPares);

// 7. Creamos un nuevo array con los números pares usando forEach
let numerosPares = [];
numeros.forEach(numero => {
    if((numero % 2) === 0){
        numerosPares.push(numero);
    }
});
console.log("Numeros pares usando el forEach" ,numerosPares);
