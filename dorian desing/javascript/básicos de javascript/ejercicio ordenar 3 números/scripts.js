let num = -5;

/* condicionales simples */

if(num > 0) console.log(num+" es mayor que 0");

/* condicionales compuestos */

if(num > 0){
    console.log(num+" es mayor que 0")
}else{
    console.log(num+" es menor que 0")
}

/* condicionales multiples */

if(num > 0){
    console.log(num+" es mayor que 0")
}else if (num<0){
    console.log(num+" es menor que 0")
}else{
    console.log(num+" es igual a 0")
}


/*
    --OPERADORES LOGICOS--

    && -> and
    || -> or

*/

let num1 = 0;
let num2 = 5;

if(num1>0 && num2>0){
    console.log(num1 + " y " + num2 + " son mayores a 0.");
}

if(num1>0 || num2>0){
    console.log(num1 + " o " + num2 + " son mayores a 0.");
}




// if(num1 > 0){
//     if (num2 > 0){
//         console.log(num1 + " y " + num2 + " son mayores a cero.");
//     }else if (num2 < 0){
//         console.log(num1 + " es mayor a 0 y  " + num2 + " es menor a cero.");
//     }else{
//         console.log(num1 + " es mayor a 0 y  " + num2 + " es igual a cero.");
//     }
// }

// else if(num2 > 0){
//     if (num2 > 0){
//         console.log(num1 + " y " + num2 + " son mayores a cero.");
//     }else if (num2 < 0){
//         console.log(num1 + " es mayor a 0 y  " + num2 + " es menor a cero.");
//     }else{
//         console.log(num1 + " es mayor a 0 y  " + num2 + " es igual a cero.");
//     }
// }

let word = "hola";

if(word.length > 4){
    console.log(word + " tiene más de 4 letras");
}else if (word.length < 4){
    console.log(word + " tiene menos de 4 letras");
}else{
    console.log(word + " tiene 4 letras");
}




