//let antallBoller = 12;
//antallBoller -= 4;
//antallBoller += 24;
//let bollerPerPerson = antallBoller/4

//document.write(bollerPerPerson)

//document.write(" "+8+"4");
//document.write(" "+8*"4");
//document.write(" "+8/"4");
//document.write(" "+8-"4");

//let a = 3;
//let b = 7;

//console.log(a*b);
//console.log(a*b-a);
//console.log((a-1)*b);
//console.log((b+1)*a);
//console.log(a-b);



// Definer verdier for antallTimer, antallMinutter og antallSekunder
//let antallTimer = 3; // Eksempel: 2 timer
//let antallMinutter = 40; // Eksempel: 30 minutter
//let antallSekunder = 20; // Eksempel: 45 sekunder

// Regn om til totalt antall sekunder
//let totaltSekunder = (antallTimer * 3600) + (antallMinutter * 60) + //antallSekunder;

// Skriv ut resultatet
//document.write("  "+"Totalt antall sekunder: " + totaltSekunder);


// Angi antall sekunder
//let totalSekunder = 5790;

// Beregn antall timer, minutter og gjenværende sekunder
//let timer = Math.floor(totalSekunder / 3600);
//let gjenvaerendeSekunder = totalSekunder % 3600;
//let minutter = Math.floor(gjenvaerendeSekunder / 60);
//let sekunder = gjenvaerendeSekunder % 60;

// Skriv ut resultatet
//console.log(totalSekunder + " sekunder tilsvarer " + timer + " timer, " + minutter + " minutter, og " + sekunder + " sekunder.");


//let alfabet = "abcdefghijklmnopqrstuvwxyzæøå";

//let ordetHallo = alfabet[7] + alfabet[0] + alfabet[11] + alfabet[11] + alfabet[14];
//let ordetHALLO = ordetHallo.toUpperCase();


//document.write("  "+ ordetHALLO);

//let j = 12;
//let i = 11;

//if (j>i){
//    document.write(" " + j + " er større enn " + i);
//}
//else if(j<i){
//    document.write(" " + i + " er større enn " + j);
//}
//else{
//    document.write(" " + j + " og " + i + " er like store");
//}

//let j = 12;
//let i = 14;
//let k = 10;

//if(j>i && j>k){
 //   document.write(" " + j + " er størst");
//}
//else if(i>j && i>k){
  //  document.write(" " + i + " er størst")
//}
//else if(k>j && k>i){
  //  document.write(" " + k + " er størst")
//}

//let tall = 9;

//if(tall%2==0){
  //  document.write(" " + tall + " er et partall")
//}
//else{
  //  document.write(" " + tall + " er ikke et partall")
//}

//let i = 1;

//while(i<=10){
  //  let resultat = i*8;
   // console.log(resultat);
    //i++;
//}

//let tall = 0;

//while( tall<=100){
    //    if (tall%10!==0){
      //      console.log(tall);
        //}
        //tall++;
    //}

//for(let i = 0;i<=100;i++){
  //  console.log(i)
//}


//for(let i = 1;i<10;i++){
  //  let resultat = 8*i;
    //console.log(resultat)
//}

//for(let tall = 1; tall<=100;tall++){
        //if (tall%10!==0){
        //    console.log(tall);
        //}
//}

//function arealSirkel(radius){
  //  let areal = Math.PI*radius**2;
    //console.log(areal);
//}
//arealSirkel(24);
//arealSirkel(32);

//function volumKule(radius){
  //  let volum = 4/3*Math.PI*radius**2;
    //console.log(volum);
//}
//volumKule(11);
//volumKule(21);




//function nameAndAge(age,name){
  //  if(age<30){
      //  console.log("hei " + name + " du er ung")
    //}
    //else{
      //  console.log("hei " + name + " du er gammel")
    //}
//}
//nameAndAge(78,"lise");
//nameAndAge(28, "janne");


let tall1=[0,1,2,3,4,5,6,7,8,9,10];


//2 

tall1.forEach(tall1 => {
  if(tall1%2===0){
    console.log(tall1);
  }
})

//oppgave 3 
let tall2 = [2, 4, 6, 8];
console.log(tall1);
//a Fjerner første element (2) med pop() og siste element (8) med shift()
tall2.pop();
tall2.shift();
console.log(tall2);
//b Bruker splice() til å sette inn tallet 5 før posisjon 1
tall2.splice(1, 0, 5);
console.log(tall2);
//c Bruker unshift() og push() til å sette inn 3 foran og 7 bak
tall2.unshift(3);
tall2.push(7);
console.log(tall2);
//d Bruker verdienes posisjoner til å gjøre om tallene 3, 5 og 7 til tekstene "tre", "fem" og "syv" tall[0] = "tre";
tall2.splice(0,0,"tre")
tall2.splice(2,0,"fem");
tall2[1]= 4;
tall2[3]=6;
tall2[4] = "syv";
console.log(tall2);

//oppgave 5

let tall = [1,8,5,-4,-7,0,19,-20,100,3,-9,55,-44,99,-23,44,94,105,-930,-333];

// a 
let storst = tall[0];
for (let i = 0; i < tall.length; i++) {
  if (tall[i] > storst) {
    storst = tall[i];
  }
}
console.log(storst); // Skriver ut: 105

// b
let minst = tall[0];
for (let i = 0; i < tall.length; i++) {
  if (tall[i] < minst) {
    minst = tall[i];
  }
}
console.log(minst); // Skriver ut: -930


//c
console.log(storst-minst);

let sum = 0;

for (let i = 0; i<tall.length;i++){
  sum+=tall[i]
}
let resultat = sum/tall.length

console.log(resultat); //skriver ut -41.85

//oppgave 9

//let gangetabell = [[], [], [], [], [], [], [], [], [], [], []];
   //for (let i = 0; i <= 10; i++) {
     //for (let j = 0; j <= 10; j++) {
       //gangetabell[i][j] = i * j;
     //}
//}
//console.log(gangetabell);

