
function changeVal(obj){
 
        var val=document.getElementById("gengduo");
    if(val.innerHTML=="更多"){
   obj.innerHTML="收起";
}else if(val.innerHTML=="收起")
  obj.innerHTML="更多";
    }

      $(document).ready(function(){
        $('#lxwm').popover({
        trigger : 'hover',//鼠标以上时触发弹出提示框
        html:true,//开启html 为true的话，data-content里就能放html代码了
        content:"<img src='./MingRengWang/imgs/qq.jpg' style='width: 250px;height: 250px;'>"
    }); 
      });
