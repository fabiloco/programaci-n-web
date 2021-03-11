const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura','Diego',"pepe","rosa","tomas"]
}

console.log(person['name']);

for(const key in person){
    console.log(person[key]);
}

for(const son of person.sons){
    console.log(son)
}

console.log("hola " + person.name + " , tienes " + person.age + " años y además tienes " + person.sons.length + " hijos. Tus hijos se llaman " + person.sons.join(", ") + ".");