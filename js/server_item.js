(()=>{
	function loadPicsByPage(n=1,id=1){
	var url="data/server_item.php";
	var params=location.search.slice(1);
		$.ajax({
			type:"get",
			url:url,
			data:params,
			success:function(data){
				var html="";
				var html1="";
				var html2="";
				var html3="";
					var p=data.data[0];
					html+=`
						<span>${p.title}</span>
						<i></i>
						<span>${p.position}</span>`

					html3+=`
						<h4>${p.title}</h4>
						<i></i>
						<div id="server_item_pics" class="clear">
						</div>
						`
				$("#server_item").html(html3);	
				$("#top_bg").html(html);
				for(var p1 of data.data){
					html1+=
					`
					<div class="img">
						<img src="${p1.url}" alt="">
						<div  data-target="${p1.pid}">${p1.summary}</div>
					</div>	
					`
				}
				$("#server_item_pics").html(html1);
				var pno=data.pno;
				if(data.pageCount>1){
					html2+=`<li><a href="javascript:;">上一页</a></li>`;
					if(pno-1>0){
					html2+=`<li><a href="javascript:;">${pno-1}</a></li>`;
					}
					html2+=`<li><a href="javascript:;"  class="active">${pno}</a></li>`;
					if(pno+1<=data.pageCount){
					html2+=`<li><a href="javascript:;">${pno+1}</a></li>`;
					}
					html2+=`<li><a href="javascript:;">下一页</a></li>`;
					$("ul.page_num").html(html2);
					if(pno==1){
					$("ul.page_num>li:first-child a").addClass("disabled");
					}
					if(pno==data.pageCount){
					$("ul.page_num>li:last-child a").addClass("disabled");
					}
					if(pno!=1&&pno!=data.pageCount){
					$("ul.page_num>li:last-child a,ul.page_num>li:first-child a").removeClass("disabled");
					}
				}

				var m=params.lastIndexOf("d");
				var key=params.slice(m+2);
				if(key==2){
					$("#server_item_list>ul>li:first-child")
						.css("background","#37474f");
					$("#server_item_list>ul>li:first-child>span")
						.css("color","#fff");
				}else if(key==3){
					$("#server_item_list>ul>li:nth-child(2)")
								.css("background","#37474f");
					$("#server_item_list>ul>li:nth-child(2)>span")
											.css("color","#fff");
				
				}else if(key==4){
					$("#server_item_list>ul>li:nth-child(3)")
								.css("background","#37474f");
					$("#server_item_list>ul>li:nth-child(3)>span")
											.css("color","#fff");
				}else{
					$("#server_item_list>ul>li:nth-child(4)")
								.css("background","#37474f");
					$("#server_item_list>ul>li:nth-child(4)>span")
											.css("color","#fff");
				}
			},
			error:function(){
				alert("网络错误");
			}
		})
	}

	function loadPicsByPage2(n=1,id=1){
	var url="data/server_item.php";
	var params=location.search.slice(1)+"&pno="+n+"&id="+id;
		$.ajax({
			type:"get",
			url:url,
			data:params,
			success:function(data){
				var html="";
				var html1="";
				var html2="";
				var html3="";
					var p=data.data[0];
					html+=`
						<span>${p.title}</span>
						<i></i>
						<span>${p.position}</span>`

					html3+=`
						<h4>${p.title}</h4>
						<i></i>
						<div id="server_item_pics" class="clear">
						</div>
						`
				$("#server_item").html(html3);	
				$("#top_bg").html(html);
				for(var p1 of data.data){
					html1+=
					`
					<div class="img">
						<img src="${p1.url}" alt="">
						<div  data-target="${p1.pid}">${p1.summary}</div>
					</div>	
					`
				}
				$("#server_item_pics").html(html1);
				var pno=data.pno;
				if(data.pageCount>1){
					html2+=`<li><a href="javascript:;">上一页</a></li>`;
					if(pno-1>0){
					html2+=`<li><a href="javascript:;">${pno-1}</a></li>`;
					}
					html2+=`<li><a href="javascript:;"  class="active">${pno}</a></li>`;
					if(pno+1<=data.pageCount){
					html2+=`<li><a href="javascript:;">${pno+1}</a></li>`;
					}
					html2+=`<li><a href="javascript:;">下一页</a></li>`;
					$("ul.page_num").html(html2);
					if(pno==1){
					$("ul.page_num>li:first-child a").addClass("disabled");
					}
					if(pno==data.pageCount){
					$("ul.page_num>li:last-child a").addClass("disabled");
					}
					if(pno!=1&&pno!=data.pageCount){
					$("ul.page_num>li:last-child a,ul.page_num>li:first-child a").removeClass("disabled");
					}
				}
			},
			error:function(){
				alert("网络错误");
			}
		})
	}
	loadPicsByPage();
    
	$("ul.page_num").on("click","li a:not(.disabled):not(.active)",e=>{
		var a=$(e.target);
		var pno=parseInt($("ul.page_num>li>a.active").html());
		if(a.parent().is(":first-child"))
		{ 
			loadPicsByPage2(n=pno-1,id=1)
		}
		 else if(a.parent().is(":last-child"))
		{
			loadPicsByPage2(n=pno+1,id=1)
		}
		else 
		{	
			loadPicsByPage2(n=a.html(),id=1)
		};
	})

	$("#server_item_list").on("click","ul>li>span:not('.double>li>span')",function(){	
		$(this).parent().css("background","#37474f")
			.siblings().css("background","");
		$(this).css("color","#fff");
		$(this).parent().siblings().children("span").css("color","#000")	
	})

	$("#server_item_list").on("click","ul>li>span",function(){
		var id=$(this).parent().index()+2;
		loadPicsByPage2(n=1,id=id);
	})
	$("#server_item_list").on("click","ul>ul.double>li>span",function(){
		var id=$(this).parent().index()+6;
		$(this).parent().parent().parent().children().children("span").css("color","#000");
		$(this).parent().parent().parent().children("li:nth-child(4)").css("background","#37474f");
		$(this).parent().parent().parent().children("li:nth-child(4)").siblings().css("background","#f2f2f2");
		$(this).parent().parent().parent().children("li:nth-child(4)").children("span").css("color","#fff")
		loadPicsByPage2(n=1,id=id);
	})
	
	$("#server_item").on("click","div.img>div",function(){
		var num=$(this).data("target");
		window.location.href=`details.html?&num=${num}`;
	})
})();

	
