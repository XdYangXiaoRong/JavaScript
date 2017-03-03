var liGroup=document.getElementsByTagName("li");//得到离数组
//console.log(liGroup[0]);
var text=document.getElementById("text");
var fes=["一月:元旦节","二月:春节","三月:我也不知道啊!","四月:愚人节,清明节","五月:劳动节","六月:儿童节,端午节","七月:建党节","八月:建军节","九月:教师节,重阳节","十月:国庆节","十一月:光棍节","十二月:圣诞节,我的生日"];
console.log(fes);
for(var i=0;i<liGroup.length;i++){
	liGroup[i].onclick=function(){
		for(var j=0;j<liGroup.length;j++){
			liGroup[j].setAttribute("class","");
		}
		var index=this.getAttribute("data-type");
		this.setAttribute("class","current");
		console.log(fes[index]);
		text.innerHTML=fes[index];	
	}

}