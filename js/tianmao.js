/*
* @Author: Administrator
* @Date:   2018-03-26 21:01:49
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-02 22:41:07
*/
{
	let imgs=document.querySelectorAll(".banner_img");
	let pagers=document.querySelectorAll(".pagers_item");
	let banner=document.querySelector(".banner");
	pagers.forEach(
		function(ele,index){
		ele.onmouseenter=function(){
				for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
				}
				this.classList.add("active");
				imgs[index].classList.add("active");
				n=index;
				}
			});
	
	 let t=setInterval(move,3000);
	 var n=0;
	 	function move(){
		n++;
	 	// n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
				}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
}
{	
	// 获取元素
	let daohang=document.querySelector(".sousuo");
	let leftBar=document.querySelector(".leftbar");
	let tips=document.querySelectorAll(".leftbar_item");
	let content=document.querySelectorAll(".tianmao1");
	// 设置滚动事件
	window.onscroll=function(){
		//获取当前滚动条的值
	let st=document.documentElement.scrollTop;
		// 当值大于700时
		if(st>700){
			// 将此时的样式设置为block
			daohang.style.display="block";
		}
		else{
			// 否则将此时的样式设置为none
			daohang.style.display="none";
		}
		if(st>800){
		leftBar.style.display="block";
		}
		else{
		leftBar.style.display="none";
		}
	}
		//遍历tips对象
		tips.forEach(function(ele,index){
		// 为ele设置单击事件
		ele.onclick=function(){
			console.log(ele);
			//获取位于对象最顶端和窗口中可见内容的最顶端之间的距离-40
			let ot=content[index].offsetTop-50;
			// console.log(ot);
			// 获取当前滚动条的距离
			let now=document.documentElement.scrollTop;
			// 设置当前对象需要移动的速度，其所用的时间是一致的
			let speed=(ot-now)/9;
			let time=0;
			//为t设置一个interval方法，每经过25ms时，它的时间加50s,
			// 其滚动条的位置也加一个速度。当时间为550ms时，清除Interval方法
			let t=setInterval(function(){
				time+=50;
				now+=speed;
				if(time===450){
					clearInterval(t);
				}
				// 将滚动条的位置指为now的值所对应的位置
				document.documentElement.scrollTop=now;
			},50);
		}
	});
		//为window添加一个监听事件
		window.addEventListener("scroll",function(){
			//获取当前元素的滚动条的距离
		let st=document.documentElement.scrollTop;
		//利用for循环   遍历当前的内容
		for(let i=0;i<content.length;i++){
			//当st的值为content[i]的值时，将上一个元素的类名移除，为下一个元素添加类名
			if(st>content[i].offsetTop-150){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");
				}
				tips[i].classList.add("active");
			}
		}
	});
}
{
	let labels=document.querySelectorAll(".banner_left_item");
		let menus=document.querySelectorAll(".menu");
		let obj=menus[0];
		labels.forEach(function(ele,index){
			ele.onmouseenter=function(){
				obj.style.display="none";
				menus[index].style.display="block";
				obj=menus[index];
			}
			ele.onmouseleave=function(){
				menus[index].style.display="none";
			}
		})
}

{	
//获取一系列元素
	let totop=document.querySelector(".leftbar_item1 h1");
	let totop1=document.querySelector(".qian5");
		// 为返回顶部设置单击事件
		totop.onclick=function(){
			// 获取当前滚动条的位置
			let st=document.documentElement.scrollTop;
				// 设置一个interval函数
				let t=setInterval(function(){
					//设置在每25s内向上移动200px
					st-=200;
					//当向上移动的距离为负数时，st的值设置成0
					//清除interval函数。
					if(st<0){
					 	st=0;
						clearInterval(t);
					}
					// 将当前滚动条的值设置为0
					document.documentElement.scrollTop=0;
				},25)
			
		}
		totop1.onclick=function(){
			// 获取当前滚动条的位置
			let st=document.documentElement.scrollTop;
				// 设置一个interval函数
				let t=setInterval(function(){
					//设置在每25s内向上移动200px
					st-=200;
					//当向上移动的距离为负数时，st的值设置成0
					//清除interval函数。
					if(st<0){
					 	st=0;
						clearInterval(t);
					}
					// 将当前滚动条的值设置为0
					document.documentElement.scrollTop=0;
				},25)
			
		}
}
{	
	const types=document.querySelectorAll(".tianmao_inner_left1");
	const goods=document.querySelectorAll(".tianmao_inner_content");
		types.forEach(function(ele,index){
			ele.onmouseover=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("active");
					goods[i].classList.remove("active");
				}
				this.classList.add("active");
				goods[index].classList.add("active");
			}
		})
}
{
		let tanchu=document.querySelectorAll(".right_item");
		let zuoce=document.querySelectorAll(".rightbar1_content");
		tanchu.forEach(
		function(ele,index){
		ele.onmouseenter=function(){
				for(let i=0;i<zuoce.length;i++){
				zuoce[i].style.width=0;
				}
				zuoce[index].style.width=90+"px";
				}
				ele.onmouseleave=function(){
				for(let i=0;i<zuoce.length;i++){
				zuoce[i].style.width=0;
				}
				}
			});

		tanchu.onclick=function(){
			// 获取当前滚动条的位置
			let st=document.documentElement.scrollTop;
				// 设置一个interval函数
				let t=setInterval(function(){
					//设置在每25s内向上移动200px
					st-=200;
					//当向上移动的距离为负数时，st的值设置成0
					//清除interval函数。
					if(st<0){
					 	st=0;
						clearInterval(t);
					}
					// 将当前滚动条的值设置为0
					document.documentElement.scrollTop=0;
				},25)
			
		}
}
top
{
	let daohang_top=document.querySelectorAll(".daohang_right_item");
	let daohang_bottom=document.querySelectorAll(".right_content");
	daohang_top.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<daohang_bottom.length;i++){
				daohang_bottom[i].style.display="none";
			}
				daohang_bottom[index].style.display="block";
		}
		ele.onmouseleave=function(){
			for(let i=0;i<daohang_bottom.length;i++){
				daohang_bottom[i].style.display="none";
			}
		}

	})
}
{
	let brand_item=document.querySelectorAll(".brand_item");
	let brand_item1=document.querySelectorAll(".brand_item1");
	brand_item.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<brand_item.length;i++){
				brand_item1[i].style.display="none";
			}
			brand_item1[index].style.display="block";
		}
		ele.onmouseleave=function(){
			for(let i=0;i<brand_item.length;i++){
				brand_item1[i].style.display="none";
			}
		}
	})

}