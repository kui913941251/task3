window.onload=function(){
	//返回
	var back = document.getElementById("back");
	back.onclick=function(){
		window.location.href="homepage.html";
	}
	//去发牌
	var start=document.getElementById("start");

	//获取 去发牌，并创建单击函数
	var start = document.getElementById("start");
	//获取输入的人数
	var num = document.getElementById("num");

	start.onclick=function(){
		//限制输入人数
		//获取输入的人数		
		if(num.value<4 || num.value>18){
			alert("请输入正确的玩家数量");
			num.value=4;
		}else{
			window.location.href="view_identity.html";
		}
		localStorage.setItem("num",num.value);
		//调用身份分配随机
		randomPeople();
		localStorage.setItem("randomArr",randomArr);
	}
	//水民人数
	var people = document.getElementById("blue_gray");	 
	//杀手人数
	var killer = document.getElementById("yellow_gray");
	//默认人数分配
	if(num.value >=4 && num.value <=8 ){
			blue_gray.innerHTML= " "+(num.value-2)+" 人";
			yellow_gray.innerHTML=" "+2+" 人";
	}
	//建立input值改变时的触发函数
	num.onchange=function(){
		//设置值必须为数字的正则
		num.value=num.value.replace(/[^0-9]/g,"");
		
		if(num.value<4 || num.value>18){
			alert("请输入正确的玩家数量");
			num.value=4;
		}
		//人数分配
		people_distribution();
		//设置人数变化时，进度条变化
		rg.value=num.value;
		//调用身份分配随机
		//randomPeople();
		//保存身份分配结果
		//localStorage.setItem("randomArr",randomArr);
	}
	//设置获取焦点时，值为""
	/*num.onfocus=function(){
		num.value="";
	}*/
	
	//设置进度条
	var rg = document.getElementById("rg");
		rg.min=4;
		rg.max=18;
		rg.step=1;
		rg.value=4;
		rg.onchange=function(){
			num.value=rg.value;
			num.onchange();
		} 
	
	//设置加减号控制进度条
	var reduce=document.getElementById("reduce");
	var plus  =document.getElementById("plus");
	//创建加减号单击响应函数
	plus.onclick=function(){
		num.value++;
		//rg.value=num.value;
		num.onchange();
	}
	reduce.onclick=function(){
		num.value--;
		//rg.value=num.value;
		num.onchange();
	}
	
	//获取滑轮事件
		num.onmousewheel=function(event){
			event = event || window.event;
			if(event.wheelDelta>0){
				num.value++;
				rg.value=num.value;
				if(num.value<4){
					num.value=4
				}else if(num.value>18){
					num.value=18;
				}
				people_distribution();
			}else{
				num.value--;
				rg.value=num.value;
				
				if(num.value<4){
					num.value=4
				}else if(num.value>18){
					num.value=18;
				}
				people_distribution();
			}
			console.log(num.value);
		}
	
	//建立人数分配函数
	function people_distribution(){
		if(num.value >=4 && num.value <=8 ){
			blue_gray.innerHTML= " "+(num.value-2)+" 人";
			yellow_gray.innerHTML=" "+2+" 人";
		}else if(num.value>8 && num.value<=12){
			blue_gray.innerHTML= " "+(num.value-3)+" 人";
			yellow_gray.innerHTML=" "+3+" 人";
		}else if(num.value>12 && num.value<=18){
			blue_gray.innerHTML= " "+(num.value-4)+" 人";
			yellow_gray.innerHTML=" "+4+" 人";
		}else{
			blue_gray.innerHTML= " "+0+" 人";
			yellow_gray.innerHTML=" "+0+" 人";
		}
	}
	//设置一个变量，来保存随机后的身份分配
	var randomArr;
	function randomPeople(){
		//设置一个变量数组，用来保存身份
		var peopleArr=[];
		if(num.value >=4 && num.value <=8 ){
			//增加的平民人数
			for(var j=0;j<num.value-2;j++){
				peopleArr.push("平民");
			}
			//增加的杀手人数
			for(var n=0;n<2;n++){
				peopleArr.push("杀手");
			}
		}else if(num.value>8 && num.value<=12){
			//增加的平民人数
			for(var j=0;j<num.value-3;j++){
				peopleArr.push("平民");
			}
			//增加的杀手人数
			for(var n=0;n<3;n++){
				peopleArr.push("杀手");
			}
		}else if(num.value>12 && num.value<=18){
			//增加的平民人数
			for(var j=0;j<num.value-4;j++){
				peopleArr.push("平民");
			}
			//增加的杀手人数
			for(var n=0;n<4;n++){
				peopleArr.push("杀手");
			}
		}	
		//建立随机函数打乱数组
		function randomilize(arr){
		    var length=arr.length;
		    var arr1=new Array(); 
		    for(var i=0;i<length;i++){
		        arr1[i]=i;
		    }   //建立数组下标数组
		    var arr2=new Array();
		    for(var i=0;i<length;i++){
		        arr2[i]=arr1.splice(Math.floor(Math.random()*arr1.length),1);
		    }  //将数组下标随机打乱
		    var arr3=new Array();
		    for(var i=0;i<length;i++)
		    {
		        arr3[i]=arr[arr2[i]];
		    }  //将数组按打乱后的下标输出
		    return arr3;
		}
		//创建一个变量保存随机的数组
		randomArr=randomilize(peopleArr);
		//console.log(peopleArr);
		console.log(typeof randomArr);
		
	}
}    
