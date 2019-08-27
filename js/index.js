(function(){
	const LIWIDTH=1330; var n=0,TRANS=300,INTERVAL=2000,
	timer=null;
	var bannerImgs=$("[data-load=bannerImgs]");
	var bannerInds=$("[data-load=bannerInds]");
	$.get('data/banner.php?timeStamp='+new Date().getTime(),function(data){
		var html="";
		data.push(data[0]);
		for(var img of data ){
			html+=
			`	<li>
				<div class="progress_bar"></div>
				<img src="${img.href}" alt="">
				</li>`	
		}
		$("[data-load=bannerImgs]").html(html).css("width",LIWIDTH*data.length);
		$("[data-load=bannerInds]").html("<a href='javascript:;'></a>".repeat(data.length-1))
			.children().first().addClass("hover");
	})
	.then(()=>{
				function moveOnce(){
					n++;
					var left=LIWIDTH*n;
					bannerImgs.css("left",-left);
					bannerInds.children().eq(n-1).removeClass("hover");
					if(n==bannerImgs.children().size()-1){
						bannerInds.children().first().addClass("hover");
						setTimeout(function(){
							bannerImgs.css("transition","0s all linear");
							n=0;
							bannerImgs.css("left",0);	
							setTimeout(()=>{
								bannerImgs.css("transition","all 0.3s linear");
							},100);
						},TRANS);
					}else{
					  bannerInds.children().eq(n).addClass("hover");
					}   
				}
					timer=setInterval(moveOnce,INTERVAL+TRANS);

				$("#round_pic").on({
					"mouseover":function(){
						clearInterval(timer);
						timer=null;
					},
					"mouseout":function(){
						clearInterval(timer);
						timer=null;
						timer=setInterval(moveOnce,INTERVAL+TRANS);
					}
				})

				$("[data-move=right]").click(function(e){
					e.preventDefault;
					if(n<bannerInds.children().size()-1){
						n++;
						bannerImgs.css("left",-n*LIWIDTH);
						bannerInds.children().eq(n-1).removeClass("hover");
						bannerInds.children().eq(n).addClass("hover");
					}else{
						n++;
						bannerImgs.css("left",-n*LIWIDTH);
						bannerInds.children().eq(0).siblings().removeClass("hover");
						bannerInds.children().eq(0).addClass("hover");
						setTimeout(()=>{
							bannerImgs.css("transition","");
							bannerImgs.css("left",0);
							n=0;
							setTimeout(()=>{
							bannerImgs.css("transition","all .3s linear");
							},100)
						},TRANS)
					}

				})
			
				$("[data-move=left]").click(function(e){
					e.preventDefault;
				 if(n>0){
					n--;
					bannerImgs.css("left",-n*LIWIDTH);
					bannerInds.children().eq(n+1).removeClass("hover");
					bannerInds.children().eq(n).addClass("hover"); 
				 }else{
					bannerImgs.css("transition","");
					n=bannerImgs.children().size()-1;
					bannerImgs.css("left",-n*LIWIDTH);
					setTimeout(()=>{
						bannerImgs.css("transition","all 0.3s linear");
						n--;
						bannerImgs.css("left",-n*LIWIDTH);
						bannerInds.children().eq(0).removeClass("hover");
						bannerInds.children().eq(n).addClass("hover");
					},100)
				 }
				})	

				$("[data-load=bannerInds]").on("click","a",function(e){
					e.preventDefault;
					clearInterval(timer);
					timer=null;
					n=$(this).index();
					bannerImgs.css("left",-n*LIWIDTH);
					$("[data-load=bannerInds]").find(".hover").removeClass("hover");
					$(this).addClass("hover");
				})
			})
})();	



(function(){
var arr=[];
var detailUrl="closer_look.html?num=";
$.get("data/customer_case.php",
	function(data){
		var html="";
		for(var p of data){	
			html+=
				`
				<li class="oLi">
					<a href="${detailUrl+p.pid}" target="_blank">
						<img src="${p.href}" alt="">
						<div>
							<h3>${p.h3}</h3>
							<i></i>
							<p>
							${p.p}
							</p>
						</div>
					</a>
					</li>`						
				
		}
		$("#customer_case .list").html(html);			
	})
	.then(()=>{
		$("#customer_case ul.list>li").on({
			"mouseenter":function(){
				$(this).children().children("div").fadeTo(1000,1)
					.siblings().children().children("div").css("display","none");
			},
			"mouseleave":function(){
				$(this).children().children("div").css("display","none")
			}
		})
		
		
		$("#customer_case>ul.project_list").on("click","li",function(){
			if($(this).index()!=0){
				var n=$(this).index();
				$("#customer_case").css("height","441")
			}else{
				var n="";
				$("#customer_case").css("height","655");
			}
			$.get("data/customer_case.php",{cid:n},function(data){
				var html="";
				for(var p of data){				
					html+=
						`<li class="oLi">
							<a href="${detailUrl+p.pid}" target="_blank">
								<img src="${p.href}" alt="">
								<div>
									<h3>${p.h3}</h3>
									<i></i>
									<p>
									${p.p}
									</p>
								</div>	
							</a>
						 </li>`
					}
				$("#customer_case .list").html(html);
				var Lis=document.querySelectorAll("ul.list>li");
				for(let i=0;i<Lis.length;i++ ){
				setTimeout(function(){
					Lis[i].className="active2";
					},150)
				}
			}).then(()=>{
				$("#customer_case ul.list>li").on({
					"mouseenter":function(){
						$(this).children().children("div").fadeTo(1000,1)
							.siblings().children().children("div").css("display","none");
					},
					"mouseleave":function(){
						$(this).children().children("div").css("display","none")
					}
				})
		
			})	
		})
	})


})();

$("#hot_item .picture_carousel>li").on({
	"mouseenter":function(){
		$(this).children().children("div").css("display","block")
			.siblings().children().children("div").css("display","none");
		$(this).children().children("div").addClass("active")
			.siblings().children().children("div").removeClass("active");
	},
	"mouseleave":function(){
		$(this).children().children("div").css("display","none")
	}
})

$("#cooperative_partner div.partner_list").on("mouseover","img",function(){
	$(this).css("opacity","1")
		.siblings().css("opacity","0.7");	
})


var WIDTH=258;
var n=0;
var TRANS=300;
var INTERVAL=1500;
var timer=null;
var picture_carousel=$("#hot_item ul.picture_carousel");
var num=$("#hot_item ul.picture_carousel>li").size();
$("#hot_item>.neckrein li.right").click(function(e){
	e.preventDefault();
	n++;
	picture_carousel.css("left",-n*WIDTH);
	if(n>3){
	setTimeout(function(){
		picture_carousel.css("transition","0s all linear");
		picture_carousel.css("left",0);
		n=0;
		setTimeout(function(){
		picture_carousel.css("transition",".3s all linear");
		},100)
	},TRANS)	
	}
})

$("#hot_item>.neckrein li.left").click(function(e){
	e.preventDefault;
	if(n>0){
	n--;
	picture_carousel.css("left",-n*WIDTH);
	}else{
			picture_carousel.css("transition","0s all linear");
			n=4;
			picture_carousel.css("left",-4*WIDTH);
			setTimeout(function(){
				picture_carousel.css("transition",".3s all linear");
				n--;
				picture_carousel.css("left",-n*258);
			},100)		
	}
})

function Once(){
    n++;
	picture_carousel.css("left",-n*WIDTH);	
	if(n>3){
	setTimeout(function(){
		picture_carousel.css("transition","0s all linear");
		picture_carousel.css("left",0);
		n=0;
		setTimeout(function(){
		picture_carousel.css("transition",".3s all linear");
		},100)
	},300)	
	}
}
timer=setInterval(Once,INTERVAL+TRANS);

$("#hot_item>.neckrein li").on({
	"mouseover":function(){
		clearInterval(timer);
		timer=null;
	},
	"mouseout":function(){
	    timer=setInterval(Once,INTERVAL+TRANS);
	}
})

picture_carousel.children().on({
	"mouseover":function(){
		clearInterval(timer);
		timer=null;
	},
	"mouseout":function(){
	    timer=setInterval(Once,INTERVAL+TRANS);
	}
})


var WIDTH2=350;
var n2=0;
var TRANS2=300;
var INTERVAL2=1500;
var timer2=null;
var owl_item=$("#customer_feedback div.owl-item");
$(".buttons li.right").click(function(e){
	e.preventDefault();
	n2++;
	owl_item.css("left",-n2*WIDTH2);
	if(n2>2){
	setTimeout(function(){
		owl_item.css("transition","0s all linear");
		owl_item.css("left",0);
		n2=0;
		setTimeout(function(){
		owl_item.css("transition",".3s all linear");
		},100)
	},TRANS2)	
	}
})

$(".buttons li.left").click(function(e){
	e.preventDefault;
	if(n2>0){
	n2--;
	owl_item.css("left",-n2*WIDTH2);
	}else{
			owl_item.css("transition","0s all linear");
			n2=3;
			owl_item.css("left",-n2*WIDTH2);
			setTimeout(function(){
				owl_item.css("transition",".3s all linear");
				n2--;
				owl_item.css("left",-n2*WIDTH2);
			},100)		
	}
})

function Once2(){
	n2++;
	owl_item.css("left",-n2*WIDTH2);
	if(n2>2){
	setTimeout(function(){
		owl_item.css("transition","0s all linear");
		owl_item.css("left",0);
		n2=0;
		setTimeout(function(){
		owl_item.css("transition",".3s all linear");
		},100)
	},TRANS2)	
	}
}

timer2=setInterval(Once2,INTERVAL2+TRANS2);

$(".buttons li").mouseover(function(){
	clearInterval(timer2);
	timer2=null;
}).mouseout(function(){
	timer2=setInterval(Once2,INTERVAL2+TRANS2);
});


$("div.testimonials-content").mouseover(function(){
	clearInterval(timer2);
	timer2=null;
}).mouseout(function(){
	timer2=setInterval(Once2,INTERVAL2+TRANS2);
});
