window.onload=function(){
	//返回
	var back = document.getElementById("back");
	back.onclick=function(){
		window.location.href="player_matching.html";
	}
	//获取玩家输入的人数
	var num = JSON.parse(localStorage.getItem("num"));
	console.log(typeof num);
	//获取随机后的人数分配
	var randomArr = localStorage.getItem("randomArr").split(",");
	console.log(typeof randomArr); 
	//设置一个变量，用来保存单击的次数
	var i=0;
	//设置一个变量，用来保存奇数的次数
	var m=0;
	//设置一个变量，用来保存偶数的次数
	var n=0;
	//获取需要切换的图片
	var d1 = document.getElementsByClassName("d1")[0];
	var d2 = document.getElementsByClassName("d2")[0];
	//调整数字居中显示
	d1.getElementsByTagName("p")[0].style.marginLeft=(-d1.getElementsByTagName("p")[0].offsetWidth)/2 + "px";
	d2.getElementsByTagName("p")[0].style.marginLeft=(-d2.getElementsByTagName("p")[0].offsetWidth)/2 + "px";
	//为按钮绑定的单击响应函数
	var btn = document.getElementById("btn");
	btn.onclick=function(){
		i++;
		console.log("i:"+i);
		/*if(!i%2==0){
			
		}*/
		if(i%2==0){
			n++;
			d1.style.display="block";
			d2.style.display="none";
			d1.getElementsByTagName("p")[0].innerHTML=n+1;
			btn.innerHTML="查看"+(n+1)+"号身份";		
			console.log("n:"+n);
		}else{
			m++;
			d1.style.display="none";
			d2.style.display="block";
			d2.getElementsByTagName("p")[0].innerHTML=m;
			d2.getElementsByTagName("div")[0].innerHTML=randomArr[m-1];
			if(i<num*2-1){
				btn.innerHTML="隐藏并传递给"+(m+1)+"号";
			}else{
				btn.innerHTML="法官查看";
				btn.onclick=function(){
					window.location.href="judge_dairy.html";
				}
				
			}
			
			console.log("m:"+m);
		}
		//再次调整数字居中显示
		d1.getElementsByTagName("p")[0].style.marginLeft=(-d1.getElementsByTagName("p")[0].offsetWidth)/2 + "px";
		d2.getElementsByTagName("p")[0].style.marginLeft=(-d2.getElementsByTagName("p")[0].offsetWidth)/2 + "px";
	}
}  
 