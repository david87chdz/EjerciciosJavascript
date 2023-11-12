//EJERCICIO mostrar la tabla del numero que llega por parametro
let num = (num) => {
  for (let i = 0; i <= 10; i++) {
    console.log(num + "x" + i + " " + num * i);
  }
};
num(5);

//EJERCICIO comprobar si una cadena de texto es palindromo o no

let palabra = (palabra) => {
  let vuelta = [...palabra].reverse().join("");
  if (palabra == vuelta) {
    console.log("Es un palindromo");
  } else {
    console.log("No es un palindromo");
  }
};

palabra("al");

//EJERCICIO pasar una oracion y una palabra, devolver cuantas veces aparece esa palabra en la oracion
let vasdf = (oracion, palabra) => {
  let dividida = oracion.split(" ");
  let contador = 0;
  for (let pala of dividida) {
    console.log(pala);
    if (pala === palabra) {
      contador++;
    }
  }
  console.log("la palabra " + palabra + " aparece " + contador + " veces");
};

vasdf("hola? hola hola hola susana", "hola"); //mejorar las que no coge como la primeroa y la ultima

//EJERCICIO recibir una cadena y devolverla al reves pero sin usar reverse, ni split

let cadenaInv = (cadena) => {
  let inversa = "";
  for (let i = cadena.length; i >= 0; i--) {
    inversa += cadena.charAt(i);
  }
  console.log(inversa);
};

cadenaInv("hola pepe");

// EJERCICIO cual es el X% de X numero ?
let porcentaje = (porcentaje, x) => {
  let porCiento = (porcentaje / 100) * x;
  return (
    "El " + porcentaje + " por ciento de " + x + " es igual a " + porCiento
  );
};

let a = porcentaje(20, 100);
console.log(a);

//EJERCICIO pasar un numero a la funcion y hacer un cuadrado de * que sea num de ancho y num de alto con el medio vacio

// EJERCICIO recibir 2 numeros y devolver cuantos numeros impares hay entre ellos

let x = 3;
let y = 9;
let mayor = y;
let menor = x;
let contador = 0;
let funcion = (x, y) => {
  if (x > y) {
    mayor = x;
    menor = y;
  }
  for (let i = menor + 1; i < mayor; i++) {
    if (i % 2 != 0) {
      contador++;
    }
  }
  console.log("Hay " + contador + " números impares");
};

funcion(8, 29);

// EJERCICIO Recibir un numero entero, darlo vuelta y devolverlo

let f10 = (numero) => {
  return parseInt(numero.toString().split("").reverse().join(""))
};

let vueltaNum=f10(135)
console.log(vueltaNum);
console.log(typeof vueltaNum);

// EJERCICIO recibir 2 array y devolver 1 con los elementos comunes entre los dos (y que no esten repetidos)

function getNewArray(array1, array2){
       let resultado = array1.filter(num => {return array2.includes(num)});
       return resultado; 
}


// EJERCICIO recibir un numero y formar una escalera con esa cantidad de escalones [-]
// [-]
// [-][-]
// [-][-][-]

let escalera=(num)=>{
  let escalon="[-]";
  let escalera = '';
  for(let i=1;i<=num;i++){
    escalera += escalon+'\n';
    escalon += '[-]';
  }
  return escalera;
}
console.log(escalera(15));

// EJERCICIO recibir dos paramentros, una oracion y una busqueda, la busqueda encontrarla en el texto y reemplazar por [-CENCURADO-]
// Si no llega algun parametro mostrar mensajes diferentes

function censurado(oracion, busqueda){
  if(oracion==""){
    return "Se necesita una oración";
  }
  if(busqueda==""){
    return "Se necesita una busqueda";
  }

  if(oracion.includes(busqueda)){
    return oracion.replace(busqueda,"[-CENCURADO-]");
  }else{
    return "La buqueda no se encuentra en la oración";
  }
};

console.log(censurado("La luna azul", "luna"));

// EJERCICIO recibir un numero y devolver hasta el numero 0 pero yendo de 8 en 8

function menosOcho (numero){
   if(numero<8){
    return 0;
   }
   else{
    for(let i=numero;i>0;i-8){
      if(i<0){
        return 0;
      }else{
        console.log(i);
      }
    }
   }
};

console.log(menosOcho(56));