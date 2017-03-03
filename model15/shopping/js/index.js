/**
 * Created by qingyun on 16/12/6.
 */
/**
 * 购物车模块功能实现
 * 1.实现全选功能
 * 2.实现总计功能 包括数量和总价
 * 3.商品数量的增加减少
 * 4.商品数量变化时,小计实时更新
 * 5.删除功能
 */

//初始化
var checkFields = document.getElementsByClassName("check");
var checkAllField = document.getElementsByClassName("check-all")[0];
var len = checkFields.length;
var tbody = document.getElementsByTagName("tbody")[0];
var tr = tbody.getElementsByTagName("tr");
var counts = document.getElementById("counts");
var money = document.getElementById("money");


//1.实现全选功能
    for(var i=0;i<len;i++){
        checkFields[i].onclick = function(){
            if(this.className == 'check-all check'){
                for(var j=0;j<len;j++){
                    checkFields[j].checked = this.checked;
                }
            }else{
                checkAllField.checked = false;
            }
            getTotal();
        }
    }

//2.实现总计功能
function getTotal(){
    var sale_count = 0;
    var sale_money = 0;

    for(var i=0;i<tr.length;i++){
        if(tr[i].getElementsByTagName("input")[0].checked == true){
            sale_count += parseInt(tr[i].getElementsByTagName("input")[1].value);
            sale_money += parseInt(tr[i].getElementsByClassName("subTotal")[0].innerHTML);
        }
    }
    counts.innerHTML = sale_count;
    money.innerHTML = sale_money;
}

//小计实时更新
function getSubTotal(tr){
    var tds = tr.cells;
    console.log("====tds",tds);
    var price = parseInt(tds[2].innerHTML);
    var count = parseInt(tr.getElementsByTagName("input")[1].value);
    var subTotal = price * count;
    tds[4].innerHTML = subTotal;
}

//商品数量增减
    for(var i=0;i<tr.length;i++){
        tr[i].onclick = function(event){
            var event = event || window.event;
            var ele = event.srcElement; //获取时间源
            var eleCls = ele.className;
            var input = this.getElementsByTagName("input")[1];
            var curVal = parseInt(input.value);
            var reduce = this.getElementsByClassName("reduce")[0];
            var add = this.getElementsByClassName("add")[0];
            
            switch (eleCls){
                case 'add':
                    input.value = curVal + 1;
                    reduce.innerHTML = "-";
                    getSubTotal(this);
                    getTotal();
                    break;

                case 'reduce':
                    if(curVal >1){
                        input.value = curVal -1;
                    }
                    if(curVal <=1){
                        input.value = 1;
                        reduce.innerHTML = "";
                    }
                    getSubTotal(this);
                    getTotal();
                    break;

                case 'del':
                    var conInfo = window.confirm("您确定要删除吗?");
                    if(conInfo){
                        this.remove();
                        getTotal();
                    }
                    break;

            }


        }
    }
