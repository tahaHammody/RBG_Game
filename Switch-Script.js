
//1 

let dayOfWeek = 3;

switch (dayOfWeek) {
    case 1:
        console.log("Sunday: Treasure Hunt");
        break;
    case 2:
        console.log("Monday: Battle Arena");
        break;
    case 3:
        console.log("Tuesday: Mystic Forest Exploration");
        break;
    case 4:
        console.log("Wednesday: Wizard's Duel");
        break;
    case 5:
        console.log("Thursday: Dragon Raid");
        break;
    case 6:
        console.log("Friday: Dungeon Crawl");
        break;
    case 7:
        console.log("Saturday: Grand Tournament");
        break;
    default:
        console.log("Invalid day of the week");
}
//2 

let themeColor = "dungeon"; 

switch (themeColor) {
    case "light":
        console.log("Setting theme to light mode");
        break;
    case "dark":
        console.log("Setting theme to dark mode");
        break;
    case "dungeon":
        console.log("Setting theme to dungeon mode");
        break;
    default:
        console.log("Unsupported color theme");
}
//3 

let questStatus = "new"; 

switch (questStatus) {
    case "new":
    case "unread":
    case "unopened":
        console.log("You have new quests awaiting!");
        break;
    case "completed":
        console.log("All quests completed");
        break;
    default:
        console.log("Unknown quest status");
}
//4 

let playerLevel = "Advanced"; 

switch (playerLevel) {
    case "Beginner":
        console.log("You are just starting your journey.");
        break;
    case "Intermediate":
        console.log("You have gained some experience.");
        break;
    case "Advanced":
        console.log("You are becoming a formidable player.");
        break;
    case "Expert":
        console.log("You are highly skilled and knowledgeable.");
        break;
    case "Master":
        console.log("You have mastered all aspects of the game.");
        break;
    default:
        console.log("Unknown player level");
}
//5 

let inventoryItem = "Potion"; 

switch (inventoryItem) {
    case "Potion":
        console.log("Potion selected");
    case "Sword":
        console.log("Sword selected");
    case "Shield":
        console.log("Shield selected");
        break;
    default:
        console.log("No valid item selected");
}

//6 

let playerScore = 85; 

switch (true) {
    case (playerScore >= 90):
        console.log("Legend");
        break;
    case (playerScore >= 70 && playerScore <= 89):
        console.log("Champion");
        break;
    case (playerScore < 70):
        console.log("Rookie");
        break;
    default:
        console.log("Rookie"); 
}

//7 

let questMonth = 3; 

switch (questMonth) {
    case 1:
        console.log("January: Ice Kingdom Adventure");
        break;
    case 2:
        console.log("February: Valentine's Day Special");
        break;
    case 3:
        console.log("March: Spring Blossom Hunt");
        break;
    case 4:
        console.log("April: Easter Egg Hunt");
        break;
    case 5:
        console.log("May: Flower Festival Celebration");
        break;
    case 6:
        console.log("June: Summer Solstice Quest");
        break;
    case 7:
        console.log("July: Beach Party Bonanza");
        break;
    case 8:
        console.log("August: Underwater Expedition");
        break;
    case 9:
        console.log("September: Harvest Festival Quest");
        break;
    case 10:
        console.log("October: Haunted Mansion Mystery");
        break;
    case 11:
        console.log("November: Turkey Trot Adventure");
        break;
    case 12:
        console.log("December: Frosty Festivities");
        break;
    default:
        console.log("Invalid month input");
}

//8 
let playerInput = 42; 

switch (typeof playerInput) {
    case 'string':
        console.log("Input is a string");
        break;
    case 'number':
        console.log("Input is a number");
        break;
    case 'boolean':
        console.log("Input is a boolean");
        break;
    default:
        console.log("Unknown input type");
}
 //9 
 let updateMonth = 5; 

switch (updateMonth) {
    case 1:
    case 2:
    case 3:
        console.log("Q1");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Q2");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Q3");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Q4");
        break;
    default:
        console.log("Invalid month input");
}
