//EJERCICIO mostrar la tabla del numero que llega por parametro
let num = (num) =>{
    for(let i=0; i<=10; i++ ){
        console.log(num+"x"+i+" "+(num*i));
    }
};
num(5);

//EJERCICIO comprobar si una cadena de texto es palindromo o no

let palabra= (palabra) =>{
    let vuelta= [...palabra].reverse().join('');
    if(palabra==vuelta){
        console.log("Es un palindromo");
    }else{
        console.log("No es un palindromo");
    }
}

palabra("al");

function isPalindromo(element){
    let new_word = [...element].reverse().join('');
    if(element === new_word){
        console.log(`${element} is palindromo`);
    }else{
        console.log(`${element} isn't palindromo`);
    } 
}
isPalindromo('bob');

//EJERCICIO pasar una oracion y una palabra, devolver cuantas veces aparece esa palabra en la oracion
let vasdf=(oracion, palabra) =>{
    
}