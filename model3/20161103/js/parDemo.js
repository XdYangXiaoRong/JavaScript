///**
// * Created by qingyun on 16/11/3.
// */
//function sumDemo1(){
//    var a = 6;
//    var b = 10;
//    var sum = a+b;
//    alert(sum);
//}
//function sumDemo2(){
//    var a = 16;
//    var b = 20;
//    var sum = a+b;
//    alert(sum);
//}
//function sumDemo3(){
//    var a = 26;
//    var b = 30;
//    var sum = a+b;
//    alert(sum);
//}
//sumDemo1();
//sumDemo2();
//sumDemo3();




function  sumDemo(num1,num2){ //形参
    var sum = num1 + num2 ;
    alert(sum);
    console.log(arguments.length);

}
sumDemo(16,10);  //实参