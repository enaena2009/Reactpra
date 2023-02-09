//分割代入

//コードを見やすくする
//オブジェクトの定義
// const myprofile = {
//   name: "星野",
//   age: 27
// };

//テンプレート文字列で標示
//プログラムが助長になる
//const message = `私は${myprofile.name}です。年齢は${myprofile.age}歳です。`;
//console.log(message);

// const{name,age} = myprofile;
// const message2 = `私は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//分割代入は処理の最初でオブジェクト（配列）から指定のキーを
//自由に利用できるようにするもの

//配列でも似たような処理が可能
const myprofile = ["星野", 27];
const message3 = `私は${myprofile[0]}です。年齢は現在${myprofile[1]}歳です。`;
console.log(message3);

//配列で分割代入を使う場合
const [name, age] = myprofile;
const message4 = `私は${name}です。年齢は今年で${age}歳です`;
console.log(message4);
