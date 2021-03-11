let numbers = [1,2,3,4,5];

/*
    Arrays - propiedades
        .length - devuelve el número el posiciones que contiene el array
*/

console.log(numbers.length);

/*
    Arrays - métodos
        Array.isArray(variable a evaluar) - devuelve true si la variable es un array 
*/

let number = 4;

console.log(Array.isArray(number));
console.log(Array.isArray(numbers));

/*
    Eliminar elementos
        .shift() elimina el primer elemento del array y devuelve ese elemento
        .pop() elimina el ultimo elemento del array y devuelve ese elemento
*/

console.log(numbers);
console.log("el elemento eliminado fue: " + numbers.shift());
console.log(numbers);
console.log("el elemento eliminado fue: " + numbers.pop());
console.log(numbers);

numbers = [1,2,3,4,5];

/*
    Añadir elementos
        .push(element1, element2, ...) - añade uno o más elementos al final de array y devuelve la nueva longitud.
        .unshift(element1, element2, ...) - Añade uno más elementos al comiezo del array y devuelve la nueva longitud.
*/

console.log(numbers);
console.log("el nuevo tamaño es : " + numbers.push(6,7));
console.log(numbers);

console.log(numbers);
console.log("el nuevo tamaño es : " + numbers.unshift(-1,0));
console.log(numbers);

/*
    .indexOf() - devuelve el primer indice del elemento que coicnida con el valor especificiado, o -1 si ninguno es encontrado.
*/

console.log(numbers.indexOf(-2));

/*
    .lastIndexOf() - devuelve el ultimo indice del elemento que coicnida con el valor especificiado, o -1 si ninguno es encontrado.
*/

console.log(numbers.lastIndexOf(-2));

/*
    .reverse() - Invierte el orden de los elemtnos del array.
*/

console.log(numbers);
numbers.reverse();
console.log(numbers);

/*
    .join('separador') - devuelve un string con el separador que indiquemos, por defecto son comas.
*/

console.log(numbers);
console.log(numbers.join('-'));

/*
    .splice(a,b,items ) - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
*/

console.log(numbers);
numbers.splice(2,3,3,2,1  );
console.log(numbers);

/*
    .slice(a,b,items ) - extrae elementos de un array desde el índice a hasta el índice b. Si no existe b lo hace desde a hasta el
    final, si no existe ni a ni b una copia del original
*/

let copiaNumbers = numbers.slice();
console.log("Esto es una copia de numbers: " + copiaNumbers);

copiaNumbers = numbers.slice(2,4);
console.log("Esto es numbers de la posición 2 hasta la 4: " + copiaNumbers);