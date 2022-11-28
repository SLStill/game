let firstName = 'Mike';
let lastName = 'Tyson';

let username = `Username: ${firstName} + ${lastName}`;
console.log(username);

let characterName = "Zeus";
let character = "Character: " + characterName;
console.log(character);

document.getElementById("username").innerHTML = username;
document.getElementById("character").innerHTML = character;