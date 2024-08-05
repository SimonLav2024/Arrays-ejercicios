// Ejercicio: Manejo básico de arrays en JavaScript

// 1. Crea un array llamado 'frutas' con 5 nombres de frutas
let frutas = ["manzana","pera","fresa","sandia","cereza"];
console.log(frutas);

// 2. Imprime el array completo
console.log("Array completo:", frutas);

// 3. Imprime la longitud del array
console.log("Longitud del Array;", frutas.length);

// 4. Accede e imprime el tercer elemento del array
console.log("Tercer elemento: ", frutas[2]);

// 5. Añade una fruta al final del array usando push()
frutas.push("melocoton");
console.log("Array despues del push: ", frutas);

// 6. Elimina el último elemento del array usando pop()
let frutasEliminada = frutas.pop();
console.log("Fruta eliminada: ", frutasEliminada);
console.log("Array despues del pop", frutas);

// 7. Añade una fruta al principio del array usando unshift()
frutas.unshift("kiwi");
console.log("Array despues del unshift: ", frutas);

// 8. Elimina el primer elemento del array usando shift()
frutas.shift();
console.log("Array despues del shift: ", frutas);