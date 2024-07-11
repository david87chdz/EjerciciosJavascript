//EJERCICIO mostrar la tabla del numero que llega por parametro
/*  Realizado
const tableOfNumber = (num) =>{
    for (let i=0; i<=10; i++){
        console.log(num + "x" + i + " " + num * i);
    }
}

tableOfNumber(3); */


//EJERCICIO comprobar si una cadena de texto es palindromo o no

const isPalindrome = (word) => {
 let reverseWord = word.toLowerCase().split('')
 console.log(reverseWord)
 let aux = []
 for (let i=reverseWord.length-1; i>=0; i--) {
    aux.push(reverseWord[i])
 }
 console.log(aux)
 reverseWord= aux.join('')
 if(reverseWord===word.toLowerCase()){
    console.log('Iguales')
 }else{
    console.log('Distintas')
 }
    
 }


 isPalindrome('Asa')