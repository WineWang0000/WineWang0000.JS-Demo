var allButtons = $('#buttons > span')
for(let i=0;i<allButtons.length; i++){
  $(allButtons[i]).on('click', function(e){
    var index = $(e.currentTarget).index()
    var px = index * -451
    $('#pictures').css({
      transform: 'translate('+  px +'px)'
    })
  })
}
 var n = 0
 var allImg = $('#pictures > img')
 var imgCount = allImg.length
 var clock = setInterval(()=>{
   n += 1
   allButtons.eq(n % imgCount).trigger('click').addClass('red').siblings('.red').removeClass('red')
 }, 2000)

 $('.cats').on('mouseenter', function() {
   window.clearInterval(clock) //window加了更保险，记住你第一次写的什么。尴尬不？
 })

$('.cats').on('mouseleave', function() {
  clock = setInterval(() => {
    n += 1
    allButtons.eq(n % imgCount).trigger('click')
      .addClass('red')
      .siblings('.red').removeClass('red')
  }, 2000)
})
