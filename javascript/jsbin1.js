const foo = document.getElementById("foo")

const fooWidth = foo.offsetWidth;

const fooHeight = foo.offsetHeight;

const fooArea = fooWidth * fooHeight;

// # 変数名
const foo = 100;

let foo = 200;

var foo = 300;

//関数例
function cut(food) {
  const cutfood = food.slice();
  return cutfood;
}

const cutCarrot = cut(carrot);
const cutPatato = cut(patato);


//returnの有無
function isTweetable(text) {
  return text.length <= 1;
}

console.log(isTweetable("foo"));

//定数の中に関数を入れている
const isTweetable = function(text) {
  return text.length <= 140;
}

console.log(isTweetable("foo"));


//コールバック関数とは、引数に関数を渡して処理をさせる事
const btn = document.getElementById("button");

btn.addEventListener("click", function() {
  console.log("フォロー解除");
});

const foods = ["人参", "じゃがいも", "玉ねぎ"];

foods.forEach(function(food) {
  console.log("food");
});


