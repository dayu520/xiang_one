(()=>{
	function loadDetails(){
		var url="data/details.php";
		var num2=10;
		var oCss="";
		var Zindex=0;
		var iNow=0;
		var params=location.search.slice(1);
		$.ajax({
			type:"get",
			url:url,
			data:params,
			success:function(data){
				var html="";
				var html2="";
				var html3="";
				var html4="";
				for(var i=0;i<num2;i++){
					if(i<5){
						Zindex++;
						}else{Zindex--;}
						if(data.length==2){
						html3+=
							`<li class="piece">
								<a href=""></a>
								<a href=""></a>
								<span></span>
								<span></span>
							</li>`;	
					}else{
						html3+=
						`<li class="piece">
							<a href=""></a>
							<a href=""></a>
							<a href=""></a>
							<span></span>
							<span></span>
						</li>`;	
					}
					
				}
				$(".pic_details").html(html3);
				for(var j=0;j<data.length;j++){
				html4+=
						`
						<li>${j+1}</li>
						`;
				oCss+=
					`
					#pic_list ul.pic_details li>a:nth-child(${j+1}){
					background:url("${data[j].url}") no-repeat;}
					`	
				}
				for(var i=0;i<num2;i++){
				oCss+=
				`
				#pic_list ul.pic_details li:nth-of-type(${i+1})
					a{background-position:${-i*40}px}`;
				oCss+=
				`#pic_list ul.pic_details li:nth-of-type(${i+1}) 
				{z-index:${Zindex}}`;

				}
			
				$("ul.btns").html(html4);
				var aLi=document.getElementsByClassName("piece");
				$("#css")[0].innerHTML+=oCss;
				var aBtns=$(".btns>li");
				$(".btns>li:first-child").addClass("active");
				for(var i=0;i<aBtns.length;i++){
					(function(a){
						aBtns[a].onclick=function(){
							for(var i=0;i<aLi.length;i++){
								aLi[i].style.transition=`0.5s ${i*50}ms`;
								aLi[i].style.transform=`rotateX(${-a*90}deg)`;
							}
								this.className="active";
								aBtns[iNow].className="";
								iNow=a;
						}
					})(i)
				}
				html+=
					`
					<h4>${data[0].title}</h4>
					<p>${data[0].introducte}</p>
					<div class="building_information">
						<span>${data[0].measure}</span>
						<span>${data[0].addr}</span>
						<br/>
						<span>${data[0].style}</span>	
					</div>					
					`
				$("div.right").html(html);
				html2+=
					`
					<h5>详细信息</h5>
					<i></i>
					<p>${data[0].detailed}</p> 
					`;
				$("div.content").html(html2);
			}
		
		})
	}

	function loadDetails2(num){
	var url="data/details.php";
	var num2=10;
	var oCss="";
	var Zindex=0;
	var iNow=0;
	var params=location.search.slice(1)+"&num="+num;
	$.ajax({
		type:"get",
		url:url,
		data:params,
		success:function(data){
			var html="";
			var html2="";
			var html3="";
			var html4="";
			for(var i=0;i<num2;i++){
				if(i<5){
					Zindex++;
					}else{Zindex--;}
					if(data.length==2){
					html3+=
						`<li class="piece">
							<a href=""></a>
							<a href=""></a>
							<span></span>
							<span></span>
						</li>`;	
				}else{
					html3+=
					`<li class="piece">
						<a href=""></a>
						<a href=""></a>
						<a href=""></a>
						<span></span>
						<span></span>
					</li>`;	
				}
				
			}
			$(".pic_details").html(html3);
			for(var j=0;j<data.length;j++){
			html4+=
					`
					<li>${j+1}</li>
					`;
			oCss+=
				`
				#pic_list ul.pic_details li>a:nth-child(${j+1}){
				background:url("${data[j].url}") no-repeat;}
				`	
			}
			for(var i=0;i<num2;i++){
			oCss+=
			`
			#pic_list ul.pic_details li:nth-of-type(${i+1})
				a{background-position:${-i*40}px}`;
			oCss+=
			`#pic_list ul.pic_details li:nth-of-type(${i+1}) 
			{z-index:${Zindex}}`;

			}
		
			$("ul.btns").html(html4);
			var aLi=document.getElementsByClassName("piece");
			$("#css")[0].innerHTML+=oCss;
			var aBtns=$(".btns>li");
			for(var i=0;i<aBtns.length;i++){
				(function(a){
					aBtns[a].onclick=function(){
						for(var i=0;i<aLi.length;i++){
							aLi[i].style.transition=`0.5s ${i*50}ms`;
							aLi[i].style.transform=`rotateX(${-a*90}deg)`;
						}
							this.className="active";
							aBtns[iNow].className="";
							iNow=a;
					}
				})(i)
			}
			html+=
				`
				<h4>${data[0].title}</h4>
				<p>${data[0].introducte}</p>
				<div class="building_information">
					<span>${data[0].measure}</span>
					<span>${data[0].addr}</span>
					<br/>
					<span>${data[0].style}</span>	
				</div>					
				`
			$("div.right").html(html);
			html2+=
				`
				<h5>详细信息</h5>
				<i></i>
				<p>${data[0].detailed}</p> 
				`;
			$("div.content").html(html2);
		}
	
	})
}
	loadDetails();
	$("div.example1").click(function(){  
		window.location.href=`details.html?num=5`;
	})
	$("div.example2").click(function(){
		window.location.href=`details.html?num=6`     
	})
	$("div.example3").click(function(){
		window.location.href=`details.html?num=1`    
	})
	$("div.example4").click(function(){
		window.location.href=`details.html?num=2`    
	})
	$("div.example5").click(function(){
		window.location.href=`details.html?num=3`   
	})
	$("div.example6").click(function(){
		window.location.href=`details.html?num=4`    
	})

})()
























































































































































































































