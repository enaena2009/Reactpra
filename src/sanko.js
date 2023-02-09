//三項演算子

//if elseのような分岐の省略方法
//ある条件　？　条件がtrueの時: 条件がfaseの時
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const num = 1300;

//toLocaleString()数値型だけ昨日する。
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number"
    ? num.toLocaleString()
    : "文字列入力は出来ません。数値を入力してください";
console.log(formattedNum);

//関数のreturn部分で三項演算子を使って値の判別をすることも可能
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100よりも大きいです" : "100以下です";
};
console.log(checkSum(50, 60));
