$(".menus li").mouseover(function(){
    var value=$(this).html();
    $.ajax({
        type:"get",
        url:"/",
        dataType:"json",
        data:{
            'value':value
        },
        success:function(data){

            var oDiv=$("#box");
            oDiv.html('');
            $.each(data,function(index,obj){
            var otr=$("<tr></tr>");
            otr.append('<td>'+obj['name']+'</td><td>'+obj['date']+'</td><td>'+obj['place']+'</td>');
            oDiv.append(otr);
            })
            
        },
        error:function(){
            alert("请求失败");
        }
    })
})