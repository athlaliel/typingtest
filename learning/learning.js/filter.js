//filterは該当する全ての要素を取り出す。rubyのallみたいな物
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
})

console.log(evenNumbers);

const characters = [
  {id: 1, name:"忍者わんこ", age: 14},
  {id: 2, name:"ベオウルフ", age: 999},
  {id: 3, name:"キムんカムイの熊", age: 28}
];

const overTwenty = characters.filter((character) => {
  return character.age < 20;
});

console.log(overTwenty);