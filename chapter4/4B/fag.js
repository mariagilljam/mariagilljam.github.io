let array = [
    {
        'subject':'matchematics',
        'averageScore': 78.5,
        'numberOfStudents': 50,
        'color': '#FF7D4A'
    },
    {
        'subject':'sience',
        'averageScore': 82,
        'numberOfStudents': 45,
        'color': '#29ABCA'
    },
    {
        'subject':'english',
        'averageScore': 75,
        'numberOfStudents': 40,
        'color': '#F4B400'
    },
    {
        'subject':'history',
        'averageScore': 72,
        'numberOfStudents': 35,
        'color': '#563D7C'
    },
    {
        'subject':'art',
        'averageScore': 80,
        'numberOfStudents': 30,
        'color': '#9C27b0'
    }
]

console.log(array);


for(let i = 0; i<array.length; i++){
    pEl = document.createElement("p");
    pEl.innerText = array[i].subject;
    document.querySelector("body").appendChild(pEl);
}
