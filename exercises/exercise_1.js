const characters = require("../data/characters.json");

// TODO: return all characters with known birth year
const charactersWithKnownBirthDate = () => {
  // CODE HERE
  return characters.find((character) =>character.birth_year !=="unknown") 

};

module.exports = charactersWithKnownBirthDate;
