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


//EJERCICIO pasar una oracion y una palabra, devolver cuantas veces aparece esa palabra en la oracion
let vasdf=(oracion, palabra) =>{
    let dividida= oracion.split(" ");
    let contador=0;
    for(let pala of dividida){
        console.log(pala);
        if(pala===palabra){
            contador++;
        }
    }
    console.log("la palabra "+palabra+ " aparece "+contador+" veces");
};

vasdf('hola? hola hola hola susana', 'hola'); //mejorar las que no coge como la primeroa y la ultima

//EJERCICIO recibir una cadena y devolverla al reves pero sin usar reverse, ni split 

let cadenaInv=(cadena)=>{
    let inversa= "";
    for( let i=cadena.length; i>=0; i--){
        inversa+=cadena.charAt(i);
    }
    console.log(inversa);
};

cadenaInv("hola pepe");

// EJERCICIO cual es el X% de X numero ?
let porcentaje= (porcentaje, x)=>{
    let porCiento= porcentaje /100 *x;
    return "El "+porcentaje+ " por ciento de " +x+" es igual a "+porCiento;
}

let a = porcentaje(20, 100);
console.log(a);

//EJERCICIO pasar un numero a la funcion y hacer un cuadrado de * que sea num de ancho y num de alto con el medio vacio

// EJERCICIO recibir 2 numeros y devolver cuantos numeros impares hay entre ellos

let x=3;
let y=9;
let mayor=y;
let menor=x;
let contador=0;
let funcion=(x,y)=>{
    if(x>y){
        mayor=x;
        menor=y;
    }
    for(let i=menor+1;i<mayor;i++){
        if(i%2!=0){
            contador++;
        }
    }
    console.log("Hay "+contador+" números impares");
}

funcion(8,29);


