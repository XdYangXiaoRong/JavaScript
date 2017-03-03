/**
 * Created by qingyun on 16/11/3.
 */
var a = 10; //全局变量 声明在函数体外面,针对所有函数起作用
var b = 50;
test(2,3);
testTwo();

function test(num1 ,num2){
    var a = 10; //局部变量 声明在函数体里面的变量,只对当前函数有效
    var b = 20;
        c = 50; //不加var时,是全局变量,但不安全,不建议使用
    return alert(a+b);
}
function testTwo(){
    var c = 50;
    var d = 100;
    return alert(a+b);
}