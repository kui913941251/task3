window.onload=function(){
	
	//返回
	var back = document.getElementById("back");
	back.onclick=function(){
		window.location.href="view_identity.html"
	}
	
	//获取玩家输入的人数
	var num = JSON.parse(localStorage.getItem("num"));
	console.log(typeof num);
	//获取随机后的人数分配
	var randomArr = localStorage.getItem("randomArr").split(",");
	console.log(typeof randomArr); 
	
	
	//获取all的父元素
	var allParent=document.getElementsByClassName("content")[0];
	//遍历玩家输入的人数
	for(var i=0;i<num;i++){
		//创建一个div元素
		var all = document.createElement("div");
		//向div元素中添加class类名
		all.className="all";
		
		//创建一个top元素
		var top = document.createElement("div");
		//添加class类名
		top.className="top";
		//向tp中添加内容
		top.innerHTML=randomArr[i];
		
		//创建一个down元素
		var down = document.createElement("div");
		//添加class类名
		down.className="down";
		//向dw中添加内容
		down.innerHTML=(i+1)+"号";
		
		//将tp dw 添加到al中
		all.appendChild(top);
		all.appendChild(down);
		//将al添加到content中
		allParent.appendChild(all);
	}
	//再添加两个空的div，用来占位保持排列
	for(var n=0;n<2;n++){
		//创建一个div元素
		var all = document.createElement("div");
		//向div元素中添加class类名
		all.className="all";
		all.style.visibility="hidden";
		
		//将al添加到content中
		allParent.appendChild(all);
	}
	
}
