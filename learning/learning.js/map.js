const numbers = [1, 2, 3, 4];

const doubleNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);

const names = [
  {firstname: "kate", lastname: "jones"},
  {firstname: "baran", lastname: "soala"},
  {firstname: "die", lastname: "baran"},
  {firstname: "pop", lastname: "maum"}
];

const fullNames = names.map((name) => {
  return name.firstname + name.lastname;
});

console.log(fullNames);