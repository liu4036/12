$(function(){
	document.addEventListener("touchmove", function(e) {e.preventDefault();}, false);
	var winHeight = $(document).height();
	$('.page').css("height",(winHeight-76)+"px");
	$('.swiper').css("height",(winHeight-76)+"px");
	$('.one_out').css("height",(winHeight-76)+"px");
	$('.nr_out').css("height",(winHeight-76)+"px");
	$('.shade').css("height",(winHeight-76)+"px");
	$('.swiper-container').css("height",(winHeight-76)+"px");
	var oaudio = document.getElementById("mp3");
	var swiperV = new Swiper('.swiper-container-v', {
	        direction: 'vertical',
	        spaceBetween: 155
	    });


	oaudio.play();
	$("video")[0].addEventListener("playing",function() {
            oaudio.pause();
	},false);
	$("video")[0].addEventListener("ended",function() {
           oaudio.play();
	},false);
	$("video")[1].addEventListener("playing",function() {
            oaudio.pause();
	},false);
	$("video")[1].addEventListener("ended",function() {
           oaudio.play();
	},false);
	$("video")[2].addEventListener("playing",function() {
            oaudio.pause();
	},false);
	$("video")[2].addEventListener("ended",function() {
           oaudio.play();
	},false);
	$("video")[3].addEventListener("playing",function() {
            oaudio.pause();
	},false);
	$("video")[3].addEventListener("ended",function() {
           oaudio.play();
	},false);




// loading
	var loadimg=function(imgs,callback){
        if(!imgs){return false};//参数判断
        var img=[];
        var len=imgs.length;
       	var loadedCount = 0;
        for(var i=0;i<len;i++){
            img[i]=new Image();
            img[i].src=imgs[i];
            img[i].onload = function(){
            	loadedCount++;
            	$('.loading span').html(Math.ceil(loadedCount/len*100));
            	if (loadedCount>=len){
					callback ? callback.apply(img) : null;
				}
            }
        }
    }
    var imgs2=["./images/loading_bg.jpg"];
	var imgs=["./images/bg.jpg","./images/dm1.jpg","./images/y1.png","./images/y2.png","./images/zhi.png","./images/tm.jpg","./images/k1.png","./images/k2.png","./images/k3.png","./images/k4.png","./images/l1.jpg","./images/l2.jpg","./images/l3.jpg","./images/l4.jpg","./images/lou1.png","./images/lou2.png"];
	loadimg(imgs2,function(){
		$(".shade").css({"background":"url(images/loading_bg.jpg) 0 bottom no-repeat"});
	});
	loadimg(imgs,function(){
			$('.loading').fadeOut(function(){

			$('.shade').css({"display":"none"});
			$('.loading').css({"display":"none"});
			$(".ind1_text1_k1").addClass("indk1");
			$(".ind1_text1_k2").addClass("indk2");
			$(".ind1_text1_k3").addClass("indk3");
			$(".ind1_text1_k4").addClass("indk4");
			$(".ind1_text2_top").addClass("ind1_text2_top_1");
			$(".ind1_text2_bottom").addClass("ind1_text2_top_2");
			$(".ind1_text3").addClass("indt3");
			$(".ind1_text4").addClass("indt4");
			$(".ind1_text5").addClass("indt5");
			$(".yun_left").addClass("yun_l")
			$(".yun_left2").addClass("yun_l2");
			setTimeout(function(){
				$(".yun_left3").addClass("yun_l")
			},3000)
			setTimeout(function(){
				$(".yun_left2").removeClass("yun_l2");
				$(".yun_left2").addClass("yun_l")
			},6000)

			$(".yun_right").addClass("yun_r");
			$(".yun_right2").addClass("yun_r2");
			setTimeout(function(){
				$(".yun_right3").addClass("yun_r")
			},3000)
			setTimeout(function(){
				$(".yun_right2").removeClass("yun_r2");
				$(".yun_right2").addClass("yun_r")
			},6000)
			$(".zhi_ul_li_b").addClass("baideng");
			$(".page4_btn_span").addClass("baideng");
		});
	});


	// 首页滑动部分
	function syremove(){
		$(".nr_out").removeClass("ping1");
		$(".nr_out").removeClass("ping2");
		$(".nr_out").removeClass("ping3");
		$(".nr_out").removeClass("ping4");
		$(".ind1_lou1").removeClass("ping1_lou1");
		$(".ind1_lou1").removeClass("ping1_lou3");
		$(".ind1_lou1").removeClass("ping1_lou5");
		$(".ind1_lou1").removeClass("ping1_lou7");
		$(".ind1_lou2").removeClass("ping1_lou2");
		$(".ind1_lou2").removeClass("ping1_lou4");
		$(".ind1_lou2").removeClass("ping1_lou6");
		$(".ind1_lou2").removeClass("ping1_lou8");
		$(".one_dm").removeClass("dml1");
		$(".one_dm").removeClass("dml2");
		$(".one_dm").removeClass("dml3");
		$(".one_dm").removeClass("dml4");
	}
	var ind=1;

	$('.one_out').bind("swipeRight",function(){
		if(ind==1){
			syremove();
			$(".nr_out").addClass("ping1");
			$(".ind1_lou1").addClass("ping1_lou1");
			$(".ind1_lou2").addClass("ping1_lou2");
			$(".one_dm1").css({"display":"block"});

			setTimeout(function(){
				$(".one_dm1").css({"display":"none"});
				$(".fx_btn_left").css({"display":"block"})
				$(".fx_btn_right").css({"display":"block"})
				$(".ind2_text1").addClass("ind2_text1z");
				$(".ind2_text2").addClass("ind2_text2z");
				$(".ind2_text3").addClass("ind2_text3z");
				$(".ind2_text4").addClass("ind2_text4z");
				$(".ind2_text5").addClass("ind2_text4z");
				$(".ind2_text6").addClass("ind2_text5z");

			},500)
			$(".one_dm").addClass("dml1");
		}
		if(ind==2){
			syremove();
			$(".nr_out").addClass("ping2");
			$(".ind1_lou1").addClass("ping1_lou3");
			$(".ind1_lou2").addClass("ping1_lou4");
			$(".one_dm2").css({"display":"block"});
			$(".fx_btn_left").css({"display":"none"})
			$(".fx_btn_right").css({"display":"none"})
			setTimeout(function(){
				$(".one_dm2").css({"display":"none"});
				$(".fx_btn_right").css({"display":"block"})
			},500)
			$(".one_dm").addClass("dml2");
		}
		ind++;
		if(ind>=3){
			ind=3;
		}
	}).bind("swipeLeft",function(){
		if(ind==3){
			syremove();
			$(".nr_out").addClass("ping3");
			$(".ind1_lou1").addClass("ping1_lou5");
			$(".ind1_lou2").addClass("ping1_lou6");
			$(".one_dm2").css({"display":"block"});
			$(".fx_btn_right").css({"display":"none"})
			setTimeout(function(){
				$(".one_dm2").css({"display":"none"});
				$(".fx_btn_left").css({"display":"block"})
				$(".fx_btn_right").css({"display":"block"})
			},500)
			$(".one_dm").addClass("dml3");
			$(".fx_1").css({"display":"none"});
			$(".fx_2").css({"display":"none"});
		}
		if(ind==2){
			syremove();
			$(".nr_out").addClass("ping4");
			$(".ind1_lou1").addClass("ping1_lou7");
			$(".ind1_lou2").addClass("ping1_lou8");
			$(".one_dm").addClass("dml4");
			$(".one_dm1").css({"display":"block"});
			$(".fx_btn_left").css({"display":"none"})
			$(".fx_btn_right").css({"display":"none"})
			setTimeout(function(){
				$(".one_dm1").css({"display":"none"});
			},500)
		}
		ind--;
		if(ind<=1){
			ind=1;
		}
	});

	// 点击质字大楼
	$('.zhi_ul li').tap(function(){
		$(".zhi_out").removeClass("zhizilouh");
		$(".zhi_out").addClass("zhizilou");
		$(".zhi_ul").css({"display":"none"});
		$(".two_out").css({"z-index":"6"});
		$(".two_out").removeClass("four4spz");
		$(".two_out").addClass("four4sp");
		$(".fx_btn_right").css({"display":"none"});
		$(".fx_1").css({"display":"none"});
		$(".fx_2").css({"display":"none"});
		setTimeout(function(){
			$(".one_out").css({"display":"none"});
		},500)
	});
	var ceng=$(".page1").height()+155;
	$('.zhi_ul li').eq(0).tap(function(){
			$(".page").removeClass("swiper-slide-visible");
			$(".page").removeClass("swiper-slide-active");
			$(".swiper-wrapper").css({"-webkit-transform" :"translate3d(0px, 0px, 0px);"})
			$(".page1").addClass("swiper-slide-visible");
			$(".page1").addClass("swiper-slide-active");
		});

	$('.zhi_ul li').eq(1).tap(function(){
		$(".page").removeClass("swiper-slide-visible");
		$(".page").removeClass("swiper-slide-active");
		$(".swiper-wrapper").css({"-webkit-transform" :"translate3d(0px, "+-ceng+"px, 0px);"})
		$(".page2").addClass("swiper-slide-visible");
		$(".page2").addClass("swiper-slide-active");
	});

	$('.zhi_ul li').eq(2).tap(function(){
		$(".page").removeClass("swiper-slide-visible");
		$(".page").removeClass("swiper-slide-active");
		$(".swiper-wrapper").css({"-webkit-transform" :"translate3d(0px, "+-ceng*2+"px, 0px);"})
		$(".page3").addClass("swiper-slide-visible");
		$(".page3").addClass("swiper-slide-active");
	});

	$('.zhi_ul li').eq(3).tap(function(){
		$(".page").removeClass("swiper-slide-visible");
		$(".page").removeClass("swiper-slide-active");
		$(".swiper-wrapper").css({"-webkit-transform" :"translate3d(0px, "+-ceng*3+"px, 0px);"})
		$(".page4").addClass("swiper-slide-visible");
		$(".page4").addClass("swiper-slide-active");
	});

	$('.tm_out').tap(function(){
		$(".tm_nr").addClass("tmk");
		setTimeout(function(){
			$('.tm_out').css({"display":"none"});
			$(".car_out").css({"z-index":"6"});
			$(".car_text").addClass("cartext");
		},500);
	});

	$('.car').tap(function(){
			$(".car").addClass("car_chu");
			$(".car_text").addClass("cartextz");
			setTimeout(function(){
				$(".text4_left").addClass("text4_left_chuxian");
				$(".text4_right").addClass("text4_right_chuxian");
				$('.fx_btn_out2').css({"display":"block"});
				$(".fx_btn_out2").addClass("four4sp");

			},500);
	});

	$('.car_text').tap(function(){
			$(".car").addClass("car_chu");
			$(".car_text").addClass("cartextz");
			setTimeout(function(){
				$(".text4_left").addClass("text4_left_chuxian");
				$(".text4_right").addClass("text4_right_chuxian");
				$('.fx_btn_out2').css({"display":"block"});
				$(".fx_btn_out2").addClass("four4sp");

			},500);

	});


	$('.page4_btn').tap(function(){
			$(".two_out").removeClass("four4sp");
			$(".two_out").addClass("four4spz");
			$(".two_out").css({"z-index":"1"});
			$(".zhi_ul").css({"display":"block"});
			$(".zhi_out").removeClass("zhizilou");
			$(".zhi_out").addClass("zhizilouh");
			setTimeout(function(){
				$(".fx_1").css({"display":"inline-block"})
				$(".fx_2").css({"display":"inline-block"})
				$(".fx_1").addClass("foursp");
				$(".fx_2").addClass("foursp");
			},500)
	});

	$('.zhi_btn').tap(function(){
			$(".two_out").removeClass("four4sp");
			$(".two_out").addClass("four4spz");
			$(".two_out").css({"z-index":"1"});
			$(".zhi_ul").css({"display":"block"});
			$(".zhi_out").removeClass("zhizilou");
			$(".zhi_out").addClass("zhizilouh");
			syremove()
			$(".nr_out").css({"right":"-1280px"});
			ind=3;
			$(".one_out").css({"display":"block"});
			setTimeout(function(){
				$(".fx_1").css({"display":"inline-block"})
				$(".fx_2").css({"display":"inline-block"})
				$(".fx_1").addClass("foursp");
				$(".fx_2").addClass("foursp");
			},500)
	});
	$('.text1_right').tap(function(){
		$(".sp_out").css({"display":"block"});
		$(".sp_out").removeClass("four4spz");
		$(".sp_out").addClass("four4sp");
	});
	$('.text2_right').tap(function(){
		$(".sp_out").css({"display":"block"});
		$(".sp_out").removeClass("four4spz");
		$(".sp_out").addClass("four4sp");
	});
	$('.text3_right').tap(function(){
		$(".sp_out").css({"display":"block"});
		$(".sp_out").removeClass("four4spz");
		$(".sp_out").addClass("four4sp");
	});
	$('.text4_right').tap(function(){
		$(".sp_out").css({"display":"block"});
		$(".sp_out").removeClass("four4spz");
		$(".sp_out").addClass("four4sp");
	});
	$('.sp_close').tap(function(){
		$(".sp_out").removeClass("four4sp");
		$(".sp_out").addClass("four4spz");
		oaudio.play();
		setTimeout(function(){
			$(".sp_out").css({"display":"none"});
		})
	});

	$(".fx_12").tap(function(){
		location.href="http://www.sagitar-premium.com/launch/m";
	})

	$(".fx_1").tap(function(){
		location.href="http://www.sagitar-premium.com/launch/m";
	})

	$(".fx_2").tap(function(){
		$('.share_tip').fadeIn();
	 	$('.shade1').show();
	})

	$(".fx_22").tap(function(){
		$('.share_tip').fadeIn();
	 	$('.shade1').show();

	})

	$('.shade1,.share_tip').tap(function(){
		$('.shade1').hide();
		$('.share_tip').fadeOut();
	});

	$('.music').click(function(){
        if(! oaudio.paused){
            $('.music').css("background","url(images/kaiguanguan.png) 0 0 no-repeat");
            oaudio.pause();
        }else{
             $('.music').css("background","url(images/kaiguan.png) 0 0 no-repeat");
            oaudio.play();
        }
    });



})
