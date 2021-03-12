/*
    --Spread operator (operador de expansión)

    su sintaxis es ...
 */

const numbers = [-12,2,3,23,43,2,3];

console.log(...numbers);

//Enviar elementos de un array a un función

const addNumbers = (a,b,c) => console.log(a+b+c);

addNumbers(1,2,3);

let numbersToAdd = [1,2,3];

addNumbers(...numbersToAdd);

//Añadir un array a otro array
let users = ['Javier,', 'david', "rosa", "Juan", "mercedes"];

let newUsers = ['marta','jaime',"laura"];

users.push(...newUsers);

console.log(users);

//copiar arrays
let arr1 = [1,2,3,4];
let arr2 = arr1;

console.log(arr2);

/*concatenar arrays
    Forma normal
let arr3 = [1,2,3,4];
let arr4 = arr1;

let arrConcat = arr3.concat(arr4);
console.log(arrConcat);
*/

let arr3 = [1,2,3,4];
let arr4 = arr1;

let arrConcat = [...arr3, ...arr4];
console.log(arrConcat);

const restParms = (...numbers) => {
    console.log(numbers);
}

restParms(1,2,3,4,5,6);

//Libreria math

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

//Eliminar elementos duplicados
console.log([...new Set(numbers)]);
