var arr=[99,699,267,3554,23,19,3932,-5];
//console.log(arr);
//console.log(Math.max(arr));
var le=arr.length;
var max=arr[0];
for(var i=1;i<le;i++){
	if(arr[i]>max){
		max=arr[i];
	}
}
console.log(max);