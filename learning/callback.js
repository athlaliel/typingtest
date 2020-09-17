//jsでアプリ作るのに頻出する関数
//引数に渡される関数

const printWanko = () => {
  console.log("にんじゃわんこ");
};

// 関数callにcallbackという名前の引数を追加してください
const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  // 引数に渡したcallbackを呼び出してください
  callback();
};

// 関数printWankoを引数に渡して関数callを実行してください
call(printWanko);

const printwanko = () => {
  console.log("リ・デストロ");
}

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
}

call(printwanko);


//パターン２
//引数の中で直接関数を定義する
const printwanko = () => {
  console.log("グラングラス")
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

call(printwanko);

  call(() => {
    console.log("ひつじ仙人");
  });

  //パターン３
  const call = (callback) => {
    callback("忍者わんこ", 15);
  };

  call((name, age) => {
    console.log(`${name}は${age}歳です`);
  });


