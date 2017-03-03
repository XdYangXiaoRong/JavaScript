/**
 * Created by qingyun on 16/12/2.
 */
var bar = document.getElementById("bar");
var container = document.getElementById("container");
var ball = document.getElementById("ball");
var start = document.getElementById("start");
var score = document.getElementById("score");
var disX = Math.ceil(Math.random()*10);
var disY = Math.ceil(Math.random()*10);
var conW = container.clientWidth;
var conH = container.clientHeight;
var ballW = ball.clientWidth;
var ballH = ball.clientHeight;
var currentX;
var currentY;
var i = 0;
var timer;


start.onclick = function(){
   timer = setInterval(function(){
        currentX = ball.offsetLeft + disX;
        currentY = ball.offsetTop + disY;

        if(currentX >= conW - ballW){
            disX = -disX;
        }else if(currentX <= 0){
            disX = -disX;
        }
        if(currentY >= conH - ballH){
            disY = -disY;
        }else if(currentY <=0){
            disY = -disY;
        }
        ball.style["left"] = currentX + "px";
        ball.style["top"] = currentY + "px";

        //判断游戏是否结束
        if(ball.offsetTop >= conH - ballH -bar.clientHeight){
            var ballLeft = ball.offsetLeft + ballW/2;
            if(ballLeft >= bar.offsetLeft && ballLeft <= bar.offsetLeft+bar.clientWidth){
                currentY = -currentY;
                 i++;
                score.innerHTML = i;
            }else {
                alert("游戏结束");
                clearInterval(timer);
                score.innerHTML = i;
            }
        }


    },50)
}

document.onkeydown = function(evt){
        var evt = evt || window.event;
        if(evt.keyCode == 37){
            if(bar.offsetLeft > 0) {
                bar.style.left = bar.offsetLeft-40 +"px";
            }else{
                bar.style.left = 0;
            }

        }
        if(evt.keyCode == 39){
            if(bar.offsetLeft < 650){
                bar.style.left = bar.offsetLeft + 40 + "px";
            }
        }
}