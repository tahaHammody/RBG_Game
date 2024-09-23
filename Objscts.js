const gameWorld = {
    players: [],
    enemies: [],
    items: [],
    npcs: [],

    createEntity: function(name, health, position, inventory, abilities, playerClass) {
        return {
            name: name,
            health: health,
            position: position,
            inventory: inventory,
            abilities: abilities,
            level: 1,
            xp: 0,
            playerClass: playerClass, // Adding playerClass for the class system

            move: function(newPosition) {
                this.position = newPosition;
            },

            pickUpItem: function(item) {
                if (item.position.x === this.position.x && item.position.y === this.position.y) {
                    this.inventory.push(item);
                    console.log(`${this.name} picked up ${item.name}`);
                }
            },

            useItem: function(item) {
                const index = this.inventory.indexOf(item);
                if (index > -1) {
                    this.inventory.splice(index, 1);
                    console.log(`${this.name} used ${item.name}`);
                    item.effect(this);
                }
            },

            levelUp: function() {
                while (this.xp >= 100) {
                    this.xp -= 100;
                    this.level += 1;
                    this.health += 10;
                    console.log(`${this.name} has leveled up! Level: ${this.level}, Health: ${this.health}`);
                }
            },

            gainXP: function(amount) {
                this.xp += amount;
                console.log(`${this.name} gained ${amount} XP`);
                this.levelUp();
            }
        };
    },

    createPlayer: function(name, health, position, inventory, abilities, playerClass) {
        return this.createEntity(name, health, position, inventory, abilities, playerClass);
    },

    createEnemy: function(name, health, position, inventory, abilities) {
        return this.createEntity(name, health, position, inventory, abilities);
    },

    createNPC: function(name, health, position, inventory, dialog) {
        let npc = this.createEntity(name, health, position, inventory, [], "");
        npc.dialog = dialog;
        npc.talk = function() {
            console.log(`${this.name} says: ${this.dialog}`);
        };
        return npc;
    },

    talkToNPC: function(player) {
        this.npcs.forEach(npc => {
            if (npc.position.x === player.position.x && npc.position.y === player.position.y) {
                npc.talk();
            }
        });
    },

    createItem: function(name, effect, position) {
        return {
            name: name,
            effect: effect,
            position: position
        };
    },

    addPlayer: function(player) {
        this.players.push(player);
    },

    removePlayer: function(player) {
        this.players = this.players.filter(p => p !== player);
    },

    addEnemy: function(enemy) {
        this.enemies.push(enemy);
    },

    removeEnemy: function(enemy) {
        this.enemies = this.enemies.filter(e => e !== enemy);
    },

    addItem: function(item) {
        this.items.push(item);
    },

    removeItem: function(item) {
        this.items = this.items.filter(i => i !== item);
    },

    addNPC: function(npc) {
        this.npcs.push(npc);
    },

    removeNPC: function(npc) {
        this.npcs = this.npcs.filter(n => n !== npc);
    },

    checkForEncounters: function(player) {
        this.enemies.forEach(enemy => {
            if (enemy.position.x === player.position.x && enemy.position.y === player.position.y) {
                console.log(`Encounter started between ${player.name} and ${enemy.name}`);
                this.combat(player, enemy);
            }
        });
    },

    combat: function(player, enemy) {
        const playerBaseDamage = 10;
        const enemyBaseDamage = 8;
        let playerTurnCount = 0;

        function applyDamage(attacker, defender, baseDamage) {
            let damage = baseDamage;
            console.log(`${attacker.name} hits ${defender.name} for ${damage} damage.`);
            defender.health -= damage;
        }

        while (player.health > 0 && enemy.health > 0) {
            playerTurnCount++;

            if (playerTurnCount % 3 === 0 && player.abilities.length) {
                let abilityIndex = (playerTurnCount / 3) % player.abilities.length;
                let ability = player.abilities[abilityIndex];
                console.log(`${player.name} uses ability: ${ability.name}`);
                ability.effect(enemy);
            } else {
                applyDamage(player, enemy, playerBaseDamage);
            }

            if (enemy.health <= 0) {
                console.log(`${enemy.name} defeated by ${player.name}`);
                this.removeEnemy(enemy);
                break;
            }

            applyDamage(enemy, player, enemyBaseDamage);
            if (player.health <= 0) {
                console.log(`${player.name} defeated by ${enemy.name}`);
                this.removePlayer(player);
                break;
            }
        }
    },
    createAbility: function(name, effect) {
        return {
            name: name,
            effect: effect  
        };
    },
};
