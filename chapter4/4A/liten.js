const gridContainer = document.getElementById('grid-container');
const teams = ['blue','red'];
let currentTeamIndex = 0;

function createGridItems(){
    for(let i =0;i<9;i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.dataset.team = teams[currentTeamIndex];
        gridContainer.appendChild(gridItem);
        gridItem.addEventListener("click",handleGridItemClicked);
    }
}

function handleGridItemClicked(event) {
    const clickedItem = event.target;
    const currentTeam = clickedItem.dataset.team;

    if (currentTeam === teams[0]){
        clickedItem.dataset.team = teams[1];
        clickedItem.style.backgroundColor = teams[1];
    } else{
        clickedItem.dataset.team = teams[0];
        clickedItem.style.backgroundColor = teams[0];
    }

    currentTeamIndex = (currentTeamIndex + 1)% teams.length;
}

createGridItems();