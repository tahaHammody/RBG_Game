//1
let weaponInventory = ["Sword", "Bow", "Magic Staff"];
let weaponToCheck = "Sword";

if (weaponInventory.includes(weaponToCheck)) {
  console.log(`${weaponToCheck} exists in the weapon inventory.`);
} else {
  console.log(`${weaponToCheck} does not exist in the weapon inventory.`);
}
//2
let questNames = ["Dragon's Lair", "The Lost Artifact", "Rescue the Princess"];
let reversedQuestNames = questNames.reverse();

console.log(reversedQuestNames);
//3
let monsterTypes = ["Dragon", "Goblin", "Orc"];
let monsterString = monsterTypes.join(", ");

console.log(monsterString);
//4 
let monsterToCheck = "Orc";

if (monsterTypes.includes(monsterToCheck)) {
  console.log(`${monsterToCheck} is in the list of monster types.`);
} else {
  console.log(`${monsterToCheck} is not in the list of monster types.`);
}
//5
let specificQuest = "Rescue the Princess";

let index = questNames.indexOf(specificQuest);

if (index !== -1) {
  console.log(`${specificQuest} found at index ${index}.`);
} else {
  console.log("Quest not found.");
}
//6 
let monsterList = ["Dragon", "Orc", "Goblin"];

monsterList.pop(); 

console.log(monsterList);
//7 
let newMonster = "Dragon";

monsterList.unshift(newMonster); 

console.log(monsterList); 
//8 
let removedMonster = monsterList.shift(); 

console.log(removedMonster); 
//9
let heroList1 = ["Archer", "Mage"];
let heroList2 = ["Warrior", "Healer"];

let allHeroes = heroList1.concat(heroList2); 

console.log(allHeroes); 
//10 
questNames.sort(); 

console.log(questNames); 
//11
let spellsString = "Fireball,Heal,Ice Lance";
let spellsArray = spellsString.split(","); 

console.log(spellsArray);
//12 
let n = 2;

let upcomingQuests = questNames.slice(0, n); 

console.log(upcomingQuests);
//13 

monsterList.length = 0; 

console.log(monsterList);
//14 
let inventory = ["Sword", "Shield"];
let newWeapon = "Bow";

inventory.push(newWeapon); 

console.log(inventory);
//15 

let soldItem = inventory.pop(); 

console.log(`Sold item: ${soldItem}`); 
//16 
let quests = ["Dragon's Lair", "Rescue the Princess"];
let newQuest = "Defeat the Goblin King";

quests.unshift(newQuest); 

console.log(quests);
//17 
let Quests = ["Dragon's Lair", "Rescue the Princess", "Defeat the Goblin King"];

quests.sort(); 

console.log(quests);
//18 
let questToCheck = "Rescue the Princess";

if (quests.includes(questToCheck)) {
  console.log(`${questToCheck} is in the list of quests.`);
} else {
  console.log(`${questToCheck} is not in the list of quests.`);
}
//19
let scores = [30, 80, 60, 90];

scores.sort((a, b) => b - a); 

console.log(scores);




