//switch文内でcase文でパターン分け。
//且つ、defaultを使っていずれにも該当しないパターンを作成
const rank = 2;

switch(rank) {
  case 1:
    console.log("金メダルです");
    break;

  case 2:
    console.log("銀メダルです");
    break;

  case 3:
    console.log("銅メダルです");
    break;

  default :
  console.log("メダルは獲得できませんでした");
  break;

}
