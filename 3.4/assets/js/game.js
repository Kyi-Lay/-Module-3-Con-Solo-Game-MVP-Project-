// Define the Player class
class Player {
  constructor(name, health = 100, attack = 10, money = 10) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.money = money;
  }

  // Method to reset player stats
  reset() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }

  // Method to refill player health
  refillHealth() {
    if (this.money >= 7) {
      console.log(`Refilling ${this.name}'s health by 20 for 7 dollars.`);
      this.health += 20;
      this.money -= 7;
    } else {
      console.log("You don't have enough money!");
    }
  }

  // Method to upgrade player attack
  upgradeAttack() {
    if (this.money >= 7) {
      console.log(`Upgrading ${this.name}'s attack by 6 for 7 dollars.`);
      this.attack += 6;
      this.money -= 7;
    } else {
      console.log("You don't have enough money!");
    }
  }
}

// Define the Enemy class
class Enemy {
  constructor(name, attack) {
    this.name = name;
    this.attack = attack;
    this.health = randomNumber(40, 60); // Set random health for each enemy
  }
}

// Define the Game class
class Game {
  constructor(player, enemies) {
    this.player = player;
    this.enemies = enemies;
  }

  // Method to start a new game
  start() {
    this.player.reset();
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.player.health > 0) {
        console.log(`Welcome to Robot Gladiators! Round ${i + 1}`);
        const pickedEnemy = this.enemies[i];
        const enemy = new Enemy(pickedEnemy.name, pickedEnemy.attack);
        this.fight(enemy);
        if (this.player.health > 0 && i < this.enemies.length - 1) {
          const storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
          if (storeConfirm) {
            this.shop();
          }
        }
      } else {
        console.log("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    this.end();
  }

  // Method to handle the fight between player and enemy
  fight(enemy) {
    while (this.player.health > 0 && enemy.health > 0) {
      const promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
      if (promptFight === "skip" || promptFight === "SKIP") {
        const confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
          console.log(`${this.player.name} has decided to skip this fight. Goodbye!`);
          this.player.money = Math.max(0, this.player.money - 10);
          console.log("playerInfo.money", this.player.money);
          break;
        }
      }
      const damage = randomNumber(this.player.attack - 3, this.player.attack);
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(`${this.player.name} attacked ${enemy.name}. ${enemy.name} now has ${enemy.health} health remaining.`);
      if (enemy.health <= 0) {
        console.log(`${enemy.name} has died!`);
        this.player.money += 20;
        break;
      } else {
        console.log(`${enemy.name} still has ${enemy.health} health left.`);
      }
      const enemyDamage = randomNumber(enemy.attack - 3, enemy.attack);
      this.player.health = Math.max(0, this.player.health - enemyDamage);
      console.log(`${enemy.name} attacked ${this.player.name}. ${this.player.name} now has ${this.player.health} health remaining.`);
      if (this.player.health <= 0) {
        console.log(`${this.player.name} has died!`);
        break;
      } else {
        console.log(`${this.player.name} still has ${this.player.health} health left.`);
      }
    }
  }

  // Method to handle the end of the game
  end() {
    console.log("The game has now ended. Let's see how you did!");
    if (this.player.health > 0) {
      console.log(`Great job, you've survived the game! You now have a score of ${this.player.money}.`);
    } else {
      console.log("You've lost your robot in battle!");
    }
    const playAgainConfirm = window.confirm('Would you like to play again?');
    if (playAgainConfirm) {
      this.start();
    } else {
      console.log('Thank you for playing Robot Gladiators! Come back soon!');
    }
  }

  // Method to handle shopping between battles
  shop() {
    const shopOptionPrompt = window.prompt(
      'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );
    switch (shopOptionPrompt.toLowerCase()) {
      case 'refill':
        this.player.refillHealth();
        break;
      case 'upgrade':
        this.player.upgradeAttack();
        break;
      case 'leave':
        console.log('Leaving the store.');
        break;
      default:
        console.log('You did not pick a valid option. Try again.');
        this.shop();
        break;
    }
  }
}

// Function to generate a random numeric value
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Initialize player and enemies
const playerName = window.prompt("What is your robot's name?");
const player = new Player(playerName);
const enemies = [
  {
    name: 'Roborto',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Amy Android',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Robo Trumble',
    attack: randomNumber(10, 14)
  }
];

// Start the game
const game = new Game(player, enemies);
game.start();















// /* GAME FUNCTIONS */

// // function to generate a random numeric value
// var randomNumber = function(min, max) {
//   var value = Math.floor(Math.random() * (max - min + 1) + min);

//   return value;
// };

// // fight function (now with parameter for enemy's object holding name, health, and attack values)
// var fight = function(enemy) {
//   while (playerInfo.health > 0 && enemy.health > 0) {
//     // ask player if they'd like to fight or run
//     var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

//     // if player picks "skip" confirm and then stop the loop
//     if (promptFight === "skip" || promptFight === "SKIP") {
//       // confirm player wants to skip
//       var confirmSkip = window.confirm("Are you sure you'd like to quit?");

//       // if yes (true), leave fight
//       if (confirmSkip) {
//         window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
//         // subtract money from playerInfo.money for skipping
//         playerInfo.money = Math.max(0, playerInfo.money - 10);
//         console.log("playerInfo.money", playerInfo.money)
//         break;
//       }
//     }

//     // generate random damage value based on player's attack power
//     var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

//     enemy.health = Math.max(0, enemy.health - damage);
//     console.log(
//       playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
//     );

//     // check enemy's health
//     if (enemy.health <= 0) {
//       window.alert(enemy.name + ' has died!');

//       // award player money for winning
//       playerInfo.money = playerInfo.money + 20;

//       // leave while() loop since enemy is dead
//       break;
//     } else {
//       window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
//     }

//     // remove players's health by subtracting the amount set in the enemy.attack variable
//     var damage = randomNumber(enemy.attack - 3, enemy.attack);

//     playerInfo.health = Math.max(0, playerInfo.health - damage);
    
//     console.log(
//       enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
//     );

//     // check player's health
//     if (playerInfo.health <= 0) {
//       window.alert(playerInfo.name + ' has died!');
//       // leave while() loop if player is dead
//       break;
//     } else {
//       window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
//     }
//   } // end of while loop
// }; // end of fight function

// // function to start a new game
// var startGame = function() {
//   // reset player stats
//   playerInfo.reset();

//   // fight each enemy robot by looping over them and fighting them one at a time
//   for (var i = 0; i < enemyInfo.length; i++) {
//     // if player is still alive, keep fight next enemy
//     if (playerInfo.health > 0) {
//       // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
//       window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

//       // pick new enemy to fight based on the index of the enemyInfo array
//       var pickedEnemyObj = enemyInfo[i];

//       // set health for picked enemy
//       pickedEnemyObj.health = randomNumber(40, 60);

//       // pass the pickedEnemyObj object variable's value into the fight function, where it will assume the value of the enemy parameter
//       fight(pickedEnemyObj);

//       // if player is still alive and we're not at the last enemy in the array
//       if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
//         // ask if player wants to use the store before next round
//         var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
//         // if yes, take them to the store() function
//         if (storeConfirm) {
//           shop();
//         }
//       }
//     }
//     // if player is not alive, break out of the loop and let endGame function run
//     else {
//       window.alert("You have lost your robot in battle! Game Over!");
//       break;
//     }
//   }

//   // after loop ends, we are either out of player.health or enemies to fight, so run the endGame function
//   endGame();
// };

// // function to end the entire game
// var endGame = function() {
//   window.alert("The game has now ended. Let's see how you did!");

//   // if player is still alive, player wins!
//   if (playerInfo.health > 0) {
//     window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + '.');
//   } else {
//     window.alert("You've lost your robot in battle!");
//   }

//   // ask player if they'd like to play again
//   var playAgainConfirm = window.confirm('Would you like to play again?');

//   if (playAgainConfirm) {
//     startGame();
//   } else {
//     window.alert('Thank you for playing Robot Gladiators! Come back soon!');
//   }
// };

// // go to shop between battles function
// var shop = function() {
//   // ask player what they'd like to do
//   var shopOptionPrompt = window.prompt(
//     'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
//   );

//   // use switch case to carry out action
//   switch (shopOptionPrompt) {
//     case 'REFILL':
//     case 'refill':
//       playerInfo.refillHealth();
//       break;
//     case 'UPGRADE':
//     case 'upgrade':
//       playerInfo.upgradeAttack();
//       break;
//     case 'LEAVE':
//     case 'leave':
//       window.alert('Leaving the store.');

//       // do nothing, so function will end
//       break;
//     default:
//       window.alert('You did not pick a valid option. Try again.');

//       // call shop() again to force player to pick a valid option
//       shop();
//       break;
//   }
// };

// /* END GAME FUNCTIONS */

// /* GAME INFORMATION / VARIABLES */

// // player information
// var playerInfo = {
//   name: window.prompt("What is your robot's name?"),
//   health: 100,
//   attack: 10,
//   money: 10,
//   reset: function() {
//     this.health = 100;
//     this.money = 10;
//     this.attack = 10;
//   },
//   refillHealth: function() {
//     if (this.money >= 7) {
//       window.alert("Refilling player's health by 20 for 7 dollars.");
//       this.health += 20;
//       this.money -= 7;
//     } 
//     else {
//       window.alert("You don't have enough money!");
//     }
//   },
//   upgradeAttack: function() {
//     if (this.money >= 7) {
//       window.alert("Upgrading player's attack by 6 for 7 dollars.");
//       this.attack += 6;
//       this.money -= 7;
//     } 
//     else {
//       window.alert("You don't have enough money!");
//     }
//   }
// };

// // enemy information
// var enemyInfo = [
//   {
//     name: 'Roborto',
//     attack: randomNumber(10, 14)
//   },
//   {
//     name: 'Amy Android',
//     attack: randomNumber(10, 14)
//   },
//   {
//     name: 'Robo Trumble',
//     attack: randomNumber(10, 14)
//   }
// ];

// console.log(enemyInfo);
// console.log(enemyInfo[0]);
// console.log(enemyInfo[0].name);
// console.log(enemyInfo[0]['attack']);

// /* END GAME INFORMATION / VARIABLES */

// /* RUN GAME */
// startGame();
