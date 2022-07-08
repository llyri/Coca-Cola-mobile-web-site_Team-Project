for(let i = 0; i < 4; i++){
  $('ul.tabArea>li:eq('+ i +')').on('click',function(e){
    if($(this).hasClass('circle') == false){
      $('ul.tabArea>li').removeClass('circle')
      $(this).addClass('circle')
      $('.sec').hide()
      $('div.sec:eq('+ i +')').show();
    }
    
    return false;
  })
}