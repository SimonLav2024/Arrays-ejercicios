// Ejercicio: Manejo de objetos en JavaScript

// 1. Creamos un objeto que representa a un estudiante
let estudiante = {
    nombre: "Ana",
    edad: 29,
    carrera: "Biologia",
    asignaturas: ["Cianecia de la Naturaleza", "Libro gordo de Petete", "Algo de animales y plantas", "Algo de moleculas y mitocondrias"],
    activo: true
}

// 2. Accedemos y mostramos propiedades del objeto
console.log("Nombre", estudiante.nombre);
console.log("Edad", estudiante.edad);

// 3. Modificamos una propiedad
estudiante.edad = 23;
console.log(estudiante);

// 4. Añadimos una nueva propiedad
estudiante.semestre = 6;
console.log(estudiante);

// 5. Recorremos las propiedades del objeto con for...in
for(let propiedad in estudiante){
    console.log(propiedad + ": " + estudiante[propiedad]);
    console.log(`${propiedad}: ${estudiante[propiedad]}`);
}// los dos console.log son lo mismo y te muestran lo mismo que son las propiedades del objeto pero la sintaxis entre ellos es diferente

// 6. Creamos un método en el objeto
estudiante.presentarse = function(){
    console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.carrera}`);
}

// 7. Llamamos al método
console.log("Presentacion del estudiante: ");estudiante.presentarse();

// 8. Creamos un array de objetos
let estudiantes = [
    {nombre: "Sandra", edad: 29, carrera: "Ciencias politicas"},
    {nombre: "Ana", edad: 29, carrera: "Biologia"},
    {nombre: "Farid", edad: 14, carrera: "de obstaculos"}
];

// 9. Recorremos el array de objetos
console.log("Lista de estudiantes");
estudiantes.forEach((estudiante, indice) => {
    console.log(`Estudiante ${indice + 1}: ${estudiante.nombre}, ${estudiante.edad} años, ${estudiante.carrera}`);
});


// 10. Buscamos un estudiante por su nombre
let estudianteAna = estudiantes.find(estudiante => estudiante.nombre === "Ana");
console.log("Estudiante encontrado", estudianteAna);

//Hacer una funcion que busque un objeto en el arrays cuyo nombre coincida con el que le pasemos por paramentros
function buscarEst(nombre){
    let estudianteEncontrado = estudiantes .find(estudiante => estudiante.nombre === nombre);
    return estudianteEncontrado;
}
let estudianteEncontrado = buscarEst("Ana");
if(estudianteEncontrado != undefined){
    console.log("Estudiante encontrado:", estudianteEncontrado);
}else{console.log("El estudiante no existe");}
console.log("Estudiante encontrado de verdad: ", estudianteEncontrado);


