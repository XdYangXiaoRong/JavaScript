var arr=[17,70,789,56,7890,57,49,63];
var arr2=[];
var len=arr.length;
for(var i=0;i<len;i++){
	if(arr[i]%7==0){
		arr2.push(arr[i]);
	}
	else{
		var str=String(arr[i]);
		for(var j=0;j<str.length;j++){
			if(str.charAt(j)==7){
				str=parseInt(str);
				arr2.push(str);
			}
		}
	}
}
console.log(arr2);