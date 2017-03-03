/**
 * Created by qingyun on 16/12/6.
 */
    var begin = document.getElementById("begin");
    var wrap = document.getElementsByClassName("wrap")[0];
    var leftTime = document.getElementById("time");
    var score = document.getElementById("score");
    var imgCon = document.getElementById("imgCon");
    var num = 1;
    var time = 10;

    begin.onclick = function(){

        wrap.style.display = "none";

        var timer = setInterval(function(){
            time --;
            leftTime.innerHTML = time;
            if(time == 0){
                clearInterval(timer);
                wrap.style.display = "block";
                imgCon.innerHTML = "";
                var img = document.createElement("img");
                img.src = "img/2.png";
                imgCon.appendChild(img);
                img.onclick = createImg;
            }

        },1000)

        imgCon.firstElementChild.onclick = createImg;

        function createImg(){
            // 把当前图片移除
            var allLen = imgCon.children.length;

            for(var i=0;i<allLen;i++){
                imgCon.removeChild(imgCon.firstElementChild);
                //imgCon.children[i].remove();
            }
            score.innerHTML = num;
            num++;

            //创建
            var count = Math.pow(num,2);
            for(var i=0;i<count;i++){
                var img = document.createElement("img");
                img.src = "img/1.png";
                img.style.width = (100/num)+"%";
                img.style.height = (100/num)+"%";
                imgCon.appendChild(img);
            }

            //随机换一张图片为房祖名
            var randomImg = Math.floor(Math.random()*count);
            var targetImg = imgCon.children[randomImg];
            targetImg.src = "img/2.png";
            targetImg.onclick = createImg;
        }

    }