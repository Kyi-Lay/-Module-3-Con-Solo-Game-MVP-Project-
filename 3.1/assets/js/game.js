// Initialize player's stats
let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

// Initialize enemy's stats
const enemy = {
  name: "Roborto",
  health: 50,
  attack: 12
};

// Function to handle the fight sequence
const fight = () => {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  while (playerHealth > 0 && enemy.health > 0) {
    // Ask player if they'd like to fight or run
    let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // Convert user input to lowercase for easier comparison
    promptFight = promptFight.toLowerCase();

    // If player chooses to fight
    if (promptFight === "fight") {
      // Player attacks enemy
      enemy.health -= playerAttack;
      console.log(`${playerName} attacked ${enemy.name}. ${enemy.name} now has ${enemy.health} health remaining.`);

      // Check if enemy is defeated
      if (enemy.health <= 0) {
        window.alert(`${enemy.name} has been defeated!`);
        break; // Exit the loop if enemy is defeated
      } else {
        window.alert(`${enemy.name} still has ${enemy.health} health left.`);
      }

      // Enemy attacks player
      playerHealth -= enemy.attack;
      console.log(`${enemy.name} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);

      // Check if player is defeated
      if (playerHealth <= 0) {
        window.alert(`${playerName} has been defeated!`);
        break; // Exit the loop if player is defeated
      } else {
        window.alert(`${playerName} still has ${playerHealth} health left.`);
      }
    }
    // If player chooses to skip
    else if (promptFight === "skip") {
      // Confirm if player wants to skip
      let confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // If yes, exit fight
      if (confirmSkip) {
        window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
        // Deduct money from player for skipping
        playerMoney -= 2;
        break; // Exit the loop if player skips
      }
    }
    // If player inputs invalid option
    else {
      window.alert("You need to pick a valid option. Try again!");
    }
  }
};

// Run fight function to start the game
fight();





// // // var playerName = 'Clank McKrank';
// // var playerName = window.prompt("What is your robot's name?");
// // var playerHealth = 100;
// // var playerAttack = 10;
// // var playerMoney = 10;

// // // You can also log multiple values at once like this
// // console.log(playerName, playerAttack, playerHealth);

// // var enemyName = "Roborto";
// // var enemyHealth = 50;
// // var enemyAttack = 12;

// // // fight function
// // var fight = function() {
// //   // Alert players that they are starting the round
// //   window.alert("Welcome to Robot Gladiators!");

// //   // ask player if they'd like to fight or run
// //   var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

// //   // if player choses to fight, fight
// //   if (promptFight === "fight" || promptFight === "FIGHT") {
// //     // removevar playerName = window.prompt("what is your robot"") 
// //  enemy's health by subtracting the amount set in the playerAttack variable
// //     enemyHealth = enemyHealth - playerAttack;
// //     console.log(
// //       playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
// //     );

// //     // check enemy's health
// //     if (enemyHealth <= 0) {
// //       window.alert(enemyName + " has died!");
// //     } else {
// //       window.alert(enemyName + " still has " + enemyHealth + " health left.");
// //     }

// //     // remove players's health by subtracting the amount set in the enemyAttack variable
// //     playerHealth = playerHealth - enemyAttack;
// //     console.log(
// //       enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
// //     ); 

// //     // check player's health
// //     if (playerHealth <= 0) {
// //       window.alert(playerName + " has died!");
// //     } else {
// //       window.alert(playerName + " still has " + playerHealth + " health left.");
// //     }
// //     // if player choses to skip
// //   } else if (promptFight === "skip" || promptFight === "SKIP") {
// //     // confirm player wants to skip
// //     var confirmSkip = window.confirm("Are you sure you'd like to quit?");

// //     // if yes (true), leave fight
// //     if (confirmSkip) {
// //       window.alert(playerName + " has decided to skip this fight. Goodbye!");
// //       // subtract money from playerMoney for skipping
// //       playerMoney = playerMoney - 2;
// //     }
// //     // if no (false), ask question again by running fight() again
// //     else {
// //       fight();
// //     }
// //     // if player did not chose 1 or 2 in prompt
// //   } else {
// //     window.alert("You need to pick a valid option. Try again!");
// //   }
// // }; // end of fight function

// // // run fight function to start game
// // fight();



// // Initialize player's stats
// let playerName = window.prompt("What is your robot's name?");
// let playerHealth = 100;
// let playerAttack = 10;
// let playerMoney = 10;

// // Initialize enemy's stats
// const enemy = {
//   name: "Roborto",
//   health: 50,
//   attack: 12
// };

// // Function to handle the fight sequence
// const fight = () => {
//   // Alert players that they are starting the round
//   window.alert("Welcome to Robot Gladiators!");

//   // Ask player if they'd like to fight or run
//   let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

//   // Convert user input to lowercase for easier comparison
//   promptFight = promptFight.toLowerCase();

//   // If player chooses to fight
//   if (promptFight === "fight") {
//     // Player attacks enemy
//     enemy.health -= playerAttack;
//     console.log(`${playerName} attacked ${enemy.name}. ${enemy.name} now has ${enemy.health} health remaining.`);

//     // Check if enemy is defeated
//     if (enemy.health <= 0) {
//       window.alert(`${enemy.name} has been defeated!`);
//     } else {
//       window.alert(`${enemy.name} still has ${enemy.health} health left.`);
//     }

//     // Enemy attacks player
//     playerHealth -= enemy.attack;
//     console.log(`${enemy.name} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);

//     // Check if player is defeated
//     if (playerHealth <= 0) {
//       window.alert(`${playerName} has been defeated!`);
//     } else {
//       window.alert(`${playerName} still has ${playerHealth} health left.`);
//     }
//   }
//   // If player chooses to skip
//   else if (promptFight === "skip") {
//     // Confirm if player wants to skip
//     let confirmSkip = window.confirm("Are you sure you'd like to quit?");

//     // If yes, exit fight
//     if (confirmSkip) {
//       window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
//       // Deduct money from player for skipping
//       playerMoney -= 2;
//     }
//     // If no, resume fight
//     else {
//       fight();
//     }
//   }
//   // If player inputs invalid option
//   else {
//     window.alert("You need to pick a valid option. Try again!");
//     // Restart the fight
//     fight();
//   }
// };

// // Run fight function to start the game
// fight();
