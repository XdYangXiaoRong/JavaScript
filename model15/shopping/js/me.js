(function(){
	var init=function(){
		var mychecked=document.getElementsByClassName("check");
		var check_all=document.getElementsByClassName("check-all")[0];
		var myTbody=document.getElementsByTagName("tbody")[0];
		var trs=myTbody.getElementsByTagName("tr");
		var ln=trs.length;//商品的种类的总数
		var  mycount=document.getElementById("counts");
		var mymoney=document.getElementById("money");
		var myAdd=document.getElementsByClassName("add");
		var my_counts=document.getElementsByClassName("count");
		var myreduce=document.getElementsByClassName("reduce");
		var mydel=document.getElementsByClassName("del");
		for(var i=0;i<mychecked.length;i++){
			mychecked[i].onclick=function(){
				if(this.className=="check-all check"){
					for(var i=0;i<mychecked.length;i++){
						mychecked[i].checked="cheecked";
					}
				}
				else{
					check_all.checked=false;
				}
				add_and_sub();
				calculate();
				//add_and_sub();
			}
		}
		var calculate=function(){
			var singleMoney=0,
				singleCount=0,
				itemMoney=0,
				allMoney=0,
				allCount=0;
				if(trs.length==0){
						mycount.innerHTML=0;
						mymoney.innerHTML=0;
				}
				for(var i=0;i<trs.length;i++){
					var tds=trs[i].cells;
					
					 if(tds[0].getElementsByTagName("input")[0].checked==true){
						singleMoney=tds[2].innerHTML;
						//console.log(singleMoney);
						singleCount=tds[3].getElementsByTagName('input')[0].value;
						//console.log(singleCount);
						itemMoney=singleMoney*singleCount;
						tds[4].innerHTML=itemMoney;
						allCount+=parseInt(singleCount);
						allMoney+=parseInt(itemMoney);
						mycount.innerHTML=allCount;
						mymoney.innerHTML=allMoney;
					}
					
				}
		};
		var add_and_sub=function(){
			for(var i=0;i<myAdd.length;i++){
				var bibao=(function(i){
					myAdd[i].onclick=function(){
						if(my_counts[i].getElementsByTagName("input")[0].value>=1){
							my_counts[i].getElementsByTagName("input")[0].value=parseInt(my_counts[i].getElementsByTagName("input")[0].value)+1;
							myreduce[i].innerHTML="-";
							calculate();
						}
					}
				})(i);
				bibao=null;
			}
				for(var i=0;i<myreduce.length;i++){
					var bibao2=(function(i){
						// if(myreduce[i].innerHTML=="-"){
							myreduce[i].onclick=function(){
								if(my_counts[i].getElementsByTagName("input")[0].value>1){
									my_counts[i].getElementsByTagName("input")[0].value=parseInt(my_counts[i].getElementsByTagName("input")[0].value)-1;
									//myreduce[i].innerHTML="-";
									calculate();
									if(my_counts[i].getElementsByTagName("input")[0].value==1){
										myreduce[i].innerHTML="";
									}
								}

							}
						//}
					})(i);
					bibao2=null;
				}
				// var myinput= my_counts[i].getElementsByTagName("input")[0];
				// my_counts.index=i;
				// myinput.index=i;
				// var myCurrentValue=parseInt(myinput.value);
				// myreduce[i].index=i;
				// var myreduce_one=myreduce[i].innerHTML;
				//console.log(myreduce_one);	
		};
		var del=function(){
			for(var i=0;i<mydel.length;i++){
				mydel[i].onclick=function(){
					this.parentNode.remove();
					calculate();
				}
			}
		};
		del();
	};
	window.addEventListener('load',init,false);
})();