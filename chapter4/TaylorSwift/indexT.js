let songs=[
    {title: "our song",
    album: "Taylor Swift",
    streams: 290751397,
    ranking: 5,
    year: 2006-10-24
    },
    {title: "picture to burn",
    album: "Taylor Swift",
    streams: 168691840,
    ranking: 10,
    year: 2006-10-24
    },
    {title: "you all over me",
    album: "fearless tv",
    streams: 10022297,
    ranking: 4,
    year: 2021-4-9
    },
    {title: "forever and always",
    album: "fearless tv",
    streams: 93432866,
    ranking: 1,
    year: 2021-4-9
    },
    {title: "all to well ten minute version",
    album: "red tv",
    streams: 709561399,
    ranking: 11,
    year: 2021-11-12
    },
    {title: "forever winter",
    album: "red tv",
    streams: 79586094,
    ranking: 16,
    year: 2021-11-12
    },
    {title: "maroon",
    album: "midnights",
    streams: 392581818,
    ranking: 14,
    year: 2022-10-21
    },
    {title: "snow on the beach",
    album: "midnights",
    streams: 381640777,
    ranking: 12,
    year: 2022-10-21
    },
    {title: "dear john",
    album: "speak now tv",
    streams: 74955012,
    ranking: 6,
    year: 2023-7-7
    },
    {title: "the story of us",
    album: "speak now tv",
    streams: 67240484,
    ranking: 13,
    year: 2023-7-7
    },
    {title: "clean",
    album: "1989 tv",
    streams: 47312032,
    ranking: 17,
    year: 2023-10-27
    },
    {title: "is it over now?",
    album: "1989 tv",
    streams: 172790835,
    ranking: 7,
    year: 2023-10-27
    },
    {title: "getaway car",
    album: "reputation",
    streams: 547298582,
    ranking: 18,
    year: 2017-10-10
    },
    {title: "dress",
    album: "reputation",
    streams: 264418509,
    ranking: 15,
    year: 2017-10-10
    },
    {title: "the archer",
    album: "lover",
    streams: 321384695,
    ranking: 8,
    year: 2019-8-23
    },
    {title: "lover",
    album: "lover",
    streams: 295383741,
    ranking: 20,
    year: 2019-8-23
    },
    {title: "mirrorball",
    album: "folklore",
    streams: 348482280,
    ranking: 19,
    year: 2020-7-24
    },
    {title: "cardigan",
    album: "folklore",
    streams: 1048679234,
    ranking: 3,
    year: 2020-7-24
    },
    {title: "tolerate it",
    album: "evermore",
    streams: 243214604,
    ranking: 2,
    year: 2020-12-11
    },
    {title: "marjorie",
    album: "evermore",
    streams: 181744172,
    ranking: 9,
    year: 2020-12-11
    },
]
// Hent referanser til input-elementene og knappen
let nameInput = document.getElementById("name");
let albumSelect = document.getElementById("album");
let rankingInput = document.getElementById("ranking");
let streamsInput = document.getElementById("streams");
let yearInput = document.getElementById("year");
let addButton = document.querySelector(".addSongWrapper button");

    // funksjonen kjører når brukeren trykker på knappen
    addButton.addEventListener("click", function() {
      // Hent verdier fra input-elementene
      let name = nameInput.value;
      let album = albumSelect.value;
      let ranking = parseInt(rankingInput.value);
      let streams = parseInt(streamsInput.value);
      let year = yearInput.value;
      //legger det til på sangen
      songs.push({
        title: name,
        album: album,
        streams: streams,
        ranking: ranking,
        year: year
      })
    
    showSongs();
});
function showSongs(){
    document.querySelector("ul").innerHTML="";

    for(let i = 0; i<songs.length; i++){
        let liEl = document.createElement("li");

        let imageContainer = document.createElement("img");
        imageContainer.setAttribute("id","imageContainer");
        imageContainer.style.width = "90px";
        liEl.appendChild(imageContainer);

        let album = songs[i].album;
    
        if(album == "Taylor Swift") {
            liEl.style.backgroundColor = "rgb(18, 197, 152)";
            imageContainer.src = "bilder/taylor swift.png";
        }
        else if(album == "fearless tv"){
            liEl.style.backgroundColor = "rgb(255, 255, 137)"
            imageContainer.src = "bilder/fearless.png";
        }
        else if(album == "red tv"){
            liEl.style.backgroundColor = "rgb(193, 87, 87)";
            imageContainer.src = "bilder/red.png";
        }
        else if(album == "speak now tv"){
            liEl.style.backgroundColor = "rgb(119, 1, 178)"
            imageContainer.src = "bilder/speak now.png";
        }
        else if(album == "1989 tv"){
            liEl.style.backgroundColor = "rgb(102, 173, 211)";
            imageContainer.src = "bilder/1989.png";
        }
        else if(album == "reputation"){
            liEl.style.backgroundColor = "rgb(3,3,3)"
            imageContainer.src = "bilder/reputation.png";
        }
        else if(album == "lover"){
            liEl.style.backgroundColor = "pink"
            imageContainer.src = "bilder/lover.png";
        }
        else if(album == "folklore"){
            liEl.style.backgroundColor = "grey"
            imageContainer.src = "bilder/folklore.png";
        }
        else if(album == "evermore"){
            liEl.style.backgroundColor = "rgb(131, 77, 77)"
            imageContainer.src = "bilder/evermore.png";
        }
        else if(album == "midnights"){
            liEl.style.backgroundColor = "rgb(56, 23, 122)"
            imageContainer.src = "bilder/midnights.png";
        }
        else{
            liEl.style.backgroundColor = "white";
        }

        let songTitle = document.createElement("span");
        songTitle.setAttribute("id","songTitle");
        songTitle.innerText = songs[i].title;

        liEl.appendChild(songTitle);
        document.querySelector("ul").appendChild(liEl);

        // Lager en knapp vi kan bruke til å slette elementet.
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "X";
        deleteBtn.id = i;   // Bruker id'en til å identifisere hvilken knapp det trykkes på!
        deleteBtn.addEventListener("click", removeFromList);   // Viktig å gjøre at knappen vi lagde faktisk kaller funksjonen.
 
        
        liEl.appendChild(deleteBtn);
    }
    
function removeFromList(e) {
    let id = e.target.id;

    // Fjern det relevante elementet fra list
    songs.splice(id, 1);

    showSongs();
}
}
showSongs();

let BTN = document.getElementById("radio1");
let btn = document.getElementById("radio2");

BTN.addEventListener("change", sortByRanking);
btn.addEventListener("change",sortByName);

function compareName(a,b){
    if(a.title<b.title){
        return -1;
    }
    return 1;
}
function sortByName(){
    songs.sort(compareName);
    showSongs();
}
function compareRanking(a,b){
    if(a.ranking<b.ranking){
        return -1;
    }
    return 1;
}
function sortByRanking(){
    songs.sort(compareRanking);
    showSongs();
}

function assignRanking(newRanking) {
    // Sjekk om den nye rankingen allerede eksisterer
    const existingSong = songs.find(song => song.ranking === newRanking);

    if (existingSong) {
        // Hvis den eksisterer, flytt alle sanger etter den nedover
        const index = songs.indexOf(existingSong);
        songs.splice(index, 1); // Fjern den eksisterende sangen midlertidig
        songs.forEach(song => {
            if (song.ranking >= newRanking) {
                song.ranking++; // Flytt nedover alle sanger med høyere eller lik ranking
            }
        });
        existingSong.ranking = newRanking; // Sett rankingen til den eksisterende sangen til den nye rankingen
        songs.splice(index, 0, existingSong); // Legg til den eksisterende sangen på riktig sted
    } else {
        // Hvis den nye rankingen ikke eksisterer, bare legg til sangen med den rankingen
        songs.push({
            title: name,
            album: album,
            streams: streams,
            ranking: newRanking,
            year: year
        });
    }

    showSongs(); // Oppdater visningen
}