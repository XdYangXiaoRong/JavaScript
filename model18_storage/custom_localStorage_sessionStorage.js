var username=document.getElementById('userName');
var email=document.getElementById('email');
var telephone=document.getElementById('telephone');
var tips=document.getElementById('tips');
var allInformation=document.getElementById('allInformation');
	function saveData(){
		var person=new Object();
		person.name=username.value;
		person.email=email.value;
		person.telephone=telephone.value
		person.tips=tips.value;
		var PersonDate=JSON.stringify(person);//存储JSON格式数据通过JSON.stringify(data) 将一个对象转换成JSON格式的数据串,返回转换后的串 
		localStorage.setItem(person.name,PersonDate);
		var newdiv=document.createElement('div');
		newdiv.setAttribute('class',"onePerson");
		newdiv.setAttribute('name',person.name);
		var result="姓名:"+person.name+"<br>"+"邮箱:"+person.email+"<br>"+"电话:"+person.telephone+"<br>"+"备注:"+person.tips;
		allInformation.appendChild(newdiv);
		newdiv.innerHTML=result;
	}
	function showInfo(){
		var searchName=document.getElementById('search').value;
		var NameString=localStorage.getItem(searchName);
		// if(NameString!=''&&NameString!=null){
		// 	var data=JSON.parse(NameString);//JSON.parse(data) 将数据解析成对象,返回解析后的对象
		// 	var result="姓名:"+data.name+"<br>"+"邮箱:"+data.email+"<br>"+"电话:"+data.telephone+"<br>"+"备注:"+data.tips+"<br>";
		// 	document.getElementById("show").innerHTML=result;
		// }
		// else{
		// 	alert("不存在该用户");
		// }
		var newdiv=document.getElementsByClassName('onePerson');
		var ln=newdiv.length;
		for(var i=0;i<ln;i++){
			var name=newdiv[i].getAttribute("name");
			if(name==searchName){
				newdiv[i].style.backgroundColor="gold";
			}
		}


	}

