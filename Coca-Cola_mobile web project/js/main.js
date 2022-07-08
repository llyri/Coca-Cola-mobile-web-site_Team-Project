for (let i = 0; i < 5; i++) {
  $('ul.tabArea>li:eq(' + i + ')').on('click', function () {
    if ($(this).hasClass('circle') == false) {
      $('.tabArea>li').removeClass('circle')
      $(this).addClass('circle')
      $('.menu_wrapper').hide()
      $('.menu_wrapper:eq(' + i + ')').fadeIn()
    }
    else {
      $('.tabArea>li').removeClass('circle')
      $(this).addClass('circle')
    }

    return false;
  })
}

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

for (let i = 1; i < 5; i++) {
  $(window).on('scroll', function () {
    $('section h2').css({opacity:'0'})
    var sec_top = $('#section0' + i).find('h2').offset().top;
    var top = $(document).scrollTop();
    if (top >= sec_top - 599) {
      $('#section0' + i + ' h2').stop().addClass('ani_slideUp')
    }
    else {
      $('#section0' + i + ' h2').stop().removeClass('ani_slideUp')
    }
    var sec_top4 = $('#section04').find('h2').offset().top;
    if (top >= sec_top4 - 599) {
      $('#section04 .mask').stop().addClass('ani_fadeIn')
    }
    else {
      $('#section04 .mask').stop().removeClass('ani_fadeIn').addClass('delay0_4s')
    }
  })   
}

let sec_top = $('#section01').find('h2').offset().top;
// console.log(sec_top)
if (sec_top <= (window.pageYOffset + window.innerHeight) ){
  $('#section01 h2').show()
}
else if(top > (window.pageYOffset+ window.innerHeight)){
  $('#section01 h2').hide()
}
 
  // $(window).on('onload',function(){
    // $('#main .content').css({display:'none'})
  //   var sec_left = $('.slide2').offset().left;
  //   console.log(sec_left)
  // if(sec_left <= 0){
  //   $('#main .content').stop().addClass('ani_slideUp')
  // }
  // else if(sec_left > 0){
  //   $('#main .content').css({display:'none'})
  //   $('#main .content').stop().removeClass('ani_slideUp')
  // }
// })

// for(let i = 1; i < 4; i++){
//   var sec_left = $('.slide'+i+'').offset().left;    
//   console.log(sec_left)  
//   $('#main').on('click',function(){
// if(sec_left <= 0){
//   $('#main .content').stop().addClass('ani_slideUp')
// }
// else if(sec_left > 0){
//   $('#main .content').css({display:'none'})
//   $('#main .content').stop().removeClass('ani_slideUp')
// }
// })
// }