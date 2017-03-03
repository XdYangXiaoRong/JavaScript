var str="";
var string="";
var arr=[];//用来存储所有的字符
 var main=document.getElementById("main");
 console.log(main);
for(var i=0;i<=9;i++){
	arr.push(i);
}
for(var i=65;i<=90;i++){
	
   arr.push(String.fromCharCode(i));
}
for(var i=97;i<=122;i++){
	arr.push(String.fromCharCode(i));
}
console.log(arr);
for(var k=0;k<4;k++){
	var index=parseInt(Math.random()*61);
	str+=String(arr[index]);
}

//document.write(str);

 console.log(main);
  main.innerHTML=str;