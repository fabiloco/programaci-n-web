

let names = ['paco', 'Jóse', "Paula" , "Sebastián", "María"];

for(let name of names){
    if(name == 'Paula'){
        continue;
    }
    console.log(name);
}

for(let index in names){
    console.log(index);
}