var arr=new Array(10);//创建一个包含10个元素的数组,没有赋值
 arr[0]="a";//给数组的第一个元素赋值
 arr[1]="b";//给数组的第二个元素的赋值
console.log(arr);

var arr2=new Array("me","and","you");//创建一个数组有三个元素
console.log(arr2); 

var arr3=[1,1,5,7,89,90];
console.log(arr3);
var length=arr3.length;//求数组的长度
console.log("arr3的长度为:"+length);
arr3.length=3;//数组的长度length不是只读的,是可以设置的
console.log(arr3);

/*数组的遍历*/
var arr4=[34,489,89,86,3,5,6];
/*普通的for循环*/
for(var i=0;i<arr4.length;i++){
	console.log(arr4[i]);
}
/*for...in语句用于遍历数组或者对象的枚举*/
for(var i in arr4){
	console.log(arr4[i]);
}

/**数组的操作*/
arr4.push("abc",666);//进栈,数组的末尾添加一个元素,也可以添加多个
console.log(arr4);

arr4.unshift("er","eterr","tt");
console.log(arr4);//数组开头添加一个元素,也可以指定多个 
 
 /*arr.splice(x,y,z,w...)用于在指定位置添加或者删除元素,第一个参数指定操作数组的位置;
 第二个参数用于是定删除元素的个数,若为0,则只添加不删除;
 第三个及其以后的参数用于指定要添加的元素,不是必须项*/
arr4.splice(2,0,"你是猪吗?");//在第三个元素的位置添加字符串"你是猪吗?"
console.log(arr4);
arr4.splice(3,5,"sb","bendan");//在第四个元素的位置的位置就开始操作,删除5个元素,并添加两个元素"sb","bendan"
console.log(arr4);
/*slice(x,y) 切片, 不会改变数组本身,
返回从x开始,y-1位置结束的字符串*/
 var arr5=arr4.slice(2,7);
 console.log(arr5);
 console.log("arr5的长度为:"+arr5.length);

/*arr.pop() 删除末尾一个元素,并返回该元素*/
console.log(arr5.pop());           

/*arr.shift() 移除开头一个元素,并返回该元素*/
console.log(arr5.shift());

var arr6=[78,90];
var arr7=[99,123];
arr6.concat(arr7);
//字符串的拼接,但是新拼成的字符串会占用新的内存,并不会接在原来的字符串之后
console.log(arr6);
var arr8=arr6.concat(arr7);
console.log(arr8);

var arr9=arr8.join("");//用数组的元素组成字符创
console.log(arr9);

var arr10=arr8.sort(function(a,b){
	return a-b;
});
console.log(arr10);










