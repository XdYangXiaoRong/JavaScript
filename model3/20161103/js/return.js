/**
 * Created by qingyun on 16/11/3.
 */
function returnDemo(a,b){
    alert(111);
    var sum = a * b;
    return sum;
    alert(222);
}


var sumValue = returnDemo(10,50);
console.log(sumValue);

//return 带返回值的函数 return 后面的语句将不再执行