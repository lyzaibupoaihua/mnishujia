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
		 	addclassbyclassname(cname,'moveright')
		 	//删除class
		 	// deteleclassnamebyid(ids,'moveright')
		 	log("123")
		 	setTimeout("deteleclassbyclassname('txtares-right','moveright')",1000)
		 	// setTimeout("deteleclassnamebyid('txtares-right',moveright')",1000)
			log("321")
		 		// addclassnamebyid(ids,'hide')
		 		window.i++
		 		log("i=",i)
		 	}else if(window.i==0){
		 		
		 			log("没有了")
		 		}else{
		 			log("你点击的区域是左半边")
		 			var cname='txtares-left'
		 			addclassbyclassname(cname,'moveleft')
		 			setTimeout("deteleclassbyclassname('txtares-left','moveleft')",1000)
		 			window.i--
		 			log("i=",i)
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
		