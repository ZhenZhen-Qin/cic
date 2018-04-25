$(function(){
    var imagebox=$(".showbox").children('.imagebox')[0],//获得图片容器
		imagenum=$(imagebox).children().size(),//获得图片数量
		imageboxWidth=$(imagebox).width(),//获得图片容器的宽度
		imagewidth=imageboxWidth*imagenum;//获得图片的总宽度
        $(imagebox).css({'width' : imagewidth + "px"});
			setInterval(function(){
				$('.imagebox').append($('.imagebox img').first());
				$('.imagebox img').last().css({'width' :  "570px"});
                $('.imagebox img').first().animate({'width':'0px'},1000);
			},3000)
			
		})