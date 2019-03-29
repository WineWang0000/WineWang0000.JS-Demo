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
 var picturesCount = allImg.length
 setInterval(()=>{
   n += 1
   allButtons.eq(n%picturesCount).trigger('click').addClass('red').siblings('.red').removeClass('red')
 },2000)