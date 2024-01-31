const nameInputElement = document.getElementById("navn");
const BTN = document.getElementById("knapp");

BTN.addEventListener("click", ShowDiscriminant);

function ShowDiscriminant(){

    let nameString = nameInputElement.value;

    let greetingString = "fakk deg " + nameString + " !";

    console.log(greetingString);

}