class Persona{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;

        this.datos = "me llamo " + this.name + " " + this.surname + " y tengo " + this.age + " años.";
    }

    saludar(){
        return "Hola, " + this.datos;
    }
}

const Juan = new Persona("Juan" , "Guzman", 26);
const Sebastian = new Persona("Sebastian" , "Ricardo", 17);

console.log(Juan.saludar());
console.log(Sebastian.saludar()); 