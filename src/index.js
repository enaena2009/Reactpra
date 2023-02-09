/**constt,letの変数宣言 */

var val1 = "var変数";
// console.log(val1);

/**var変数は上書き可能 */
val1 = "var変数を上書き";
// console.log(val1);

/**var変数は再宣言可能 */
var val1 = "var変数再宣言";
// console.log(val1);

/**const を使った変数宣言 */
const val2 = "const宣言";
// console.log(val2);

/**const変数は上書き不可 */
// val2 = "const変数を上書き";

/**constは再宣言不可 */
// const val2 = "再宣言";

/**letを使った変数宣言 */
let val3 = "let変数";
// console.log(val3);

/**let 変数は上書き可能 */
val3 = "let上書き";
// console.log(val3);

/**letは再宣言不可 */
// let val3 = "再宣言";
// console.log(val3);

const val4 = { name: "佐藤", age: 28 };
val4.name = "田中";
console.log(val4);

val4.addres = "広島";
console.log(val4);

const val5 = ["dog", "cat"];

val5[0] = "bird";
// console.log(val5);

val5.push("monkey");
console.log(val5);
