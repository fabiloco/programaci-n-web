/*
    OBJETO MATH

    es un objeto  que se utiliza para operaciones matemáticas
    más específicas.

    *Es un objeto estatico, esto significa que tenemos que usar su nombre para utilizarlo

    propiedades:

    Math.E - Math.Pi

    Métodos

    Math.abs(x) Devuelve el valor absoluto de x
    Math.ceil(x) devuelve el entero más grande mayor o igual que un número
    Math.floor(x) devuelve el entero más pequeño menro o igual que un número
    Math.pow(x,y) devuelve la potencia de x elevado a y
    Math.sqrt(x) devuelve la raiz cuadrada de x
    Math.random() genera un número pseudoaleatorio entre 0 y 1
    Math.round(x) devuelve el valor de un número redondeado al entero más cercano
    Math.sign(x) devuelve el signo de la x, que indica si x es positivo, negativo o cero

*/

console.log("Euler: " +Math.E);
console.log("Pi: " + Math.PI);

let num = 5;

console.log(Math.abs(num));

console.log(Math.ceil(5.3));

console.log(Math.floor(5.3));

console.log("5 a la 2 = "+Math.pow(5,2));

console.log(Math.random());

// console.log(Math.random() * (max - min) +min);

console.log(Math.sign(-5))

console.log(Math.sqrt(25))