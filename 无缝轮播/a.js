// setTimeout(function(){
// 	$('.images > img:nth-child(1)').css({
//     transform: 'translateX(-100%)' //向左100%
// 	})
// 	$('.images > img:nth-child(2)').css({
//     transform: 'translateX(-100%)' //-100%就是从后向前走，到窗口位置
// 	})
// 	$('.images > img:nth-child(1)').one('transitionend', function(e){
//     $(e.currentTarget).addClass('right').css({transform: 'none'})
// 	})
// }, 2000)

// setTimeout(function(){
// $('#images > img:nth-child(2)').css({
// 	transform: 'translateX(-200%)'
// })
// $('#images > img:nth-child(3)').css({
// 	transform: 'translateX(-100%)'
// })
// $('.images > img:nth-child(2)').one('transitionend', function(e){
// 	$(e.currentTarget).addClass('right').css({transform: 'none'})
// })
// }, 4000) //4s时再把2左移-200

// setTimeout(function(){
// 	$('.images > img:nth-child(3)').css({
// 		transform: 'translateX(-200%)'
// 	})
// 	$('.images > img:nth-child(1)').css({
// 		transform: 'translateX(-100%)'
// 	})
// 	$('.images > img:nth-child(3)').one('transitionend', function(e){
//     $(e.currentTarget).addClass('right').css({transform: 'none'})
// 	})
// }, 6000)

// setTimeout(function(){
// 	$('.images > img:nth-child(1)').css({
//     transform: 'translateX(-200%)' //向左100%
// 	})
// 	$('.images > img:nth-child(2)').css({
//     transform: 'translateX(-100%)' //-100%就是从后向前走，到窗口位置
// 	})
// 	$('.images > img:nth-child(1)').one('transitionend', function(e){
//     $(e.currentTarget).addClass('right').css({transform: 'none'})
// 	})
// }, 8000)

// setTimeout(function(){
// $('#images > img:nth-child(2)').css({
// 	transform: 'translateX(-200%)'
// })
// $('#images > img:nth-child(3)').css({
// 	transform: 'translateX(-100%)'
// })
// $('.images > img:nth-child(2)').one('transitionend', function(e){
// 	$(e.currentTarget).addClass('right').css({transform: 'none'})
// })
// }, 10000)

// setTimeout(function(){
// 	$('.images > img:nth-child(3)').css({
// 		transform: 'translateX(-200%)'
// 	})
// 	$('.images > img:nth-child(1)').css({
// 		transform: 'translateX(-100%)'
// 	})
// 	$('.images > img:nth-child(3)').one('transitionend', function(e){
//     $(e.currentTarget).addClass('right').css({transform: 'none'})
// 	})
// }, 12000)


$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')

setTimeout(()=>{
	$('.images > img:nth-child(1)').removeClass('current').addClass('leave')
	.one('transitionend', (e)=>{
		$(e.currentTarget).removeClass('leave').addClass('enter')
	})
	$('.images > img:nth-child(2)').removeClass('enter').addClass('current')
}, 2000)

setTimeout(()=>{
	$('.images > img:nth-child(2)').removeClass('current').addClass('leave')
	.one('transitionend', (e)=>{
		$(e.currentTarget).removeClass('leave').addClass('enter')
	})
	$('.images > img:nth-child(3)').removeClass('enter').addClass('current')
}, 4000)

setTimeout(()=>{
	$('.images > img:nth-child(3)').removeClass('current').addClass('leave')
	.one('transitionend', (e)=>{
		$(e.currentTarget).removeClass('leave').addClass('enter')
	})
	$('.images > img:nth-child(1)').removeClass('enter').addClass('current')
}, 6000)
































