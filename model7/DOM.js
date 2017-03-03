/*●getElementById() 获取特定 ID 元素的节点(页面多个同 名ID值只返回第一个)*/
var h1One=document.getElementById('you');
console.log(h1One);

/*getElementsByTagName("p") 获取相同元素的结点列表
返回数组,使用下标来获取*/
var pGroup=document.getElementsByTagName('p')[0];
console.log(pGroup);
pGroup.style.color="red";

/*getElementsByName("") 获取相同名称的结点列表,不是所有
表单都有name属性(form表单有),某些低版本的浏览器会出现兼容问题*/
 var userName=document.getElementsByName('user');
 console.log(userName);
 userName[0].value="hello world";
 userName[2].style.backgroundColor="pink";

/*getElementsByClassName() 获取相同的class属性的节点
使用的时候一定要使用下标[i]*/
var pClass=document.getElementsByClassName('pCla')[3];
pClass.style.color="blue";
pClass.style.fontSize="25px";

/*getAttribute('')得到对象的属性值*/
var  inputeType=document.getElementsByName('user')[1];
console.log(inputeType.getAttribute('type'));
console.log(inputeType.getAttribute('name'));
console.log(inputeType.getAttribute('value'));

/*setAttribute('对象','属性') 设置对象 的属性*/
inputeType.setAttribute('type','button');
inputeType.setAttribute('value','我被转换为一个按钮了');

/*removeAttribute('') 移除当前对象的属性*/   
var inputOne=document.getElementsByName('user')[0];//获取第一个文本框
inputOne.removeAttribute("date-Type");//date-Type定义的属性将不再被显示

/*innerHTML 当前对象标签内的所有内容,包含标签*/
/*innerText 当前对象标签内的文本内容,不包含标签*/ 
var divOne=document.getElementsByTagName('div')[0];
console.log(divOne.innerHTML);
console.log(divOne.innerText);  
function change(){
	var picture=document.getElementsByTagName('img')[0];
	picture.src="../res/dc2.jpg";                   
}