var trs=document.getElementsByClassName("trgroup");
var tables=document.getElementById("tables");
var len=trs.length;
var cut=document.getElementsByClassName("cut");//得到删除键的表格ID
// console.log(len);
var tds=document.getElementsByTagName("td");
console.log(trs[len-1]);
function add(){
	len++;
	// console.log(len);
	var name=document.getElementById("name").value;
	var number=document.getElementById("number").value;
	var age=document.getElementById("age").value;
	var star=document.getElementById("star").value;
	console.log(name);
	console.log(number);
	console.log(age);
	console.log(star);

	var message=[name,number,age,star];//存储一个人的基本信息
   	
  	console.log(message);
	var trAdd=document.createElement("tr");
	tables.appendChild(trAdd);
	var tdAdd;
	for(var i=0;i<5;i++){
		if(i==4){
			tdAdd=document.createElement("td");
			tdAdd.innerHTML="<a href='#' onclick='removeTr()' class='cut'>删除</a>";
			trAdd.appendChild(tdAdd);
		}
		else{
			tdAdd=document.createElement("td");
			tdAdd.innerHTML=message[i];
			trAdd.appendChild(tdAdd);
		}
		
	}
	removeTr();
	change();
}

function removeTr(){
	for(var i=0;i<cut.length;i++){
		cut[i].onclick=function(){
			console.log(tables);
			tables.removeChild(this.parentNode.parentNode);
			console.log(tables);
		}
	}
}
function change(){
	//alert(123);
	for(var i=0;i<tds.length;i++){
			tds[i].setAttribute("date",i);
		}
	for(var i=0;i<tds.length;i++){
		
		tds[i].onclick=function(){
			var index=this.getAttribute("date");
			index=parseInt(index);
			if(((index+1)%5)!=0){
				// alert(index);
				// alert(index+1);
				// alert((index+1)%5);
				var newValue=prompt("你输入你想要修改的值:");
				this.innerHTML=newValue;
			}
		}
	}
}
change();

//setInterval(change,10);
