var swiper = new Swiper(".about", {
    slidesPerView: 1.3,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var swiper = new Swiper(".now", {
    slidesPerView: 1.3,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".visual", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


for(let i=0; i < 5; i++){
    $('.tabArea>li>a:eq('+i+')').on('click',function(e){
        e.preventDefault();
        if($(this).hasClass('circle') == false){
            $('.tabArea>li>a').removeClass('circle')
            $(this).addClass('circle') 
            $('.content_wrap>.menu_wrap').hide()
            $('.content_wrap>.menu_wrap:eq('+i+')').css({display:'flex'})
            
        }
        new Swiper(".yourSwiper", {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
       return false;

    })     
}

new Swiper(".yourSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

