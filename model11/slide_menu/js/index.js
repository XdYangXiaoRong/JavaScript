/**
 * Created by qingyun on 16/11/28.
 */
window.onload = function(){
    var slide = new SlideMenu("dl");
}
function SlideMenu(tagName){
    var menu = document.getElementsByTagName(tagName);
    var showList = function(){
        var currentDd = this.getElementsByTagName("dd")[0];
        var spans = currentDd.getElementsByTagName("span");
        currentDd.style.height = spans.length*40+"px";
    }
    var hideList = function(){
        this.getElementsByTagName("dd")[0].style.height = "0px";
    }

    for(var i=0;i<menu.length;i++){
        menu[i].onmouseover = showList;
        menu[i].onmouseout = hideList;
    }
}