/**テンプレート文字列 */

//ES2015で使えるようになった
//文字列の中で変数名を使いたいときに用いる

const name = "佐藤";
const age = "28";
const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);
//↑だと結合のたびに＋書かないといけない

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
