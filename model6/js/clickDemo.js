/**
 * Created by qingyun on 16/11/8.
 */
//function clickDemo(){
//    alert(111);
//}
// var  btnId = document.getElementById("clickBtn");
       var btnId = getId("clickBtn");
       btnId.onclick = function(){
           alert("点到我了");
       }
       //alert(1234); //警告框
       //window.alert(123890);
       //if(confirm("你开心吗?")){ //选择框,返回boolean
       //    alert("yes, so happy");
       //}else{
       //    alert("I hate you");
       //}
      var str = prompt("你为什么开心");//输入框返回字符串或null
      alert(str);

