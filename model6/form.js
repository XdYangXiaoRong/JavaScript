var flag=true;
function getId(id){
	return document.getElementById(id).value;
}
function checkValue(dataName,data){
	if(data.length<=5||data.length>=15){
		  alert("请确保"+dataName+"的长度在5-15之间");
		  flag=false;


	}
	for(var i=0;i<data.length;i++){
		var dataCode=data.charCodeAt(i);
		if((dataCode>=65&&dataCode<=90)||(dataCode>=97&&dataCode<=122)||(dataCode>=48&&dataCode<=57)){
			if(i==0){
				if(dataCode>=48&&dataCode<=57){
					alert("请确保"+dataName+"的首字母不是数字!");
					flag=false;
				}
			}
		}
		else{
			 alert("请确保"+dataName+"由字母和数字组成!");
			 flag=false;
		}
	}
}
function checkLength(dataName,data){
	if(data.length<=6||data.length>=15){
		 alert("请确保"+dataName+"的长度在6-15之间!");
		 flag=false;
	}
}
function password(ps1,ps2){
	console.log(ps1);
	console.log(ps2);
	if(ps1!==ps2){
		ps2="";
		 alert("请确保两次输入的密码相等!");
		 flag=false;
	}
}
function Submit(){
	var user=getId('user');
	var name=getId('name');
	var ps1=getId('ps1');
	var ps2=getId('ps2');

	checkValue("用户名",user);
	if(flag==false){
		return;
	}
	checkValue("昵称",name);
	if(flag==false){
		return;
	}
	checkLength("密码",ps1);
	if(flag==false){
		return;
	}
	checkLength("确认密码",ps2);
	if(flag==false){
		return;
	}

	password(ps1,ps2);
}