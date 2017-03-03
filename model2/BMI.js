
function calculate(){
	var string;
	var height=document.getElementById("height").value;
	var weight=document.getElementById("weight").value;
	height=parseFloat(height);
	weight=parseFloat(weight);
	if(isNaN(height)||isNaN(weight)||height<=0||weight<=0){
		alert("请确保输入的身高,体重都是整数且大于0!");
	}
	else{
      var bmi=weight*10000/(height*height);
      var str="您的BMI值为:"+bmi.toFixed(2)+",身体状况:";
      if(bmi<=18.4){
      	string="偏瘦"
      }
	  else if(bmi<=23.9){
		string="正常";
	  }
	  else if(bmi<=27.9){
		string="过重";
	  }
	 else{
		string="肥胖";
	 }
	document.getElementById("show").value=str+string;

    
   
	}
}
