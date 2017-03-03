var picture=document.getElementById('pictureShow');
var left=document.getElementById("left");
var right=document.getElementById("right");

var i=1;
left.onclick=function(){
	i--;
	if(i<=0){
		i=5;
	}
	picture.src="images/ph"+i+".jpg";
}
right.onclick=function(){
	i++;
	if(i>5){
		i=1;
	}
	picture.src="images/ph"+i+".jpg";
}
function number(n){
	picture.src="images/ph"+n+".jpg";
}
setInterval(
	function(){
		if(i==5){
			i=1;
			picture.src="images/ph"+i+".jpg";
		}
		else{
			i++;
			picture.src="images/ph"+i+".jpg";
		}
	},4000);