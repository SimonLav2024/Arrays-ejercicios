// Ejercicio: Uso del método find en JavaScript

// 1. Creamos un array de objetos que representan libros
const libros = [
    {id: 1, titulo: "El Señor de los Anillos", autor: "Tolkien", anyo: 1939},
    {id: 2, titulo: "Crepusculo", autor: "Harry Potter", anyo: 1945},
    {id: 3, titulo: "La sirenita", autor: "James Cameron", anyo: 1492},
    {id: 4, titulo: "Dragon Ball", autor: "Federico Garcia Lorca", anyo: 1345},
    {id: 5, titulo: "Las aventiras de Willy Wonka", autor: "Miguel de Unamuno", anyo: 1109}
]

// 2. Función para encontrar un libro por su ID
function buscarID(id){
   return libros.find(libro => libro.id === id);
}
console.log("Libros encontrados por ID", buscarID(1)); //le pones el id que quieres buscar entre parentesis y ya te lo encuentra

// 3. Función para encontrar un libro por su título (ignorando mayúsculas/minúsculas)
function buscarNombre(titulo){
    return libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
}
console.log("Libros encontrados por el titulo:", buscarNombre("crepusculo"));// se pone entr parentesis el nombre del titulo que quieres buscar

// 4. Función para encontrar el primer libro de un autor específico
function buscarAutor(autor){
    return libros.find(libro => libro.autor.toLowerCase().includes(autor) === autor.toLowerCase().includes(autor));
}
console.log("Libro encontrado por autor:", buscarAutor("cameron"));

// 5. Función para encontrar el primer libro publicado después de un año específico
function buscarporAnyo(anyo){
    return libros.find(libro => libro.anyo > anyo);
}
console.log("Libro encontrado despues de 1100:", buscarporAnyo(1100));

// 6. Función para encontrar un libro que cumpla múltiples criterios
function encontrarLibrosCriterios(criterios){
    return libros.find(libro => {
        for(let propiedad in criterios){
            if(libro[propiedad] !== criterios[propiedad]){return false;}
        }
        return true;
    });
}
let criterios = {autor: "Harry Potter", anyo: 1945};
let libroEncontrado = encontrarLibrosCriterios(criterios);

console.log("Libro encontrado con ciertos criterios:", encontrarLibrosCriterios(criterios));

// 7. Intentar encontrar un libro que no existe

