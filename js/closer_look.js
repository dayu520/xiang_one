(()=>{
	function  loadPic(num=1){
		var url="data/closer_look.php";
		var params=location.search.slice(1);
		$.ajax({
			type:"get",
			url:url,
			data:params,
			success:function(data){
			 var html="";
			 if(data.length==1){
				 html+=	
					`<h3>${data[0].title}</h3>
					<span>${data[0].time}</span>
					<i></i>
					<div class="img_group">
					<img src="${data[0].url}" alt="">
					<span>${data[0].title}</span>
					</div>
					<p>${data[0].p}</p>
					<div class="footer clear">
						<span class="left2">${data[0].pre}</span>
						<span class="right2">${data[0].next}</span> 
					</div>
					` 
					$("#photo").html(html);

			 }else if(data.length==2){
					html+=	
					`<h3>${data[0].title}</h3>
					<span>${data[0].time}</span>
					<i></i>
					<div class="img_group">
					<img src="${data[0].url}" alt="">
					<span>${data[0].title}</span>
					<img src="${data[1].url}" alt="">
					</div>
					<p>${data[1].p}</p>
					<div class="footer clear">
						<span class="left2">${data[0].pre}</span>
						<span class="right2">${data[0].next}</span>	
					</div>
					` 
					$("#photo").html(html);	
				}else{
					html+=	
					`<h3>${data[0].title}</h3>
					<span>${data[0].time}</span>
					<i></i>
					<div class="img_group">
					<img src="${data[0].url}" alt="">
					<span>${data[0].title}</span>
					<img src="${data[1].url}" alt="">
					<img src="${data[2].url}" alt="">
					</div>
					<p>${data[2].p}</p>
					<div class="footer clear">
						<span class="left2">${data[0].pre}</span>
						<span class="right2">${data[0].next}</span>	
					</div>
					` 
					$("#photo").html(html);	
				}
			}
		})
	}
	function  loadPic2(num){
		var url="data/closer_look.php";
		var params=location.search.slice(1)+"&num="+num;
		$.ajax({
			type:"get",
			url:url,
			data:params,
			success:function(data){
			 var html="";
			 if(data.length==1){
				 html+=	
					`<h3>${data[0].title}</h3>
					<span>${data[0].time}</span>
					<i></i>
					<div class="img_group">
					<img src="${data[0].url}" alt="">
					<span>${data[0].title}</span>
					</div>
					<p>${data[0].p}</p>
					<div class="footer clear">
						<span class="left2">${data[0].pre}</span>
						<span class="right2">${data[0].next}</span> 
					</div>
					` 
					$("#photo").html(html);

			 }else if(data.length==2){
					html+=	
					`<h3>${data[0].title}</h3>
					<span>${data[0].time}</span>
					<i></i>
					<div class="img_group">
					<img src="${data[0].url}" alt="">
					<span>${data[0].title}</span>
					<img src="${data[1].url}" alt="">
					</div>
					<p>${data[1].p}</p>
					<div class="footer clear">
						<span class="left2">${data[0].pre}</span>
						<span class="right2">${data[0].next}</span>	
					</div>
					` 
					$("#photo").html(html);	
				}else{
					html+=	
					`<h3>${data[0].title}</h3>
					<span>${data[0].time}</span>
					<i></i>
					<div class="img_group">
					<img src="${data[0].url}" alt="">
					<span>${data[0].title}</span>
					<img src="${data[1].url}" alt="">
					<img src="${data[2].url}" alt="">
					</div>
					<p>${data[2].p}</p>
					<div class="footer clear">
						<span class="left2">${data[0].pre}</span>
						<span class="right2">${data[0].next}</span>	
					</div>
					` 
					$("#photo").html(html);	
				}
			}
		})
	}
	loadPic();

	var params=location.search.slice(1);
	var i=params.lastIndexOf("=");
	var n=parseInt(params.slice(i+1));
		$("ul.re_list>li:first-child").click(function(){
		n=10;
		loadPic2(n);
	})
	$("ul.re_list>li:nth-child(2)").click(function(){
		n=9;
		loadPic2(n);
	})
	
	$("ul.re_list>li:nth-child(3)").click(function(){
		n=4;
		loadPic2(n);
	})

	$("ul.re_list>li:nth-child(4)").click(function(){
		n=3;
		loadPic2(n);
	})

	$("ul.re_list>li:last-child").click(function(){
		n=7;
		loadPic2(n);
	})


	$("#photo").on("click","span.left2",function(){
	loadPic2(n-1);
	n--;
	})
	$("#photo").on("click","span.right2",function(){
	loadPic2(n+1);
	n++;
	})

})()