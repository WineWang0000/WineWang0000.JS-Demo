// var code = "var data = 1;";
// var text = Prism.highlight(code, Prism.languages.javascript, 'javascript');
// console.log(tetx)

var a = `
/*
 * 尊敬的面试官，您好!
 * 我是xxx，
 * 接下来我将以这种方式来介绍我的简历。
 */

*{
transition: all .5s;
}
body{
  background: rgb(222, 222, 222);
  font-size: 16px;
}
#pre{
  border: 1px solid;
  padding: 16px;
}
/*
 * 看我，旋转，跳跃。
*/
#pre{
  transform: rotateY(360deg);
}
`
var n = 0
var clock = setInterval(()=>{
  n += 1
  pre.innerHTML = a.substring(0, n)
	pre.innerHTML= pre.innerHTML.replace('#pre', '<span style="color:red;">#pre</span>')
	// pre.innerHTML= Prism.highLight(pre.innerHTML, Prism.language.css)
  styleTag.innerHTML = a.substring(0, n)
  if(n >= a.length){
		window.clearInterval(clock)
		f2()
	  f3(a)
  }
}, 10)

function f2(){
	var paper = document.createElement('div')
	paper.id = 'paper'
	document.body.appendChild(paper)
}


function f3(content){
	var b = `
#paper{
  width: 100px;
  height: 100px;
  background: lightblue;
}
  `
	var n = 0
	var clock = setInterval(()=>{
		n += 1
		pre.innerHTML = pre.innerHTML + b.substring(n-1, n)
		styleTag.innerHTML = a + b.slice(0, n)
		if(n >= b.length){
		window.clearInterval(clock)
	}
	}, 10)
}
