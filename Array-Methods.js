const players = [
    { name: "Hero" },
    { name: "Warrior" },
    { name: "Mage" }
];

const getPlayerNames = (playerArray) => {
    return playerArray.map(player => player.name);
};

const playerNames = getPlayerNames(players);
console.log(playerNames);

const playersLevel = [
    { level: 1 },
    { level: 2 },
    { level: 3 }
];

const filterPlayersByLevel = (playerArray, minLevel) => {
    return playerArray.filter(player => player.level >= minLevel);
};

const minLevel = 2;
const filteredPlayers1 = filterPlayersByLevel(playersLevel, minLevel);
console.log(filteredPlayers1);

const playersHealth = [
    { health: 100 },
    { health: 120 },
    { health: 80 }
];

const calculateTotalHealth = (playerArray) => {
    let totalHealth = 0; 
    for (let i = 0; i < playerArray.length; i++) {
        totalHealth += playerArray[i].health; 
    }
    return totalHealth; 
};

const totalHealth = calculateTotalHealth(playersHealth);
console.log(totalHealth);

const Players = [
    { name: "Hero", level: 1 },
    { name: "Warrior", level: 2 }
];

function combinePlayerNamesAndLevels(playerArray) {
    let combinedInfo = []; 
    for (let i = 0; i < playerArray.length; i++) {
        let player = playerArray[i];
        combinedInfo.push(player.name + " - Level " + player.level); 
    }
    return combinedInfo; 
}

const combinedInfo = combinePlayerNamesAndLevels(Players);
console.log(combinedInfo);

let playersH = [
    { name: "Hero", health: 100 },
    { name: "Warrior", health: 120 }
];

function updatePlayerHealth(playerArray, newHealth, playerName) {
    for (let i = 0; i < playerArray.length; i++) {
        if (playerArray[i].name === playerName) {
            playerArray[i].health = newHealth;
            break;
        }
    }
    return playerArray;
}

let updatedPlayers = updatePlayerHealth(playersH, 150, "Hero");
console.log(updatedPlayers);

let playersLocation = [
    { location: "forest" },
    { location: "mountain" },
    { location: "castle" }
];

function filterPlayersByLocation(playerArray, location) {
    let filteredPlayers = [];
    for (let i = 0; i < playerArray.length; i++) {
        if (playerArray[i].location === location) {
            filteredPlayers.push(playerArray[i]);
        }
    }
    return filteredPlayers;
}

let filteredPlayers = filterPlayersByLocation(playersLocation, "forest");
console.log(filteredPlayers);



function getAveragePlayerLevel(playerArray) {
    var totalLevel = playerArray.reduce(function(acc, player) {
        return acc + player.level;
    }, 0);
    return totalLevel / playerArray.length;
}



let averageLevel = getAveragePlayerLevel(playersLevel);
console.log(averageLevel);
function sortPlayersByHealth(playerArray) {
    playerArray.sort(function(a, b) {
        return b.health - a.health;
    });
    return playerArray;
}



let sortedPlayers = sortPlayersByHealth(playersHealth);
console.log(sortedPlayers);

var playersinventory = [
    { inventory: ["sword", "health potion"] },
    { inventory: ["axe", "shield"] }
];
function retrievePlayerInventories(playerArray) {
    var inventories = []; 
    for (var i = 0; i < playerArray.length; i++) {
        inventories.push(playerArray[i].inventory); 
    }
    return inventories; 
}



var inventories = retrievePlayerInventories(playersinventory);
console.log(inventories);