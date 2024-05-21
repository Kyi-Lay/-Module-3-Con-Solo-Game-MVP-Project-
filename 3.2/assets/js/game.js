var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var roundNumber = 0;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

var upgradeCost = 10;
var playerUpgrades = { 
  health: 0,
  attack: 0
};

// Function to handle player upgrades
var upgradePlayer = function() {
  var upgradeOption = window.prompt('Would you like to upgrade your robot? Enter "1" for health upgrade, "2" for attack upgrade, or "3" to leave.');

  switch (upgradeOption) {
    case '1':
      if (playerMoney >= upgradeCost) {
        playerMoney -= upgradeCost;
        playerHealth += 10;
        playerUpgrades.health++;
        window.alert('You have upgraded your robot\'s health by 10! Current health: ' + playerHealth);
      } else {
        window.alert('You don\'t have enough money to upgrade!');
      }
      break;
    case '2':
      if (playerMoney >= upgradeCost) {
        playerMoney -= upgradeCost;
        playerAttack += 5;
        playerUpgrades.attack++;
        window.alert('You have upgraded your robot\'s attack by 5! Current attack: ' + playerAttack);
      } else {
        window.alert('You don\'t have enough money to upgrade!');
      }
      break;
    case '3':
      window.alert('Leaving upgrade menu.');
      break;
    default:
      window.alert('Invalid option. Please enter 1, 2, or 3.');
      upgradePlayer();
      break;
  }
};

// Function to handle a single fight
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        playerMoney -= 10;
        break;
      }
    }

    enemyHealth -= playerAttack;
    console.log(playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.');

    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');
      playerMoney += 20;
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    playerHealth -= enemyAttack;
    console.log(enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.');

    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

// Function to start the game
var startGame = function() {
  // Loop through each enemy
  for (var i = 0; i < enemyNames.length; i++) {
    playerHealth = 100;
    roundNumber++;
    window.alert('Welcome to Robot Gladiators! Round ' + roundNumber);

    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;

    fight(pickedEnemyName);

    // If player is alive and there are more enemies, offer upgrades
    if (playerHealth > 0 && i < enemyNames.length - 1) {
      var wantsToUpgrade = window.confirm('The fight is over. Would you like to upgrade your robot?');
      if (wantsToUpgrade) {
        upgradePlayer(); 
      }
    }                          
  }

  // Game over message
  window.alert('Congratulations! You completed all rounds of Robot Gladiators!');
  var highScore = playerMoney + (playerUpgrades.health * upgradeCost) + (playerUpgrades.attack * upgradeCost);
  window.alert('High Score: ' + highScore);
};

// Start the game
startGame();





// var playerName = window.prompt("What is your robot's name?");
// var playerHealth = 100;
// var playerAttack = 10;
// var playerMoney = 10;

// var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
// var enemyHealth = 50;
// var enemyAttack = 12;

// console.log(enemyNames);
// console.log(enemyNames.length);
// console.log(enemyNames[0]);
// console.log(enemyNames[3]);

// // fight function (now with parameter for enemy's name)
// var fight = function(enemyName) {
//   while (playerHealth > 0 && enemyHealth > 0) {
//     // ask player if they'd like to fight or run
//     var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

//     // if player picks "skip" confirm and then stop the loop
//     if (promptFight === "skip" || promptFight === "SKIP") {
//       // confirm player wants to skip
//       var confirmSkip = window.confirm("Are you sure you'd like to quit?");

//       // if yes (true), leave fight
//       if (confirmSkip) {
//         window.alert(playerName + ' has decided to skip this fight. Goodbye!');
//         // subtract money from playerMoney for skipping
//         playerMoney = playerMoney - 10;
//         console.log("playerMoney", playerMoney);
//         break;
//       }
//     }

//     // remove enemy's health by subtracting the amount set in the playerAttack variable
//     enemyHealth = enemyHealth - playerAttack;
//     console.log(
//       playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
//     );

//     // check enemy's health
//     if (enemyHealth <= 0) {
//       window.alert(enemyName + ' has died!');

//       // award player money for winning
//       playerMoney = playerMoney + 20;

//       // leave while() loop since enemy is dead
//       break;
//     } else {
//       window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
//     }

//     // remove players's health by subtracting the amount set in the enemyAttack variable
//     playerHealth = playerHealth - enemyAttack;
//     console.log(
//       enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
//     );

//     // check player's health
//     if (playerHealth <= 0) {
//       window.alert(playerName + ' has died!');
//       // leave while() loop if player is dead
//       break;
//     } else {
//       window.alert(playerName + ' still has ' + playerHealth + ' health left.');
//     }
//   } // end of while loop
// }; // end of fight function

// // fight each enemy-robot by looping over them and fighting them one at a time
// for (var i = 0; i < enemyNames.length; i++) {
//   // if player is still alive, keep fighting
//   if (playerHealth > 0) {
//     // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
//     window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

//     // pick new enemy to fight based on the index of the enemyNames array
//     var pickedEnemyName = enemyNames[i];

//     // reset enemyHealth before starting new fight
//     enemyHealth = 50;

//     // use debugger to pause script from running and check what's going on at that moment in the code
//     // debugger;

//     // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
//     fight(pickedEnemyName);
//   }
//   // if player isn't alive, stop the game
//   else {
//     window.alert('You have lost your robot in battle! Game Over!');
//     break;
//   }
// }
