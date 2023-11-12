//EJERCICIO mostrar la tabla del numero que llega por parametro

// function multiplicar(num){
//     console.log(`Esta es la tabla del ${num}`);
//     for(let i = 1; i <= 10; i++){
//         console.log(`${i}  X  ${num}   =   ${i*num}` );
//     }
// }
// multiplicar(5);


//EJERCICIO comprobar si una cadena de texto es palindromo o no
// function isPalindromo(element){
//     let new_word = [...element].reverse().join('');
//     if(element === new_word){
//         console.log(`${element} is palindromo`);
//     }else{
//         console.log(`${element} isn't palindromo`);
//     } 
// }
// isPalindromo('bob');


//EJERCICIO pasar una oracion y una palabra, devolver cuantas veces aparece esa palabra en la oracion
// one my way 
// const searchWords = (my_string, my_word) => {
//     let count = 0;
//     let new_string = my_string.replace(/[!¡¿?()"",.;_-]/gi, '').split(' ');
//     let word = my_word.toLowerCase();

//     new_string.forEach(item => {
//         if(item.toLowerCase() == word){
//             count++
//         }
//     });
//     console.log(`la palabra se repite ${count} veces`);
// }
// searchWords('hola? hola hola hola susana', 'hola');



//EJERCICIO recibir una cadena y devolverla al reves pero sin usar reverse, ni split 

// my way 
// function returnChain(chain){
//     let new_chain = '';
//     let my_array = [];
//     for(letter of chain){
//         my_array.push(letter);
//     }
//     for(let i = my_array.length -1; i >= 0; i--){
//         new_chain += my_array[i];
//     }
//     console.log(new_chain);
// }
// returnChain('manriquez');

// second way 
// function returnChain(chain){

//     let new_chain = '';
//     for(letter of chain){
//         new_chain = letter + new_chain;
//     }

//     return new_chain;
// }
// console.log(returnChain('manriquez'));

// third way NOW using javascript methods
// function returnChain(chain){
//     return chain.split('').reverse().join('');
// }
// console.log(returnChain('hola'));


// EJERCICIO cual es el X% de X numero ?
// function getPercentaje(percentaje, num){
//     let resultado = percentaje / 100 * num;
//     return resultado;
// }
// console.log(getPercentaje(43, 897));

// second way 
// function getPercentaje(percentaje, num){
//     let result = (num * (percentaje/100));
//     let rta = `The ${percentaje}% of ${num} is ${result}`;
//     return rta;
// }
// console.log(getPercentaje(43, 897));


//EJERCICIO pasar un numero a la funcion y hacer un cuadrado de * que sea num de ancho y num de alto con el medio vacio

// function techo_piso(num){
//     let resultado = '';

//     for(let i = 0; i < num; i++){
//         resultado += '*';
//     }

//     return resultado;
// } 

// function dibujar(num){
//     let dibujo = techo_piso(num) + '\n';
//     let contenido = '';

//     for(let a = 0; a < (num-2); a++){
//         contenido = '*';

//         for(let x = 0; x < (num-2); x++){
//             contenido += ' ';
//         }

//         contenido += '*' + '\n';
//         dibujo += contenido;
//     }
//     dibujo += techo_piso(num);
//     return dibujo;
// }
// console.log(dibujar(10));


// EJERCICIO recibir 2 numeros y devolver cuantos numeros impares hay entre ellos

// function ContarImpares( num1, num2 ){
//     let impares = [];
//     let resultado;
//     if( num1 === num2 ){
//         resultado = 'Los numeros son iguales';
//     }else if( num1 < num2 ){
//         for( let i = num1; i <= num2; i++ ){
//             if( i % 2 == 1 ){
//                 impares.push(i);
//             }
//         }
//         resultado = `Del ${num1} al ${num2} hay ${impares.length} impares`;
//     }else if( num1 > num2 ){
//         for( let i = num2; i <= num1; i++ ){
//             if( i % 2 == 1 ){
//                 impares.push(i);
//             }
//         }
//         resultado = `Del ${num2} al ${num1} hay ${impares.length} impares`;
//     }else{
//         resultado = 'Por favor introduce dos numeros';
//     }
//     return resultado;
// }
// console.log( ContarImpares(1, 10) );


// EJERCICIO Recibir un numero entero, darlo vuelta y devolverlo
// function girarNumero (num){
//     let convertNum = num.toString();
//     return parseInt(convertNum.split('').reverse().join('')) * Math.sign(num);
// }
// console.log(girarNumero(-107));

// EJERCICIO recibir 2 array y devolver 1 con los elementos comunes entre los dos (y que no esten repetidos)
// function getNewArray(array1, array2){
//     let resultado = array1.filter(num => {return array2.includes(num)});
//     return resultado; 
// }
// console.log(getNewArray([1,2,3,4,5,6], [6,4,5]));


// EJERCICIO recibir un numero y formar una escalera con esa cantidad de escalones [-]
// [-]
// [-][-]
// [-][-][-]
// function armarEscalera(num){
//     let escalon = '[-]'
//     let escalera = '';
//     for(let i = 1; i <= num; i++){
//         escalera += escalon+'\n';
//         escalon += '[-]';
//     }
//     return escalera;
// }
// console.log(armarEscalera(10));

// EJERCICIO recibir dos paramentros, una oracion y una busqueda, la busqueda encontrarla en el texto y reemplazar por [-CENCURADO-]
// Si no llega algun parametro mostrar mensajes diferentes

// const buscar_reemplazar = ( texto, busqueda ) => {
//     let resultado;
//     if(!texto){
//         console.log('Debes pasar un texto para leer');
//         return;
//     }
//     if(!busqueda){
//         console.log('por favor pasa el parametro de busqueda');
//         return;
//     }
//     if(texto.includes(busqueda)){
//         resultado = texto.split(' ');
//         for(let i = 0; i <= resultado.length; i++){
//             if(resultado[i] == busqueda){
//                 resultado[i] = '[-CENSURADO-]';
//             }
//         }
//         return resultado.join(' ');
//     }
// }
// console.log(buscar_reemplazar('hola susana te estamos llamando, hola', 'hola'));

// second way 
// function censurado(texto = false, busqueda =  false){
//     let resultado = '';
//     if(!texto && !busqueda){
//         resultado = 'no puedes leer el texto y la busqueda';
//         return resultado;
//     }else if(texto && !busqueda){
//         resultado = 'no puedes leer la busqueda';
//         return resultado;
//     }else if(!texto && busqueda){
//         resultado = 'no puedes leer el texto';
//         return resultado;
//     }else if(texto && busqueda){
//         resultado = texto.replace(new RegExp(busqueda, 'gi'), '[-CENSURADO-]');
//         return resultado;
//     }
// }
// console.log(censurado('hola, susana te dije hola! hola', 'hola'));


// EJERCICIO recibir un numero y devolver hasta el numero 0 pero yendo de 8 en 8
// function ocho_en_ocho(num){
//     let resultado = '';
//     if(typeof(num) == 'number'){
//         if(num < 8){
//             resultado = 'por favor retorna un numero que sea mayor o igual a 8';
//             return resultado;
//         }else{
//             for(let i = num; i >= 0; i--){
//                 resultado += 'n° ' + i + '\n';
//                 i = i - 7;
//             }
//             return resultado;
//         }   
//     }else{
//         resultado = 'porfavor debes introducir un numero';
//         return resultado;
//     }
// }
// console.log(ocho_en_ocho(100));

// second way 
// EJERCICIO recibir un numero y devolver hasta el numero 0 pero yendo de 8 en 8
// function ocho_en_ocho(num){
//     let resultado = '';
//     while( num > 0 ){
//         resultado += `n° ${num} \n`;
//         num -= 8;
//     }

//     resultado += 'FIN';
//     return resultado;
// }
// console.log(ocho_en_ocho(100));

// EJERCICIO recibir un array y un numero, dado ese numero crear arrays dentro del array con la longitud del numero que nos llego
// ejemplo mifuncion([1,2,3,4,5,6,7], 2) -> resultado [[1,2,3], [4,5,6], [7]];

// function crearSubArrays(myArray, num) {
//     let new_array = [];
//     for (item of myArray) {
//         let ultimo = new_array[new_array.length-1];
//         if(!ultimo || ultimo.length === num){
//             new_array.push([item]);
//         }else{
//             ultimo.push(item);
//         }   
//     }
//     return new_array;
// }
// console.log(crearSubArrays([1,2,3,4,5,6,7], 2));

// EJERCICIO recibir un string y un numero, ese string repetirlo las veces que el numero indeique 
// function repeatSring( string, number){
//     let new_chain = '';
//     for( let i = 1; i <= number; i++){
//         new_chain += string + ' ';
//     }
//     return new_chain;
// }
// console.log(repeatSring('Facundo', 4));


// EJERCICIO recibir un texto y devolver que elemento se repite mas veces
// function encontrarMayorRepetido(texto){
//     let myArray = texto.split('');
//     let mapa = {};
//     console.log(myArray);
//     for( item of myArray){
//         if(!mapa.item){
//             mapa += JSON.parse(item = 1) ;
//         }
//         if(mapa.item){
//             mapa.item+1;
//         }
//     }
//     return mapa;
// }

// console.log(encontrarMayorRepetido('holasusanajaja'));


// EJERCICIO recibir una cadena de texto y devolver cuantas vocales tiene 
// function devolverVocales(texto){
//     let contador = 0;
//     let arrayLeters = texto.toLowerCase().split('');
    
//     for(let i = 0; i<= arrayLeters.length; i++){
//         if(arrayLeters[i] == 'a' || arrayLeters[i] == 'e' || arrayLeters[i] == 'i' || arrayLeters[i] == 'o' || arrayLeters[i] === 'u'){
//             contador += 1;
//         }
//     }
//     return contador;
// }
// console.log(devolverVocales('lamentooo'));

// second way 
// function vocales(texto){
//     // g = global   i = indistintamente si son mayusculas o minisculas   // aqui adentro estan las coincidencias que quiero encontrar
//     let coincidencias = texto.match(/[aeiou]/gi);
//     return coincidencias ? coincidencias.length : 0;
// }
// console.log(vocales('facu'));


// haz un listado de cuantas veces aparecen los regalos en la carta y no cuentes los que tienen un _
// const carta = 'bici coche balón _playstation bici coche peluche';
// function listaRegalos(cadena){
//     let contador = {};
//     let arrayItems = cadena.split(' ');

//     for (let i = 0; i < arrayItems.length; i++) {
//         if( !contador[arrayItems[i]] && !arrayItems[i].includes('_') ){
//             contador[arrayItems[i]] = 1;
//         }else if( contador[arrayItems[i]] && !arrayItems[i].includes('_') ){
//             contador[arrayItems[i]] += 1;
//         }
//     }

//     return contador;
// }
// console.log(listaRegalos(carta));


// MANERAS DE USAR FILTER EN JAVASCRIPT 
// manera 1
/*
let employees = [
    {
        nombre: 'David',
        edad: 39,
        cargo: 'frontend'
    },
    {
        nombre: 'Hernam',
        edad: 30,
        cargo: 'backend'
    },
    {
        nombre: 'Florencia',
        edad: 25,
        cargo: 'frontend'
    },
    {
        nombre: 'Miguel',
        edad: 45,
        cargo: 'jefe'
    },
    {
        nombre: 'Manuel',
        edad: 29,
        cargo: 'backend'
    }
];
let filtrados = employees.filter( item => item.edad >= 30);
console.log(filtrados);

// manera 2
function muyGrande(element){
    return element >=10;
}
var numFiltrados = [10, 20, 25, 15, 9, 8, 6, 11].filter(muyGrande);
console.log(numFiltrados);
*/









