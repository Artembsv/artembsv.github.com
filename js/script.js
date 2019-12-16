function sgo(){
    $('.w1210.f16').css('font-size', (parseInt($('.w1210').css('width')) / (1210 / 16)) + 'px') // font-size: 16px
}
sgo()
$(window).resize(function(){
    sgo()
})

