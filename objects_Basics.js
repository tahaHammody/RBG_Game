//1 
let character = {
    name: "Aragorn",
    class: "Ranger",
    level: 20,
    abilities: ["defender", "shooter", "Leadership"],
    stats: {
      strength: 18,
      dexterity: 15,
      intelligence: 14
    },
    getOverallStrength: function() {
      return this.stats.strength + this.stats.dexterity + this.stats.intelligence;
    }
    
  };
  
//2

character.equipment = {
    weapon: "Sword",
    armor: "Leather",
    accessories: ["Ring", "Amulet"]
  };
  console.log(character.abilities[0]); 
  console.log(character["abilities"][0]); 
  console.log(character.equipment.armor); 
  console.log(character["equipment"]["armor"]); 
  
  //3
  character.level = 25;
  character.abilities.push("Stealth");
  delete character.class;
  character.equipment.weapon = "Longbow"; 
  character.equipment["weapon"] = "Longbow";
  console.log("stats" in character); 
//4 
const characters = [
    { name: "Eldrin", attributes: { health: 100, mana: 50 }},
    { name: "Mira", attributes: { health: 85, mana: 60 }}
    ];
  
   console.log(characters[0].attributes.health);

   function calculateAverageHealth(characters) {
    let totalHealth = 0;
    characters.forEach(character => {
      totalHealth += character.attributes.health;
    });
    return totalHealth / characters.length;
  }
  
  console.log(calculateAverageHealth(characters));  
  //5 
  const character1 = { name: "Eldrin", level: 20 };
  const character2 = { health: 100, mana: 50 };
  const mergedCharacter = Object.assign({}, character1, character2);
  console.log(mergedCharacter);
  Object.freeze(mergedCharacter);
  Object.seal(mergedCharacter);
  console.log(Object.isSealed(mergedCharacter));
  console.log(Object.isFrozen(mergedCharacter)); 

  //6 
  const characterStats = {
    name: "Eldrin",
    class: "Mage",
    level: 7,
    health: 100,
    mana: 200
  };
  
  function logProperties(obj) {
    Object.keys(obj).forEach(key => {
      console.log(`${key}: ${obj[key]}`);   });
  }  
  
  logProperties(characterStats);
   
  //7 
  const gameScores = {
    "Eldrin": 950,
    "Mira": 1200,
    "Thorn": 800
  };
  
  function increaseExperience(characterName, increaseBy) {
    Object.entries(gameScores).forEach(([name, points]) => {
      if (name === characterName && points < 1000) {
        gameScores[name] += increaseBy; 
        console.log(`${name} now has ${gameScores[name]} experience points.`);
      }
    });
  }

  //8
  const quests = {
    1: { name: "Find the Lost Sword", difficulty: "Easy", reward: "100 gold" },
    2: { name: "Defeat the Dragon", difficulty: "Hard", reward: "500 gold" },
    3: { name: "Escort the Merchant", difficulty: "Medium", reward: "250 gold" }
  };
  
  function findHardQuests(quests) {
    let hardQuests = [];
    
    for (let [id, quest] of Object.entries(quests)) {
      if (quest.difficulty === "Hard") {
        hardQuests.push({ ...quest, isHard: true });
      }
    }
    
    return hardQuests;
  }
  
  console.log(findHardQuests(quests));
//9 
const skillLevels = {
    Ranger: [8, 9, 7, 10, 8.5],
    Mage: [8.5, 8, 9, 9.5, 7.5],
    Warrior: [7, 7.5, 8, 8.5, 9]
  };
  
  function calculateAverageSkills(skillLevels) {
    Object.keys(skillLevels).forEach(classType => {
      let sum = 0;
      const skills = skillLevels[classType];
      for (let skill of skills) {
        sum += skill;
      }
      const average = sum / skills.length;
      console.log(`${classType}: Average Skill Level = ${average.toFixed(2)}`);
    });
  }
  
  calculateAverageSkills(skillLevels);
    //10 
    const questRewards = {
        "Find the Lost Sword": "Legendary Weapon",
        "Defeat the Dragon": "Epic Armor",
        "Escort the Merchant": "Gold",
        "Discover the Ancient Ruins": "Legendary Weapon"
      };
      
      function restructureRewards(rewards) {
        const organizedRewards = {}; 
      
        Object.entries(rewards).forEach(([questName, rewardType]) => {
          if (!organizedRewards[rewardType]) { 
            organizedRewards[rewardType] = [];  
          }
          organizedRewards[rewardType].push(questName);
        });
      
        return organizedRewards;
      }
      
      console.log(restructureRewards(questRewards));
      