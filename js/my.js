/**
 * Random intro title.
 */
const hero = [];
hero[0] = "Hola";
hero[1] = "Hello";
hero[2] = "Bonjour";
const myRandom = Math.floor(Math.random() * hero.length);
document.getElementById("hero").innerHTML = hero[myRandom];