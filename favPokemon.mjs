import readline from "readline";

//function to ask questions
const rl = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//fetch all pokemon data from pokeapi
const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
const allPokemon = await response.json();

//convert allPokemon.results from array of objects to array of names
const pokemonNames = allPokemon.results.map((element) => element.name);

//your code here!
let answer = await ask("What's your favorite Pokemon? ")
let i = 0;
let pokeFound = 0;

pokemonNames[i]
for (i of pokemonNames) {
    if (answer == pokemonNames[i]) {
        // console.log(answer);
        console.log(pokemonNames[i])
        pokeFound = 1;
    } else {
        // console.log("That isn't a real Pokemon!")
        pokeFound = 0;
    }
}

console.log(pokeFound)


//end your code
process.exit();