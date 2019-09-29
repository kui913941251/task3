window.onload = function(){
	
	//获取简化版
	var game = document.getElementById("game");
	//创建单击函数
	game.onclick=function(){
		//跳转页面
		window.location.href="player_matching.html";
		
	}
	
	//添加向右滑动
	var rightIcon=document.getElementById("right_icon");
	//获取被移动的元素
	var dd = document.getElementsByClassName("dd")[0];
	rightIcon.onclick=function(){
		dd.style.marginLeft="-100%";
	}
	//添加向左滑动
	var leftIcon = document.getElementById("left_icon");
	leftIcon.onclick=function(){
		dd.style.marginLeft="0";
	}
	
	//设置圆点变化
	//获取圆点(div)
	var circle = document.getElementsByClassName("circle")[0];
	var circleArr=circle.getElementsByTagName("div");
	//设置一个index参照(默认标点)
	var index=0;
	circleArr[index].style.backgroundColor="#69d1e9";
	//遍历圆点
	for(var i=0;i<circleArr.length;i++){
		//标记每个圆点
		circleArr[i].name=i;
		//为每个圆点设置单击响应函数
		circleArr[i].onclick=function(){
			//设置滑动量
			dd.style.marginLeft="-100%*this.name";
			
			for(var n=0;n<circleArr.length;n++){
				circleArr[n].style.backgroundColor="#f0f0f0";
			}
			circleArr[this.name].style.backgroundColor="#69d1e9";
		}
	}
	
	//创建一个圆点颜色变换函数
	function setA(){
		for(var n=0;n<circleArr.length;n++){
			circleArr[n].style.backgroundColor="#f0f0f0";
		}
	}
}
