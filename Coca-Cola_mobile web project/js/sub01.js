$('.more_btn_com').on('click',function(){
  if($(this).hasClass('onb') === false){
    $(this).addClass('onb')
      $('#sec_wrap').slideDown(200)
      $(this).text('접기')
  }
  else{
    $(this).removeClass('onb')
    $('#sec_wrap').slideUp(200)
    $(this).text('회사소개 더보기')
  }
  return false;
})