    var canvas = document.getElementById('x')
		var context = canvas.getContext('2d')

		setCanvasSize()
		window.onresize = function(){
			setCanvasSize()
		}
		function setCanvasSize(){
			var pageWidth = document.documentElement.clientWidth
			var pageHeight = document.documentElement.clientHeight
			canvas.width = pageWidth
			canvas.height = pageHeight
		}

		function drawCircle(x,y,radius){
			context.beginPath()
			context.arc(x,y,radius,0,360)
			context.fill()
		}

		var using = false
		var lastPoint = {x:undefined,y:undefined}

		if(document.body.ontouchstart !== undefined){
			canvas.ontouchstart = function(a){
			var x = a.touches[0].clientX
			var y = a.touches[0].clientY
			using = true
			if(eraserEnabled){
				context.clearRect(x-4,y-4,10,10)
			}else{
				lastPoint = {x:x,y:y}
				drawCircle(x,y,1)
			}
		}
		canvas.ontouchmove = function(a){
			 var x = a.touches[0].clientX
			 var y = a.touches[0].clientY
			 if(!using) {return}
				if(eraserEnabled){
					context.clearRect(x-4,y-4,10,10)
					}else{
						var newPoint = {x:x,y:y}
						drawCircle(x,y,1)
						drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
						lastPoint = newPoint
					}
		}
		
		canvas.ontouchend = function(a){
			using = false
		}
		}else{
			canvas.onmousedown = function(a){
			var x = a.clientX
			var y = a.clientY
			using = true
			if(eraserEnabled){
				context.clearRect(x-4,y-4,10,10)
			}else{
				lastPoint = {x:x,y:y}
				drawCircle(x,y,1)
			}
		}
		canvas.onmousemove = function(a){
			 var x = a.clientX
			 var y = a.clientY
			 if(!using) {return}
				if(eraserEnabled){
					context.clearRect(x-4,y-4,10,10)
					}else{
						var newPoint = {x:x,y:y}
						drawCircle(x,y,1)
						drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
						lastPoint = newPoint
					}
		}
		
		canvas.onmouseup = function(a){
			using = false
		}
		}

		function drawLine(x1,y1,x2,y2){
			context.beginPath()
			context.moveTo(x1,y1)
			context.lineWidth = 4
			context.lineTo(x2,y2)
			context.stroke()
			context.closePath()
		}

		var eraserEnabled = false
		eraser.onclick = function(){
			eraserEnabled = true
			eraser.classList.add('active')
			pen.classList.remove('active')
		}
		pen.onclick = function(){
			eraserEnabled = false
			pen.classList.add('active')
			eraser.classList.remove('active')
			context.strokeStyle = 'black'
		}
		red.onclick = function(){
			context.strokeStyle = 'red'
		}
		green.onclick = function(){
			context.strokeStyle = 'green'
		}
		blue.onclick = function(){
			context.strokeStyle = 'blue'
		}