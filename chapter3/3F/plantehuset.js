function nickName(){

    let firstPart = ["søte ","stygge ","morsomme ","gale ","slimete "];
    let randomIndex1 = Math.floor(Math.random()*firstPart.length);
    let lastPart = ["ape","troll","søtnos"];
    let randomIndex2 = Math.floor(Math.random()*lastPart.length);

    return firstPart[randomIndex1] + "" + lastPart[randomIndex2];
}

let person = {
    fornavn: "ola",
    etternavn: "hansen",
    kallenavn: nickName()
}

console.log(person.kallenavn);