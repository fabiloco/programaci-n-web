/*Strings*/

let cadena = "Hola mundo";

/*PROPIEDADES
lenght -> devuelve la longitud de la cadena
*/

console.log(cadena.length);

/*METODOS
Todos los metodos devuelven una cadena nueva, la cadena original no será modificada

toUpperCase() -> devuelve la cadena a mayúsculas
*/

console.log(cadena.toUpperCase());

/*
toLowerCase() -> devuelve la cadena a minusculas
*/

console.log(cadena.toLowerCase());

/*
indexOf("cadena") -> busca en la cadena el parametro 
cadena que se le pase y devuelve su posición
*/

console.log(cadena.indexOf("a"));

/*
replace("cadena") -> busca en la cadena el parametro 
cadena que se le pase y lo remplaza por el otro parametro cadena
*/

console.log(cadena.replace("mundo","Sebas"));

/*
devuelve la cadena desde la posición que le demos como parametro hasta la 
segunda posición que le demos como parametro
*/

console.log(cadena.substring(3));
console.log(cadena.substring(3, 7));

/*
devuelve la cadena desde la posición que le demos como parametro hasta la 
segunda posición que le demos como parametro, todo esto de forma inversa con
valores negativos
*/

console.log(cadena.slice(-3));
console.log(cadena.slice(3)); 
console.log(cadena.slice(0,-2)); 

/*
Borra los espacios y los enters innecesarios de la cadena 
*/

let cadena2 = "       Hola amigos, estoy aprendiendo JavaScript       ";

console.log(cadena2.trim());


/*
StartsWith("cadena", index);
comprueba si la cadena empieza con el valor que le demos (y la posición)
*/

console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("h"));

console.log(cadena.startsWith("a",3));


/*
endsWith("cadena", longitud);
comprueba si la cadena termina con el valor que le demos (y la posición)
*/

console.log(cadena.endsWith("o"));
console.log(cadena.endsWith("O"));

console.log(cadena.endsWith("a", 4));


/*
includes(valor);
igual que indexOf, pero devuelve en true o false
*/

console.log(cadena.includes("H"));

console.log(cadena.includes("a",2));


/*
repeat(valor);
repite el string el número de veces que le indiquiemos.
*/

let cadena3 = "hola ";

console.log(cadena3.repeat(3));



/* Template Strings */

let nombre = "Fabián";
let apellido = "Sánchez";
let edad = 20;

console.log("Hola " + nombre + " " + apellido + ", tienes " + edad + " años.");

console.log(`hola ${nombre} ${apellido}. Tienes ${edad} años.`);

/*
    Documentación de JavaScript:
    https://www.w3schools.com/js/default.asp
*/
