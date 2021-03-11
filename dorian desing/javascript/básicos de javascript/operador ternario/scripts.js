/*
    --OPERADOR TERNARIO--

    (condicion) ? true : false

    (condicion) ?
        (primera sentencia,
        segunda sentencia)
        :
        (primera sentencia,
        segunda sentencia)
*/

let num = 3;

(num%2==0) ? console.log(num + " es par.") : console.log(num + " es impar.");

(num%2==0) ? (
        console.log(num + " es par."),
        console.log(num + " es par.")
    ) 
    : 
    (
        console.log(num + " es impar."),
        console.log(num + " es impar.")
    );