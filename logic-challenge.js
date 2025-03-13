const name = prompt("Insert your nickname: "); // ask the user for his nickname
let xp = parseInt(prompt("Insert your experience points: ")); // ask the user for his experience points
let lvl // store a variable for the player's level

if (xp <= 1000) { // determines player's level based on his XP
    lvl = Iron
    } else if (xp > 1000 && xp <= 2000) {
        lvl = Bronze
    } else if (xp > 2000 && xp <= 5000) {
        lvl = Silver
    } else if (xp > 5000 && xp <= 7000) {
        lvl = Gold
    } else if ( xp > 7000 && xp <= 8000) {
        lvl = Platinum
    } else if (xp > 8000 && xp <= 9000) {
        lvl = Ascendant
    } else if (xp > 9000 && xp <= 10000) {
        lvl = Imortal
    } else if (xp > 10000) {
        lvl = Radiant
    }
    console.log(" O Herói de nome" + name + "está no nível " + lvl) // return the player's nickname and his level too