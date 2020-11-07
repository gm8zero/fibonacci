'use strict';
const memo = new Map();

memo.set(0,0);  //定義だから最初に決めておく
memo.set(1,1);

function fib(n){
    if (memo.has(n)) { //メモにデータがあればそれを使う
        return memo.get(n);
    }
    let value = fib(n-1) + fib(n-2); // メモにデータがないから計算する
    memo.set(n, value); //計算結果を取っておく
    return value; //計算結果を返す
}
for (let i = 0; i <= 1000; i++){
    console.log( i + "のフィボナッチは" + fib(i) + "です");
}