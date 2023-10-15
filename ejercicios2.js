// ejercicio 17 del curso buzz - lightyear imitando al ejercicio fizzbuzz
// const buzzlightyear = (num) => {
//     for( let i = 0; i <= num; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             console.log('buzzlightyear');
//         }else if(i % 3 == 0){
//             console.log('buzz');
//         }else if(i % 5 == 0){
//             console.log('ligthyear');
//         }else{
//             console.log(i);
//         }
//     }
// }
// buzzlightyear(50);

//ejercicio 18, dado un numero mostrar todos sus numeros divisores, ejemplo
// mostrarDivisores(20) -> 1, 2, 4, 5, 10, 20

// function esDivisor (numero, posibleDivisor) {
//     if(numero % posibleDivisor == 0){
//         return posibleDivisor;
//     }
//     return false;
// }

// function mostrarDivisores(numero){
//     for(let i = 0; i <= numero; i++){
//         let divisor = esDivisor(numero, i);

//         if(divisor) console.log(divisor);
//     }
// }
// mostrarDivisores(20);

// ejercicio 19, dado un array de peliculas con las propiedades, titulo, director y vista
// devolver un array mostrando las peliculas que ya estan vistas y las que faltan ver

// const peliculas = [
//     {
//         titulo: 'Harry Potter',
//         director: 'Walt Disney',
//         vista: false
//     },
//     {
//         titulo: 'RYF8',
//         director: 'Toretto',
//         vista: true
//     },
//     {
//         titulo: 'Rick y Morty',
//         director: 'desconocido',
//         vista: true
//     },{
//         titulo: 'Crash',
//         director: 'desconocido',
//         vista: false
//     }
// ];

// function verPelis(pelis){

//     pelis.map(peli => {
//         { peli.vista ?
//             console.log(`Has visto ${peli.titulo}`)
//         :
//             console.log(`No has visto ${peli.titulo}`);
//         }
//     });
    
// }

// verPelis(peliculas);

// EJERCICIO 20 crear funcion que recibe 2 palabras, comprobas si son anagramas o no, devolver true o false

function limpiartexto(texto){
    return texto
            .replace(/[^\w]/gi, '') //limpio signos
            .toLowerCase()          //formateo minuscula
            .split('')              //separo
            .sort()                 //ordeno alfabeticamente
            .join('')               //junto
}

function anagramas(palabra1, palabra2){

    let pal1 = limpiartexto(palabra1);
    let pal2 = limpiartexto(palabra2);

    if( pal1 === pal2 ){
        return true
    }else{
        return false
    } 
    
}

console.log(anagramas('zsergio??)', 'RiesGo!'));    

