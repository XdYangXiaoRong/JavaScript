/**
 * Created by qingyun on 16/12/9.
 */
window.onload = function(){
    var data_arr = ["0.3","0.2","0.3","0.2"];
    var color_arr = ["red","green","blue","yellow"];
    var text_arr = ["第一季度","第二季度","第三季度","第四季度"];
    drawPie("mycanvas",data_arr,color_arr,text_arr);
}
function drawPie(canvasId,datas,colors,texts){
    var mycanvas = document.getElementById(canvasId);

    var ctx = mycanvas.getContext("2d");

    var radius = mycanvas.height/2-20; //圆心半径确定
    var cx = radius + 20, cy = radius + 20; //圆心坐标点
    var picX = radius*2 + 40, picY = 20;
    var picWidth = 30,picHeight = 10;
    var textX = picX + picWidth + 10, textY = 20;

    var startAngel = 0;
    var endAngel = 0;
    for(var i=0;i<datas.length;i++){
        endAngel = startAngel + Math.PI*2*datas[i];
        ctx.beginPath();
        ctx.fillStyle = colors[i];
        ctx.moveTo(cx,cy);
        ctx.arc(cx,cy,radius,startAngel,endAngel,false);
        ctx.fill();

        //绘制图例
        ctx.fillRect(picX,picY+i*20,picWidth,picHeight);

        //绘制文字
        ctx.textBaseline ="top";
        ctx.fillText(texts[i],textX,textY+i*20);
        startAngel = endAngel;

    }

    alert(radius);
}