let view = "speltest";
// view = "spel-test2!!!";
let inoki = ["いち", "にー", "さん", "よん"];

// let index = 0;
// while(index < inoki.length) {
//   console.log(inoki[index]);
//   index++;
// }



const test = (arg) => {
  if (inoki.length > arg) {
    console.log("ボンバイエ");
  } else {
    console.log("ボンバルディエ.......");
  }
};

const test2 = {
  color: "pink",
  size: "large",
  purfume: "mint",
  wantEeat: () => {
    console.log("anpananpanアンパン");
  }
};

document.getElementsByTagName("button")[2].addEventListener("click" , () => {
  window.alert("コレで表示されたかい？");
});


