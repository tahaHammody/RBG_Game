function countPartyMembers(party, index = 0) {
    if (index === party.length) {
        return 0;
    }
    else {
        return 1 + countPartyMembers(party, index + 1);
    }
}

const partyCount = ['Warrior', 'Mage', 'Rogue'];
console.log(countPartyMembers(partyCount));
//2 

function findCharacterByName(party, name) {
    if (party.length === 0) {
        return false;
    }
    for (let i = 0; i < party.length; i++) {
        if (Array.isArray(party[i])) {
            if (findCharacterByName(party[i], name)) {
                return true;
            }
        } else {
            if (party[i] === name) {
                return true;
            }
        }
    }
    return false;
}

const partyArray = [['Warrior', 'Mage'], ['Rogue', 'Healer']];
console.log(findCharacterByName(partyArray, 'Mage'));  
//3 
function sumDamage(damages) {
    if (damages.length === 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < damages.length; i++) {
        if (Array.isArray(damages[i])) {
            total += sumDamage(damages[i]);
        } else {
            total += damages[i];
        }
    }
    return total;
}

const damageValues = [50, 444,75, 100];
console.log(sumDamage(damageValues));  
//4 
function findStrongestAttack(attacks) {
    let maxAttack = 0;
    for (let i = 0; i < attacks.length; i++) {
        if (Array.isArray(attacks[i])) {
            const maxInSubArray = findStrongestAttack(attacks[i]);
            maxAttack = maxAttack > maxInSubArray ? maxAttack : maxInSubArray;
        } else {
            maxAttack = maxAttack > attacks[i] ? maxAttack : attacks[i];
        }
    }
    return maxAttack;
}

const attackValues = [50, 333,75, 100];
console.log(findStrongestAttack(attackValues));  
//5 
function calculateAverageHealth(healths, total = 0, count = 0, index = 0) {
    if (index === healths.length) {
        return count > 0 ? total / count : 0;
    }
    if (Array.isArray(healths[index])) {
        return calculateAverageHealth(healths[index], total, count, 0);
    } else {
        return calculateAverageHealth(healths, total + healths[index], count + 1, index + 1);
    }
}

const healthValues = [100, 150, 200];
console.log(calculateAverageHealth(healthValues));  

//6 
function listAllInventoryItems(inventory) {
    let allItems = [];
    for (let i = 0; i < inventory.length; i++) {
        if (Array.isArray(inventory[i])) {
            allItems.push(...listAllInventoryItems(inventory[i]));
        } else {
            allItems.push(inventory[i]);
        }
    }
    return allItems;
}

const inventory = [['Sword', 'Shield'], ['Potion', 'Armor'], ['Bow']];
console.log(listAllInventoryItems(inventory));
//7 

function findCharactersByRole(characters, role) {
    let result = [];
    for (let i = 0; i < characters.length; i++) {
        if (Array.isArray(characters[i])) {
            result = result.concat(findCharactersByRole(characters[i], role));
        } else if (characters[i].role === role) {
            result.push(characters[i].name);
        }
    }
    return result;
}

const characterArray = [{name: 'Warrior', role: 'Tank'}, {name: 'Mage', role: 'DPS'}];
console.log(findCharactersByRole(characterArray, 'Tank')); 
//8 

function calculateTotalXP(party) {
    let totalXP = 0;
    for (let i = 0; i < party.length; i++) {
        if (Array.isArray(party[i])) {
            totalXP += calculateTotalXP(party[i]);
        } else {
            totalXP += party[i].xp;
        }
    }
    return totalXP;
}

const party = [{name: 'Warrior', xp: 500}, {name: 'Mage', xp: 300}];
console.log(calculateTotalXP(party));  
 
//9 
function findHighestLevelCharacter(characters) {
    let highestLevelCharacter = null;  
    let highestLevel = -1;  

    for (let i = 0; i < characters.length; i++) {
        if (Array.isArray(characters[i])) {
            const highestFromSubarray = findHighestLevelCharacter(characters[i]);
            if (highestFromSubarray && highestFromSubarray.level > highestLevel) {
                highestLevel = highestFromSubarray.level;
                highestLevelCharacter = highestFromSubarray;
            }
        } else {
            if (characters[i].level > highestLevel) {
                highestLevel = characters[i].level;
                highestLevelCharacter = characters[i];
            }
        }
    }

    return highestLevelCharacter ? highestLevelCharacter.name : null;
}

const charactersArray = [{name: 'Warrior', level: 10}, {name: 'Mage', level: 12}];
console.log(findHighestLevelCharacter(charactersArray)); 
//10 
function countCharactersByRole(characters, role) {
    let count = 0;
    for (let i = 0; i < characters.length; i++) {
        if (Array.isArray(characters[i])) {
            count += countCharactersByRole(characters[i], role);
        } else if (characters[i].role === role) {
            count++;
        }
    }
    return count;
}

const CharacterArray = [{name: 'Warrior', role: 'Tank'}, {name: 'Mage', role: 'DPS'}, {name: 'Rogue', role: 'DPS'}];
console.log(countCharactersByRole(CharacterArray, 'DPS')); 
//11 
function findShortestName(names) {
    let shortestName = null;

    function updateShortest(currentName) {
        if (shortestName === null || currentName.length < shortestName.length) {
            shortestName = currentName;
        }
    }

    for (let i = 0; i < names.length; i++) {
        if (Array.isArray(names[i])) {
            const shortestInSubArray = findShortestName(names[i]);
            updateShortest(shortestInSubArray);
        } else {
            updateShortest(names[i]);
        }
    }
    return shortestName;
}

const names = ['Warrior', 'Mage', 'Rogue'];
console.log(findShortestName(names));  
//12
function filterCharactersByMinimumLevel(characters, minLevel) {
    let result = [];
    for (let i = 0; i < characters.length; i++) {
        if (Array.isArray(characters[i])) {
            result = result.concat(filterCharactersByMinimumLevel(characters[i], minLevel));
        } else if (characters[i].level >= minLevel) {
            result.push(characters[i]);
        }
    }
    return result;
}

const characterArraybyLevels = [{name: 'Warrior', level: 10}, {name: 'Mage', level: 5}];
console.log(filterCharactersByMinimumLevel(characterArraybyLevels, 7));  
//13 
function findCharacterWithMostSkills(characters) {
    let maxSkills = -1;
    let characterWithMostSkills = null;

    for (let i = 0; i < characters.length; i++) {
        if (Array.isArray(characters[i])) {
            let nestedCharacter = findCharacterWithMostSkills(characters[i]);
            if (nestedCharacter && nestedCharacter.skills > maxSkills) {
                maxSkills = nestedCharacter.skills;
                characterWithMostSkills = nestedCharacter;
            }
        } else {
            if (characters[i].skills > maxSkills) {
                maxSkills = characters[i].skills;
                characterWithMostSkills = characters[i];
            }
        }
    }
    return characterWithMostSkills ? characterWithMostSkills.name : null;
}

const characterArraybySkills = [{name: 'Warrior', skills: 3}, {name: 'Mage', skills: 4}, {name: 'Rogue', skills: 2}];
console.log(findCharacterWithMostSkills(characterArraybySkills));
//14 
function flattenPartyInventory(inventory) {
    let flattenedInventory = [];
    for (let i = 0; i < inventory.length; i++) {
        if (Array.isArray(inventory[i])) {
            flattenedInventory.push(...flattenPartyInventory(inventory[i]));
        } else {
            flattenedInventory.push(inventory[i]);
        }
    }
    return flattenedInventory;
}

const inventoryFlattening = [['Sword', 'Shield'], ['Potion', ['Armor']]];
console.log(flattenPartyInventory(inventoryFlattening));  


