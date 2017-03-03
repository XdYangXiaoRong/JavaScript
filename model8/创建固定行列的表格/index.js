var tbody=document.getElementsByTagName("tbody")[0];
var tables=document.getElementsByTagName("table")[0];
var tdAll=document.getElementsByTagName("td");
var trAll=document.getElementsByTagName("tr");
var trs;
var tds;
function start(){
	var rows=document.getElementById("row").value;
	var columns=document.getElementById("column").value;
	
	
	if(isNaN(rows)||isNaN(columns)){
		alert("请确保你输入的是数字!");
	}
	for(var i=0;i<rows;i++){
		trs=document.createElement("tr");
		tbody.appendChild(trs);
		for(var j=0;j<columns;j++){
			tds=document.createElement("td");
			trs.appendChild(tds);
		}
	}
onchange();
console.log(tdAll.length);
}
function cut(){
	// for(var i=0;i<trAll.length;i++){
	// 	trAll[i].remove();
	// }
	
	for(var i=0;i<trAll.length;i++){
		
		tbody.removeChild(tbody.childNodes[i]);
		 trAll=document.getElementsByTagName("tr");
		 console.log(trAll.length);
		 i--;
	}
	alert("删除完毕!");
}
function onchange(){
	 tdAll=document.getElementsByTagName("td");
	console.log(tdAll.length);
	for(var i=0;i<tdAll;i++){

		tdAll[i].onclick=function(){
			var text=prompt("请输入内容:");
			this.innerHTML=text;
		}
	}
}
onchange();

