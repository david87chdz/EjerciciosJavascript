//EJERCICIO mostrar la tabla del numero que llega por parametro
/*  Realizado
const tableOfNumber = (num) =>{
    for (let i=0; i<=10; i++){
        console.log(num + "x" + i + " " + num * i);
    }
}

tableOfNumber(3); */

/* 
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


 isPalindrome('Asa') */
/* 
 //EJERCICIO pasar una oracion y una palabra, devolver cuantas veces aparece esa palabra en la oracion
const findWord = (sentence, word) => {
   const arrSentence = sentence.split(' ')
   let count = 0
   for (let wor of arrSentence){
      if( wor == word){
         count++
      }
   }
   console.log(count)
   }

   findWord("la vaca la caca", "vaca"
   )

 */

/*    
//EJERCICIO recibir una cadena y devolverla al reves pero sin usar reverse, ni split 

const sentenceReverse = (sentence) =>{
   let reverse = ''
   for (let i=sentence.length-1; i>=0; i-- ){
      reverse+=sentence[i]
   }
   console.log(reverse)
}

sentenceReverse('la vaca lola') */

//EJERCICIO pasar un numero a la funcion y hacer un cuadrado de * que sea num de ancho y num de alto con el medio vacio


const drawSquare = (num) => {
   for(let i=0; i< num ; i++){
      for (let j=0; j<num ; j++){
         console.log('*')
      }
   }
}

drawSquare(4)