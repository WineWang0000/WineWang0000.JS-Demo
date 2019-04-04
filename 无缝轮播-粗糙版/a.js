$('.images >img:nth-child(1)').addClass('current')
$('.images >img:nth-child(2)').addClass('enter')
$('.images >img:nth-child(3)').addClass('enter')

setTimeout(function(){
  $('.images >img:nth-child(1)').removeClass('current').addClass('leave').one('transitionend', function(e){
		$(e.currentTarget).removeClass('leave').addClass('enter')
		console.log(e.currentTarget)
	})
	$('.images >img:nth-child(2)').removeClass('enter').addClass('current')
}, 1000)

setTimeout(function(){
  $('.images >img:nth-child(2)').removeClass('current').addClass('leave').one('transitionend', function(e){
		$(e.currentTarget).removeClass('leave').addClass('enter')
		console.log(e.currentTarget)
	})
  $('.images >img:nth-child(3)').removeClass('enter').addClass('current')
}, 2000)

setTimeout(function(){
  $('.images >img:nth-child(3)').removeClass('current').addClass('leave').one('transitionend', function(e){
		$(e.currentTarget).removeClass('leave').addClass('enter')
		console.log(e.currentTarget)
	})
  $('.images >img:nth-child(1)').removeClass('enter').addClass('current')
}, 3000)

setTimeout(function(){
  $('.images >img:nth-child(1)').removeClass('current').addClass('leave').one('transitionend', function(e){
		$(e.currentTarget).removeClass('leave').addClass('enter')
		console.log(e.currentTarget)
	})
  $('.images >img:nth-child(2)').removeClass('enter').addClass('current')
}, 4000)

setTimeout(function(){
  $('.images >img:nth-child(2)').removeClass('current').addClass('leave').one('transitionend', function(e){
		$(e.currentTarget).removeClass('leave').addClass('enter')
		console.log(e.currentTarget)
	})
  $('.images >img:nth-child(3)').removeClass('enter').addClass('current')
}, 5000)


































