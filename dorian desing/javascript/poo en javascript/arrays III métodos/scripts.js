let word = 'Hola mundo';

/* 
    --Array métodos importantes
*/

console.log(Array.from(word));  //from convierte en array un elemento iterable, como un string o un node

console.log(word.split(' '));

let letters = ["d","a","m","f"];
let numbers = [1,8,100,3,300];

console.log(letters.sort());    //Ordena caracteres en un array dependiendo del valor unicode del elemento.
console.log(numbers.sort());

console.log(numbers.sort((a,b)=>a-b)); //De esta forma se ordena el array para números.

/*
    function menorMayor(a,b){
        if (a-b < 0) return -1;
        if (a-b > 0) return 1;
        if (a == b) return 0;
    }
 */

/*
    function mayorMenor(a,b){
        if (b-a < 0) return -1;
        if (b-a > 0) return 1;
        if (b == a) return 0;
    }
 */

const numbers2 = [12,25,47,84,94];

numbers2.forEach((number, index)=>console.log("El número " + number + " esta en la pos " + index));

const words = ["HTML","CSS","JavaScript","PHP"];

console.log(words.some((word) => word.length > 3));
console.log(words.every((word) => word.length > 3));



const numbers3 = numbers2.map((number) => number*2);

console.log(numbers3);


const numbers4 = numbers2.filter((number) => number>80);

console.log(numbers4);

let numbers5 = [1,2,3,4,5];

console.log(numbers5.reduce((a,b) => a + b));

const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: true
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    }
]

const usersOnline = users.reduce((cont, users) => {
    if(users.onlie) cont++;
    return cont;
},0);

console.log("Hay " + usersOnline + " Usuarios conectados.");