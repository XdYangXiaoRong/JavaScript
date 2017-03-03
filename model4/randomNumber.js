
var number;
var time;
function start(){
    time=setInterval(function(){
    	var arr=["杨潇蓉","谢柯楠","邓丽贞","韦豆豆","何思芳","李春慧","黄豆豆","张海琴","安利","刘洋","范翠肖"];
   		number=parseInt(Math.random()*arr.length);
		document.getElementById('number').value=arr[number];
      },50);
}
function stop(){
	clearInterval(time);
}