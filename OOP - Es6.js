class Character {
    #health;
  
    constructor(name, strength, defense) {
      this.name = name;
      this.strength = strength;
      this.defense = defense;
      this.#health = 100; 
    }
  
    get health() {
      return this.#health;
    }
  
    receiveDamage(damage) {
      const newHealth = this.#health - damage;
      if (newHealth < 0) {
        this.#health = 0;
      } else {
        this.#health = newHealth;
      }
      console.log(`${this.name} received ${damage} damage. Health is now ${this.#health}.`);
    }
  
    attack(target) {
      if (!(target instanceof Character)) {
        console.log(`${this.name} can only attack another character.`);
        return;
      }
      if (target === this) {
        console.log(`${this.name} cannot attack itself.`);
        return;
      }
  
      const damage = this.strength - target.defense;
      if (damage > 0) {
        target.receiveDamage(damage);
        console.log(`${this.name} attacked ${target.name} and dealt ${damage} damage.`);
      } else {
        console.log(`${this.name} attacked ${target.name} but did no damage.`);
      }
    }
  
    displayStats() {
      return `Name: ${this.name}, Health: ${this.#health}, Strength: ${this.strength}, Defense: ${this.defense}`;
    }
  
    characterType() {
      return "This is a basic character.";
    }
  }

  class Knight extends Character {
    constructor(name, strength, defense, armor) {
      this.armor = armor;
    }
  
    shieldAttack(target) {
      if (!(target instanceof Character)) {
        console.log(`${this.name} can only attack another character.`);
        return;
      }
  
      if (target === this) {
        console.log(`${this.name} cannot attack itself.`);
        return;
      }
  
      let damage = this.strength + this.armor - target.defense;
      
      if (damage < 0) {
        damage = 0;
      }
  
      target.receiveDamage(damage);
      console.log(`${this.name} attacked ${target.name} with a shield attack and dealt ${damage} damage.`);
    }
  
    displayStats() {
      return `Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Defense: ${this.defense}, Armor: ${this.armor}`;
    }
  
    characterType() {
      return "This is a knight.";
    }
  }
  
  class Mage extends Character {
    constructor(name, strength, defense, mana) {
      this.mana = mana;
    }
  
    castSpell(target) {
      if (!(target instanceof Character)) {
        console.log(`${this.name} can only cast spells on another character.`);
        return;
      }
  
      if (target === this) {
        console.log(`${this.name} cannot cast a spell on itself.`);
        return;
      }
  
      if (this.mana <= 10) {
        console.log(`${this.name} does not have enough mana to cast a spell.`);
        return;
      }
  
      let damage = this.strength + 10;
      this.mana -= 10;
      target.receiveDamage(damage);
      console.log(`${this.name} cast a spell on ${target.name} and dealt ${damage} damage.`);
    }
  
    displayStats() {
      return `${super.displayStats()}, Mana: ${this.mana}`;
    }
  
    characterType() {
      return "This is a mage.";
    }
  }
  
  class Quest {
    constructor(name, description, reward, requiredEnemies) {
      this.name = name;
      this.description = description;
      this.reward = reward;
      this.requiredEnemies = requiredEnemies;
      this.completed = false;
    }
  
    completeQuest() {
      this.completed = true;
      console.log(this.name + " quest has been completed.");
    }
  }
  
  class Player {
    constructor(name) {
      this.name = name;
      this.quests = [];
    }
  
    acceptQuest(quest) {
      if (quest instanceof Quest) {
        this.quests.push(quest);
        console.log(this.name + " has accepted the quest: " + quest.name);
      }
    }
  
    completeQuest(quest, defeatedEnemies) {
        if (!(quest instanceof Quest)) {
          console.log("Invalid quest.");
          return;
        }
    
        var allEnemiesDefeated = quest.requiredEnemies.every(function(enemy) {
          return defeatedEnemies.includes(enemy);
        });
    
        if (allEnemiesDefeated) {
          quest.completeQuest();
        } else {
          console.log("Not all enemies have been defeated for quest: " + quest.name);
        }
      }
  
    receiveRewards() {
      this.quests.forEach(function(quest) {
        if (quest.completed) {
          console.log(this.name + " received reward: " + quest.reward + " for completing " + quest.name);
        }
      });
    }
  }
  

  class Terrain {
   
  }
  
  class Forest extends Terrain {
    applyEffect(character) {
      if (character instanceof Mage) {
        character.manaRegeneration();
      } else {
        console.log(character.name + " is in a Forest, but no special effect for them.");
      }
    }
  }
  
  class Desert extends Terrain {
    applyEffect(character) {
      character.strength -= 5;
      console.log(character.name + " is fatigued in the Desert. Strength reduced by 5.");
    }
  }
  
  class Castle extends Terrain {
    applyEffect(character) {
      character.defense += 5;
      console.log(character.name + " is in a Castle. Defense increased by 5.");
    }
  }
  
  class Mage extends Character {
    constructor(name, strength, defense, mana) {
      super(name, strength, defense);
      this.mana = mana;
    }
  
    manaRegeneration() {
      this.mana += 20;
      console.log(this.name + " regenerates mana in the Forest. Mana increased by 20.");
    }
  
    displayStats() {
      return `${super.displayStats()}, Mana: ${this.mana}`;
    }
  
    characterType() {
      return "This is a mage.";
    }
  }