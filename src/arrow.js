/**アロー関数 */

//従来の関数①
function func1(str) {
  return str;
}
// console.log(func1("func1です"));

//従来の関数②
const func2 = function (str) {
  return str;
};
// console.log(func2("func2です"));

//アロー関数※書略なしバージョン
const func3 = (str) => {
  return str;
};
// console.log(func3("func3です"));

//アロー関数※省略ありバージョン
const func4 = (str) => str;
//console.log(func4("func4です"));

//文字列ではなく数値型
const func5 = (num1, num2) => {
  return num1 + num2;
};
console.log(func5(10, 20));

const func6 = (num1, num2) => num1 * num2;
console.log(func6(10, 20));
