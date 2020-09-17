const numbares = [1, 3, 5, 7, 9];

const foundNumber = number.find((number) => {
  return number % 3 === 0;
});

console.log(foundNumber);


const characters = [
  {id: 1, name: "力丸", age: 18},
  {id: 2, name: "彩女", age: 16},
  {id: 3, name: "龍丸", age: 24},
  {id: 4, name: "鬼陰", age: 800}
];

const foundCharacter = character.find((character) => {
  return character.id === 3;
});

console.log(foundCharacter);