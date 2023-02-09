//デフォルト値、引数など

//react開発でよく使われる技法
//アロー関数で作る
// const sayHello = (name = "ゲスト") =>
// console.log(`こんにちは${name}さん`);
// sayHello("takato");
//出力→こんにちはtakatoさん

const sayHello = (name) => console.log(`こんにちは${name}さん`);
sayHello();
//結果→こんにちはundefinedさん
//jsでは引数無しだとundefinedが標示される
//バグが発生しやすいためよろしくない
