/**
 * Created by qingyun on 16/11/3.
 */
var pre = document.getElementById("pre");
var next = document.getElementById("next");
var imgShow = document.getElementById("imgLoad");
var i = 1;

next.onclick = function(){
    i++;
    if(i>=6){
        return alert("后面没有图片了");//二选一
        i = 1;
    }
    imgShow.src = "img/pic"+i+".jpg";
}

pre.onclick = function (){
    i--;
    if(i<1){
        return alert("前面没有图片了");//二选一
        i = 5;
    }
    imgShow.src = "img/pic"+i+".jpg";
}

function change(n){
    imgShow.src = "img/pic"+n+".jpg";
}

setInterval(function(){
    i++;
    if(i>=6){
        i = 1;
    }
    imgShow.src = "img/pic"+i+".jpg";
},2000);