	// var zhanghao ='lyz'
	// var huaxian=function(number){
	// 	for(var i=0; i <= number; i++){
	// 		var a="<hr>";
	// 		 //class ="vertical-line id ="lenght-${i}"
	// 		document.getElementById("yidu").innerHTML += a
	// 		// var elem= getElementsById("lenght-${i}")
	// 		// var c= (500-number)/500
	// 		// elem.style.height = c
	// 	}
	// }
	//  huaxian(30)
	var log =function(){
		console.log.apply(console,arguments)
		}
	//全局变量，以确认页码
	window.i =0
	// var dgetn = function(arguments){
	// 	return document.getElementsByTagName(arguments)
	// }
	//判断鼠标点击的区域 已控制左右翻页
	function whichElement(e){
		var e = window.event
		// if (!e) var e = window.event
		// if (e.target) targ = e.target
		// else if (e.srcElement) targ = e.srcElement
		// log("dianjile",window.event)
		// 	log("点击事件",e)
		var clickedwidth =e.x
		var sreenwidth = document.body.clientWidth
		if(clickedwidth * 2 >= sreenwidth ){
		 	log("你点击的区域是右半边")
		 	var cname='txtares-right'
		 	//增加class
		 	addafter()
		 	// addclassbyclassname(cname,'hiding')
		 	//删除class
		 	// deteleclassnamebyid(ids,'moveright')
		 	// log("123")
		 	// setTimeout("deteleclassbyclassname('txtares-right','hiding')",1000)
		 	// setTimeout("deteleclassnamebyid('txtares-right',moveright')",1000)
			// log("321")
		 		// addclassnamebyid(ids,'hide')
		 		setTimeout("xiayiye()",1001)
		 		setTimeout("removesh()",2001)
		 		setTimeout("window.i++",1002)
		 		log("i=",window.i)
		 	}else if(window.i===0){
		 			alert("梦之始，其为收敛之尘")
		 			log("没有了更多了")
		 		}else{
		 			log("你点击的区域是左半边")
		 			// var cname='txtares-left'
		 			addbefore()
		 			// addclassbyclassname(cname,'showing')
		 			// setTimeout("deteleclassbyclassname('txtares-left','showing')",1000)
		 			setTimeout("qianyiye()",1001)
		 			setTimeout("removesh()",2001)
		 			setTimeout("window.i--",1002)
		 			// window.i--
		 			log("i=",window.i)
		 		}

		 		
		 		// addclassnamebyid(ids,'hide')

		 	
		 	
		// log("点击的宽度",clickedwidth)
		// log("当前网页宽度",document.body.clientWidth)
		// log("当前网页",document.body.clientHeight)
		
		// if (targ.nodeType == 3) // defeat Safari bug
		// 	 log("0.2",targ)
		//    targ = targ.parentNode

		// var tname
		// tname=targ.tagName
		// // alert("You clicked on a " + tname + " element.")
		// log("你点击的区域是",tname)
	}
		//通过标签的id查询，来增加class
		// addclassnamebyid = function(id,arguments){
		// 	// ids='txtares-left'
		// 	var ids = id
		// 	// log("getElementById",document.getElementById('ids'))
		// 	document.getElementById(ids).className+=' '+arguments
		// }
		addclassbyclassname = function(cname,arguments){
			// ids='txtares-left'
			var cnames = cname
			// log("getElementById",document.getElementById('ids'))
			document.getElementsByClassName(cnames)[0].classList.add(arguments)
		}
		deteleclassbyclassname = function(cname,arguments){
			// ids='txtares-left'
			var cnames = cname
			// log("getElementById",document.getElementById('ids'))
			document.getElementsByClassName(cnames)[0].classList.remove(arguments)
		}
		// 通过id删除class
		// deteleclassnamebyid =function(id,arguments){
		// 	var ids = id
		// 	var names=document.getElementById(ids).classList 
		// 	// log("classname liebiao",names)
		// 	names.remove(arguments)
		// }
		addclassnamebytag =function(tagname,number,arguments){
			var number
			var tagnames = tagname
			var names=document.getElementsByTagName(tagnames)[number].classList
			log("classname liebiao",names)
			names.add(arguments)
		}
		deteleclassnamebytag =function(id,arguments){
			var ids = id
			var names=document.getElementsById(ids).classList 
			// log("classname liebiao",names)
			names.remove(arguments)
		}
		// addclassname = function(arguments){
		// 	ids='txtares-left'
		// 	log("getElementById",document.getElementById('ids'))
		// 	document.getElementById(ids).+=arguments
		// }
		//利用getElementByTagName查询标签divbox的数量，并用getAttribute得到其数值
		//作为下标访问或操作
		// document.getElementsByTagName("divbox").length
		// document.getElementsByTagName("divbox")[1].getAttribute("data-box")
		// document.getElementsByClassName('hide')[0].classList.remove('hide')
		//函数“后一页”
		function addafter(){
			var add1 =document.querySelectorAll('divbox')[window.i*2]
			var add2=document.querySelectorAll('divbox')[window.i*2+1]
			for (let i = 0; i < add2.children.length; i++) {
					add2.children[i].classList.add('hiding')
					log("渐入")	
			 } 
			 for (let i = 0; i < add1.children.length; i++) {	
			 		add1.children[i].classList.add('hiding')
			 		log("渐入")	
			  }  
			var add3 =document.querySelectorAll('divbox')[window.i*2+2]
			var add4=document.querySelectorAll('divbox')[window.i*2+3]
			for (let j = 0; j < add3.children.length; j++) {
			 		add3.children[j].classList.add('showing')
			 		log("渐出")
			  	}
		  	for (let j = 0; j < add4.children.length; j++) {
					add4.children[j].classList.add('showing')
		  			log("渐出")
		  	 	}
		 }
		 //给divbox的子元素加上，透明度渐变
		function addbefore(){
		 	let add1 =document.querySelectorAll('divbox')[window.i*2]
		 	let add2=document.querySelectorAll('divbox')[window.i*2+1]
		 	for (let j = 0; j < add1.children.length; j++) {
		 			add1.children[j].classList.add('hiding')
		 				
		 	 } 
		 	for (let j = 0; j < add2.children.length; j++) {
		 	 		add2.children[j].classList.add('hiding')	
		 	  } 
		 	 let add3 =document.querySelectorAll('divbox')[window.i*2-2]
		 	 let add4=document.querySelectorAll('divbox')[window.i*2-1]
		 	 for (let j = 0; j < add3.children.length; j++) {
		 	 		add3.children[j].classList.add('showing')
		 	  	}
	 	  	for (let j = 0; j < add4.children.length; j++) {	 	  			
	 	  			add4.children[j].classList.add('showing')
	 	  	 	}
		 	  						

		  }
		function removesh(){
			var reh=document.querySelectorAll('.hiding')
				for (var i = 0; i < reh.length; i++) {
					reh[i].classList.remove('hiding')
				}
			var res=document.querySelectorAll('.showing')
				for (var i = 0; i < res.length; i++) {
					res[i].classList.remove('showing')
				}
		 }
		function xiayiye(){
			var findbox=document.querySelectorAll('divbox')
			findbox[window.i*2].classList.add('hide')	
			findbox[window.i*2+2].classList.remove('hide')
			findbox[window.i*2+1].classList.add('hide')
			findbox[window.i*2+3].classList.remove('hide')			  						
		}
		//函数“前一页”
		function qianyiye(){
			var findbox=document.querySelectorAll('divbox')
			findbox[window.i*2].classList.add('hide')	
			findbox[window.i*2-2].classList.remove('hide')
			findbox[window.i*2+1].classList.add('hide')
			findbox[window.i*2-1].classList.remove('hide')
		}						
		