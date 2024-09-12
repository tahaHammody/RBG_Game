let characterStats = [];

// 1
function initializeCharacterStats() {
  characterStats = [];
}

// 2
function addCharacterStat(characterName, strength) {
  characterStats.push([characterName, strength]);
}

// 3
function findCharacterStrength(characterName) {
  for (let i = 0; i < characterStats.length; i++) {
    if (characterStats[i][0] === characterName) {
      console.log("Strength of " + characterName + ": " + characterStats[i][1]);
      return; 
    }
  }
  console.log("Character was not found.");
}

// 4
function updateCharacterStrength(characterName, newStrength) {
  for (let i = 0; i < characterStats.length; i++) {
    if (characterStats[i][0] === characterName) {
      characterStats[i][1] = newStrength;
      console.log("Updated: " + characterName + " now has strength " + newStrength + ".");
      return; 
    }
  }
  console.log("Character was not found.");
}

// 5
function removeCharacterStat(characterName) {
  for (let i = 0; i < characterStats.length; i++) {
    if (characterStats[i][0] === characterName) {
      characterStats.splice(i, 1);
      console.log("Removed: " + characterName + " from stats.");
      return; 
    }
  }
  console.log("Character was not found.");
}

// 6
function listCharacters() {
  if (characterStats.length === 0) {
    console.log("No characters found.");
  } else {
    for (let i = 0; i < characterStats.length; i++) {
      console.log(characterStats[i][0] + " - " + characterStats[i][1]);
    }
  }
}

// 7
function strongestCharacter() {
  if (characterStats.length === 0) {
    console.log("No characters found.");
    return;
  }

  let strongest = characterStats[0];
  for (let i = 1; i < characterStats.length; i++) {
    if (characterStats[i][1] > strongest[1]) {
      strongest = characterStats[i];
    }
  }
  console.log("The strongest character is " + strongest[0] + " with strength " + strongest[1] + ".");
}

// Pure
// 1
function calculateAverageRating(ratings) {
  let total = 0;
  for (let i = 0; i < ratings.length; i++) {
    total += ratings[i];
  }
  let average = total / ratings.length;
  return Math.round(average * 10) / 10; 
}

// 2
function extractDeveloperNames(titles) {
  let developers = [];
  for (let i = 0; i < titles.length; i++) {
    let startIndex = titles[i].indexOf("Developed by ");
    
    if (startIndex !== -1) {
      let developerName = titles[i].substring(startIndex + 13);
      developers.push(developerName);
    }
  }
  return developers;
}

// 3
function containsWordInTitle(title, keyword) {
  return title.toLowerCase().includes(keyword.toLowerCase());
}

// 4
function allTitlesStartWithSameLetter(titles) {
  if (titles.length === 0) return false;
  let firstLetter = titles[0][0].toLowerCase();
  for (let i = 1; i < titles.length; i++) {
    if (titles[i][0].toLowerCase() !== firstLetter) {
      return false;
    }
  }
  return true;
}

// 5
function concatenateGenres(genres) {
  return genres.join(", ");
}

// 6
function countBattlesInRange(xpPoints, lowerBound, upperBound) {
  let count = 0;
  for (let i = 0; i < xpPoints.length; i++) {
    if (xpPoints[i] >= lowerBound && xpPoints[i] <= upperBound) {
      count++;
    }
  }
  return count;
}

// 7
function findGamesByDeveloper(gameTitles, developers, targetDeveloper) {
  let result = [];
  for (let i = 0; i < gameTitles.length; i++) {
    if (developers[i] === targetDeveloper) {
      result.push(gameTitles[i]);
    }
  }
  return result;
}

// 8
function capitalizeFirstLetter(titles) {
  let capitalizedTitles = [];
  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];
    let capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
    capitalizedTitles.push(capitalizedTitle);
  }
  return capitalizedTitles;
}

// 9
function uniqueXP(xpArray) {
  let result = [];
  
  for (let i = 0; i < xpArray.length; i++) {
    let xp = xpArray[i];
    if (result.indexOf(xp) === -1) {
      result.push(xp);
    }
  }
  
  return result;
}

// 10
function sortTitlesAlphabetically(titles) {
  return [...titles].sort();
}

// 11
function filterXPByCriteria(xpArray, greaterThan, lessThan) {
  let result = [];
  
  for (let i = 0; i < xpArray.length; i++) {
    let xp = xpArray[i];
    if (xp > greaterThan && xp < lessThan) {
      result.push(xp);
    }
  }
  
  return result;
}
