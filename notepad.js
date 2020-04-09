var $dlgGoto=(function(){
    var cfg={
        container:'body',
    };
    var html='<div class="notepad-dlg-font">'+
        '<div class="dialog-box">'+
            '<div class="titlebar">'+
                '<p class="title">字体</p>'+
                '<span class="close-btn">×</span>'+
            '</div>'+
            '<div class="main">'+
                '<div style="position:absolute;top:10px;left:10px;" class="mainLi">'+
                    '<label class="font">字体(L):</label><br/>'+
                    '<input type="text" class="fontType"/>'+
                    '<div class="fonttype">'+
                        '<ul class="typeul">'+
                            '<li style="font-family:Arial;" class="typeli">Arial</li>'+
                            '<li style="font-family:SimHei;" class="typeli">黑体</li>'+
                            '<li style="font-family:Microsoft YaHei;" class="typeli">微软雅黑</li>'+
                            '<li style="font-family:KaiTi;" class="typeli">楷体</li>'+
                            '<li style="font-family:SimSun;" class="typeli">宋体</li>'+
                            '<li style="font-family:MingLiU;" class="typeli">细明体</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
                '<div style="position:absolute;top:10px;left:130px;" class="mainLi">'+
                    '<label class="font">字型(Y):</label><br/>'+
                    '<input type="text" class="fontWeight"/>'+
                    '<div class="fontweight">'+
                        '<ul class="weightul">'+
                            '<li class="weightli">常规</li>'+
                            '<li style="font-style:italic;" class="weightli">斜体</li>'+
                            '<li style="font-weight:bold;" class="weightli">粗体</li>'+
                            '<li style="font-style:italic;font-weight:bold;" class="weightli">粗偏斜体</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
                '<div style="position:absolute;top:10px;left:230px;" class="mainLi">'+
                    '<label class="font">大小(S):</label><br/>'+
                    '<input type="text" class="fontSize"/>'+
                    '<div class="fontsize">'+
                        '<ul class="sizeul">'+
                            '<li class="sizeli">8</li>'+
                            '<li class="sizeli">9</li>'+
                            '<li class="sizeli">10</li>'+
                            '<li class="sizeli">11</li>'+
                            '<li class="sizeli">12</li>'+
                            '<li class="sizeli">14</li>'+
                            '<li class="sizeli">16</li>'+
                            '<li class="sizeli">18</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
                '<fieldset class="example">'+
                    '<legend style="font-size:12px;">示例</legend>'+
                    '<span class="examplefont">AaBbYyZz</span>'+
                '</fieldset>'+
                '<div class="scr">'+
                    '<span class="scrtext">脚本</span><br/>'+
                    '<select class="srcsel">'+
                    '<option value="xi">西欧语言</option>'+
                    '<option value="zhong">中文</option>'+
                  '</select>'+
                '</div>'+
                '<input class="btn-font" type="button" value="确定"/>'+
                '<input class="btn-cancel" type="button" value="取消"/>'+
            '</div>'+
        '</div>'+
    '</div>';
    var $dlg=$(html);
    function show($text){
        $(cfg.container).append($dlg);
        var family="not specified",fstyle="normal",fweight="normal",size=15;
        
        // 字体
        $(".typeul .typeli").on("mouseover",function(){
            $(this).css("background-color","rgb(181, 233, 253)");
        })
        $(".typeul .typeli").on("mouseout",function(){
            $(this).css("background-color","white");
        })
        $(".typeul .typeli").on("click",function(){
            $(".fontType").val($(this).html());
            var arr=$(this).attr("style").split(";")[0].split(":");
            $(".examplefont").css(arr[0],arr[1]);
            family=arr[1];
        })
        // 字型
        $(".weightul .weightli").on("mouseover",function(){
            $(this).css("background-color","rgb(181, 233, 253)");
        })
        $(".weightul .weightli").on("mouseout",function(){
            $(this).css("background-color","white");
        })
        $(".weightul .weightli").on("click",function(){
            $(".fontWeight").val($(this).html());
            if($(this).html()=="常规"){
                $(".examplefont").css("font-style","normal");
                $(".examplefont").css("font-weight","normal");
                fstyle="normal";
                fweight="normal";
            }else if($(this).html()=="斜体"){
                $(".examplefont").css("font-style","italic");
                $(".examplefont").css("font-weight","normal");
                fstyle="italic";
                fweight="normal";
            }else if($(this).html()=="粗体"){
                $(".examplefont").css("font-style","normal");
                $(".examplefont").css("font-weight","bold");
                fstyle="normal";
                fweight="bold";
            }else if($(this).html()=="粗偏斜体"){
                $(".examplefont").css("font-style","italic");
                $(".examplefont").css("font-weight","bold");
                fstyle="italic";
                fweight="bold";
            }
        })
        // 大小
        $(".sizeul .sizeli").on("mouseover",function(){
            $(this).css("background-color","rgb(181, 233, 253)");
        })
        $(".sizeul .sizeli").on("mouseout",function(){
            $(this).css("background-color","white");
        })
        $(".sizeul .sizeli").on("click",function(){
            $(".fontSize").val($(this).html());
            $(".examplefont").css("font-size",parseInt($(this).html()));
            size=parseInt($(this).html())
        })

        // 脚本
        $('.srcsel').change(function(){
            if($('.srcsel').val()=="zhong"){
                $(".examplefont").html("中文软件");
            }else if($('.srcsel').val()=="xi"){
                $(".examplefont").html("AaBbYyZz");
            }
        })

        // 关闭和取消
        var $close=$(".close-btn");
        $close.click(function(){ 
            $dlg.remove();
        })
        var $cancel=$(".btn-cancel");
        $cancel.click(function(){ 
            $dlg.remove();
        })

        // 确认
        var $font=$(".btn-font");
        $font.click(function(){ 
            $text.css({
                "font-family":family,
                "font-style":fstyle,
                "font-weight":fweight,
                "font-size":size
            })
            $dlg.remove();
        })

    }

    return{
        show:show
    };

}());