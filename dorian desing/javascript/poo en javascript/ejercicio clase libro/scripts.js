class Book{
    constructor(title, author, age, gender){
        this.title = title;
        this.author = author;
        this.age = age;
        this.gender = gender;
    }

    getInfo(){
        return this.title + " by " + this.author + ", age " + this.age + " and gender: " + this.gender;
    }
}
let books = new Array(2);


for(let i = 0;i < books.length; i++){
    
    let title = prompt("Introduzca el titulo del libro " + (i+1));
    while(title == ""){
        alert("Este valor debe ser rellenado.");
        title = prompt("Introduzca el titulo del libro " + (i+1));
    }
    let author = prompt("Introduzca el autor del libro " + (i+1)).charAt(0).toUpperCase();
    while(author == ""){
        alert("Este valor debe ser rellenado.");
        author = prompt("Introduzca el autor del libro " + (i+1));
    }
    let age = Number.parseInt(prompt("Introduzca el año del libro " + (i+1)));
    
    while(!Number.isInteger(age) && age > 999){
        alert("El año del libro debe ser un número de 4 digitos.");
        age = Number.parseInt(prompt("Introduzca el año del libro " + (i+1)));
    }
    let gender = prompt("Introduzca el genero del libro " + (i+1));
    while(gender == "" || !(gender == "aventuras" || gender == "terror" || gender == "fantasía")){
        alert("Este valor debe ser rellenado con un genero entre aventuras, terror o fantasía.");
        gender = prompt("Introduzca el genero del libro " + (i+1));
    }
    
    books[i] = new Book(title, author, age, gender);
}

function showBooks(){
    let cadena = "";
    for (let i = 0; i < books.length; i++){
        cadena += "" + books[i].getInfo() + "\n";
    }
    return cadena;
}

function showAuthors(){
    let cadena = "--Authors--\n";
    for (let i = 0; i < books.length; i++){
        for (let j = 0; j < books.length; j++){
            if(books[i].author.charCodeAt(0) == (65 + j)){
                cadena += ""+i+".- " + books[i].author + "\n";
            }
        }    
    }
    return cadena;
}

function showGender(){
    let genero = prompt("Introduzca el genero del que quiere sacar información.");
    let cadena = "";
    
    for(const book in books){
        if(book.gender == genero){
            cadena += books[i].getInfo() + "\n";
        }
    }
    return cadena;
}

console.log(showGender());


