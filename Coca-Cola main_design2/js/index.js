$('.menu_area').on('click', function () {
  $('nav.gnb').stop().animate({ right: '0px' }, 300)
})

$('.btn_close').on('click', function () {
  $('nav.gnb').stop().animate({ right: '-100%' }, 300)
})

$('div.tit').on('click', function () {
  if ($(this).hasClass('on') == false) {
    $('div.tit').removeClass('on')
    $(this).addClass('on')
    $('.gnb_list .sub').stop().slideUp(200)
    $(this).next('.gnb_list .sub').stop().slideDown(200)
  }
  else {
    $('div.tit').removeClass('on')
    $('.gnb_list .sub').stop().slideUp(200)
  }
})

// $('.search_area').on('click', function () {
//   if ($('.fa-magnifying-glass').hasClass('fa-xmark') === false) {
//     $(this).children('.search_link').children('i').removeClass('fa-magnifying-glass')
//     $(this).children('.search_link').children('i').addClass('fa-xmark')
//     $('#search_page').slideDown();
//     $('#overlay').fadeIn()
//     $('body').css({ 'overflowY': 'hidden' })
//   }
//   else {
//     $(this).children('.search_link').children('i').removeClass('fa-xmark')
//     $(this).children('.search_link').children('i').addClass('fa-magnifying-glass')
//     $('#search_page').slideUp();
//     $('#overlay').fadeOut()
//     $('body').css({ 'overflowY': 'auto' })
//   }

//   return false;
// })


var icon = $('a.search_link').children('i')
$('.search_area').on('click', function () {
  if (icon.hasClass('fa-xmark') === false) {
    icon.removeClass('fa-magnifying-glass')
    icon.addClass('fa-xmark')
    $('#search_page').slideDown();
    $('#overlay').fadeIn()
    $('body').css({ 'overflowY': 'hidden' })
  }
  else {
    icon.removeClass('fa-xmark')
    icon.addClass('fa-magnifying-glass')
    $('#search_page').slideUp();
    $('#overlay').fadeOut()
    $('body').css({ 'overflowY': 'auto' })
  }

  return false;
})


// document.querySelector(".fa-chevron-left").addEventListener('click',function(){
//   history.back();

//   return false;
// })

// document.querySelector("#top_tit").addEventListener('click',function(){
//   history.back();

//   return false;
// })