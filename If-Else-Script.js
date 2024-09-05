

let playerHealth= 70 ;
let playerGold ; 
let weather = "sunny"; 
let timeOfDay = "day"; 
//1
if (playerHealth > 10) {
    console.log("Player is strong");
} else {
    console.log("Player is weak");
}
//2
if (playerGold >= 1 && playerGold <= 100) {
    console.log("Rich player");
} else {
    console.log("Poor player");
}
//3
if (weather === "sunny") {
    if (timeOfDay === "day") {
        console.log("Continue the adventure");
    } else {
        console.log("Seek shelter");
    }
} else {
    console.log("Seek shelter");
}
//4 
let playerWeapon = "m16"; 
let enemyWeapon = "m16";  
if (playerWeapon === enemyWeapon) {
    console.log("Weapons clashing!");
} else {
    console.log("Advantage");
}
//5

let playerAge = 16; 
if (playerAge >= 13 && playerAge <= 19) {
    console.log("Player is a teenager");
} else {
    console.log("Player is not a teenager");
}
//6 
let gameScore = 75; 

console.log(gameScore >= 50 ? "High Score" : "Low Score");

//7 
let numOfEnemies = 5; 

console.log(numOfEnemies % 2 === 0 ? "Even number of enemies" : "Odd number of enemies");
//8 
let characterAge = 15; 

console.log(
    characterAge < 12 ? "Youngling" :
    characterAge >= 13 && characterAge <= 19 ? "Adolescent" : "Adult"
);
//9
let battleSkill = 80; 

console.log(battleSkill > 70 ? "Skilled warrior" : "Train harder");
//10
let sessionDuration = 120; 

if (sessionDuration < 90) {
    console.log("Short");
} else if (sessionDuration <= 150) {
    console.log("Moderate");
} else {
    console.log("Marathon");
}
//11
let totalPotions = 10;  
let usedPotions = 7;    

if (totalPotions > usedPotions) {
    console.log("Potions available");
} else {
    console.log("Out of potions");
}
//12 
let player_Age = 20;           
let questAgeRestriction = 18; 

if (player_Age >= questAgeRestriction) {
    console.log("Player is eligible for the quest");
} else {
    console.log("Player is not eligible for the quest");
}
//13
let dayOfTheWeek = "Saturday"; 

if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
    console.log("Special event happening!");
} else {
    console.log("Regular gameplay");
}
//14 
let gameSettingYear = 1200; 

if (gameSettingYear >= 900 && gameSettingYear <= 1500) {
    console.log("Medieval era setting");
} else {
    console.log("Different historical era");
}
//15 
let characterClass = "Warrior"; 
let characterLevel = 15;        

if (characterClass === "Warrior" && characterLevel >= 10) {
    console.log("Powerful warrior");
} else {
    console.log("Average character");
}
//16 
let enemyCount = 2;    

if (playerHealth > 50 && enemyCount < 3) {
    console.log("Ready for battle");
} else {
    console.log("Proceed with caution");
}
//17 
let questProgress = 100;  
let questDifficulty = 3;  

if (questProgress === 100 && questDifficulty <= 5) {
    console.log("Quest completed");
} else {
    console.log("Quest in progress");
}

//18 
let inventorySize = 80; 

if (inventorySize >= 90) {
    console.log("Inventory almost full");
} else {
    console.log("Plenty of space in the inventory");
}
