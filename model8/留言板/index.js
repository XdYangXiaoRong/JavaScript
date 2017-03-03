var main=document.getElementsByClassName("main")[0];
var personForA=document.getElementsByClassName("person");
var text;//留言板
var youWrite;//定义留言的内容
var timeNow;//定义留言时的时间
var time;//设置好格式的时间
function show(){

	 text=document.getElementsByClassName("text")[0];
	text.style.display="block";
}
function get(){
	var main=document.getElementsByClassName("main")[0];
	youWrite=document.getElementById("write").value;//得到留言的内容
	 timeNow=new Date();
	 var year=timeNow.getFullYear();
	 var month=timeNow.getMonth()+1;
	 var date=timeNow.getDate();
	 var hour=timeNow.getHours();
	 var minute=timeNow.getMinutes();
	 var second=timeNow.getSeconds();
	 time=year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
	 console.log(time);
	 console.log(youWrite);
	 text=document.getElementsByClassName("text")[0];
	 text.style.display="none";
	 var newPerson=document.createElement("div");
	 newPerson.setAttribute("class","person");

	 var newLeft=document.createElement("div");
	 newLeft.setAttribute("class","left");

	 var newCenter=document.createElement("div");
	 newCenter.setAttribute("class","center");

	 var newRight=document.createElement("div");
	 newRight.setAttribute("class","right");

	 newLeft.innerHTML="<img src='dc6.jpg'>";
	 newCenter.innerHTML=youWrite;

	 var newPTime=document.createElement("p");
	 newPTime.setAttribute("class","time");

	 var newPCut_down=document.createElement("div");
	 newPCut_down.setAttribute("class","cut_down");

	 newPTime.innerHTML=time;
	 newPCut_down.innerHTML="<a href='#'>删除</a>";
	 main.appendChild(newPerson);
	 newPerson.appendChild(newLeft);
	 newPerson.appendChild(newCenter);
	 newPerson.appendChild(newRight);
	 newRight.appendChild(newPTime);
	 newRight.appendChild(newPCut_down);
	 document.getElementById("write").value="";//清除上一次在textarea的留言内容
	 cut();
	 hideForA();
}
function cut(){
	var mycut=document.getElementsByClassName("cut_down");
	for(var i=0;i<mycut.length;i++){
		mycut[i].onclick=function(){
			// alert("hello");
			//console.log(this.parentNode.parentNode.parentNode);
			//console.log(this.parentNode.parentNode);
			this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);

		}
	}
	hideForA();
}
cut();
function hideForA(){
	//var personForA=document.getElementsByClassName("person");
	//var aAll=document.getElementsByTagName("a");
	for(var i=0;i<personForA.length;i++){
		personForA[i].onmouseover=function(){
			//console.log(123);
			this.getElementsByTagName("a")[0].style.display="block";
		}
		personForA[i].onmouseout=function(){
			//console.log(456);
			this.getElementsByTagName("a")[0].style.display="none";
		}
	}
}
hideForA();
function hideText(){
	var myText=document.getElementsByClassName("text")[0];
	myText.style.display="none";
}