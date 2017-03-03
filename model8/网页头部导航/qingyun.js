var one=document.getElementsByClassName("one");
var ulTwo=document.getElementsByClassName("ulTwo");
for(var i=0;i<one.length;i++){
	one[i].onmouseover=function(){
		for(var i=0;i<one.length;i++){
			ulTwo[i].style.display="none";
		}
		var index=this.getAttribute("date");
		ulTwo[index].style.display="block";
	}
	one[i].onmouseout=function(){
		for(var i=0;i<one.length;i++){
			ulTwo[i].style.display="none";
		}
	}
}