/**
 * Created by qingyun on 16/11/28.
 */
window.onload = function(){
    var square1 = new Square(200,200);
    var square2 = new Square(400,400);
    var square3 = new Square(100,100);
    square1.init();
    square2.init();
    square3.init();
}
function Square(width,height){
    this.width = width;
    this.height = height;
}
Square.prototype.init = function(){
    var newDiv = document.createElement("div");
    newDiv.className = "box";
    setCss(newDiv,{"width":this.width,"height":this.height,"top":Math.random()*800,"left":Math.random()*800});
    document.body.appendChild(newDiv);
}

