/**
 * Created by qingyun on 16/11/28.
 */
function setCss(obj,json){
    for(var key in json){
        obj.style[key] = json[key]+"px";
    }
}