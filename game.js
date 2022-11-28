let firstName = 'Mike';
let lastName = 'Tyson';

let username = `Username: ${firstName} + ${lastName}`;
console.log(username);

let characterName = "Zeus";
let character = "Character: " + characterName;
console.log(character);

document.getElementById("username").innerHTML = username;
document.getElementById("character").innerHTML = character;

const fighter = {
    name: 'Mike',
    surname: 'Tyson',
    age: 50,
    statement(){
        return 'I am the King';
    }
};

console.log(fighter.statement());