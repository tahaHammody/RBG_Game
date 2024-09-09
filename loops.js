//1 
const experiencePoints = [100, 150, 75];

let totalExperience = 0;

for (let i = 0; i < experiencePoints.length; i++) {
  totalExperience += experiencePoints[i];
}

console.log("Total Player Experience:", totalExperience);
//2 
const questTitles = [
    'Quest 1',
    'Quest 2',
    'Quest 3',
  ];
  
  const targetQuest = 'Quest 2'; 
  
  for (let i = 0; i < questTitles.length; i++) {
    if (questTitles[i] === targetQuest) {
      console.log("Quest found in index  ",i);
    }
  }
  //3 
  const enemyHealths = [80, 120, 65];

  for (let i = 0; i < enemyHealths.length; i++) {
    if (enemyHealths[i] > 100) {
      console.log("Enemy  over 100:",enemyHealths[i],"in index", i);
    }
  }
  //4 
  const questRewards = [50, 100, 75];

for (let i = 0; i < questRewards.length; i++) {
  questRewards[i] += 20; 
}

console.log("Updated Quest Rewards:", questRewards);
//5 
const Rewards = [50, 100, 75, 100];
const specificReward = 100;
let count = 0;

for (let i = 0; i < Rewards.length; i++) {
  if (Rewards[i] === specificReward) {
    count++;
  }
}

console.log(`The reward ${specificReward} appears ${count} times.`);
//6 
const questChallenges = [120, 150, 75];
const challengeThreshold = 100;
let allAboveThreshold = true;

for (let i = 0; i < questChallenges.length; i++) {
  if (questChallenges[i] <= challengeThreshold) {
    allAboveThreshold = false;
  }
}

console.log(allAboveThreshold , "that all threshold above 100 " );
//7
const QuestRewards = [50, 100, 75, 150];

let maxReward = QuestRewards[0]; 
let maxIndex = 0; 

for (let i = 1; i < QuestRewards.length; i++) {
  if (QuestRewards[i] > maxReward) {
    maxReward = QuestRewards[i];
    maxIndex = i;
  }
}

console.log(`The maximum reward is ${maxReward} at index ${maxIndex}`);
//8 
const EnemyPowers = [50, 80, 65, 90];
const EnemyHealths = [80, 120, 60, 100];

let totalAssaultValue = 0;

for (let i = 0; i < EnemyPowers.length; i++) {
  totalAssaultValue += EnemyPowers[i] + EnemyHealths[i];
}

console.log("Total Assault Value:", totalAssaultValue);
//9 
const questExperienceMatrix = [
    [100, 200],
    [150, 175],
    [120, 250]
  ];
  
  let TotalExperience = 0;
  
  for (let i = 0; i < questExperienceMatrix.length; i++) {
    for (let j = 0; j < questExperienceMatrix[i].length; j++) {
      TotalExperience += questExperienceMatrix[i][j];
    }
  }
  
  console.log("Total Experience:", TotalExperience);
  //10 
  const questExperience = [
    [100, 200],
    [150, 175],
    [120, 250]
  ];
  
  const numCategories = questExperience[0].length;
  let highestPerCategory = Array(2).fill(0);
  
  for (let col = 0; col < numCategories; col++) {
    for (let row = 0; row < questExperience.length; row++) {
      if (questExperience[row][col] > highestPerCategory[col]) {
        highestPerCategory[col] = questExperience[row][col];
      }
    }
  }
  
  console.log("Highest experience per category:", highestPerCategory);
  
 //11 
 const questDifficultyMatrix = [
    [5, 7],
    [8, 6],
    [9, 7]
  ];
  
  const NumCategories = questDifficultyMatrix[0].length; 
  let highDifficultyCounts = Array(2).fill(0); 
  
  for (let col = 0; col < NumCategories; col++) {
    for (let row = 0; row < questDifficultyMatrix.length; row++) {
      if (questDifficultyMatrix[row][col] >= 7) {
        highDifficultyCounts[col]++; 
      }
    }
  }
  
  console.log("High-difficulty quest counts per category:", highDifficultyCounts);
  
//12
const questRewardsMatrix = [
    [50, 200],
    [300, 175],
    [120, 500]
  ];
  
  const numCategs = questRewardsMatrix[0].length; 
  let highRewardSums = Array(2).fill(0); 
  
  for (let col = 0; col < numCategs; col++) {
    for (let row = 0; row < questRewardsMatrix.length; row++) {
      if (questRewardsMatrix[row][col] > 250) {
        highRewardSums[col] += questRewardsMatrix[row][col];
      }
    }
  }
  
  console.log("Sum of high rewards (greater than 250) per category:", highRewardSums);
  
  //13
  const enemyHealthMatrix = [
    [80, 120],
    [60, 90],
    [200, 150]
  ];
  
  for (let i = 0; i < enemyHealthMatrix.length; i++) {
    const sumHealth = enemyHealthMatrix[i].reduce((acc, curr) => acc + curr, 0);
    const avgHealth = sumHealth / enemyHealthMatrix[i].length;
    console.log(`Average health for enemy type ${i + 1}:`, avgHealth);
  }
  