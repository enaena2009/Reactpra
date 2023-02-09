//spread構文

//ドット(...)を使う

//配列の展開
const array1 = [1, 2];
// console.log(array1);

console.log(...array1);
//スプレッド構文を使うことで、値だけを出力

const sumFunc = (num1, num2) => console.log(num1 + num2);
//↓従来
// sumFunc(array1[0],array1[1]);
//↓スプレッド構文
sumFunc(...array1);
//引数の中に、配列の要素が順番に入るようになる

const array2 = [1, 2, 3, 4, 5];
const [num1, num2, ...array3] = array2;
console.log(num1);
console.log(num2);
//スプレッド構文を使って
console.log(array3);
//配列を展開するときや配列をまとめるときに使われる
//まとめる際は配列の分割代入とセットで使われる事が多い

//配列のコピー、配列の結合
const array4 = [10, 20];
const array5 = [30, 40];
//配列のコピー
const array6 = [...array4];
console.log(array6);

const array7 = [...array4, ...array5];
console.log(array7);
