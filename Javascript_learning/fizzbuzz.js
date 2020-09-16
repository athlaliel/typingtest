for (var i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0)
  console.log("Fizz,Buzz");
  else if (i % 3 === 0)
  console.log("Fizz");
  else if (i % 5 === 0)
  console.log("Buzz")
  else // iが3の倍数でも5の倍数でもない
  console.log(i);
}