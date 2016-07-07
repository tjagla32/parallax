$(window).scroll(function(){
  
  var wScroll = $(this).scrollTop();
  
  $('.logo').css({
    'transform' : 'translate(0px, ' + wScroll/2 +'%)'
  });
  
  $('.back-bird').css({
    'transform' : 'translate(0px, ' + wScroll/4 +'%)'
  });
  
  $('.fore-bird').css({
    'transform' : 'translate(0px, -' + wScroll/40 +'%)'
  });
  
  if(wScroll > $('.clothes-pics').offset().top - $(window).height()/1.3){
    $('.clothes-pics .row div').each(function(i){
      
      setTimeout(function(){
        $('.clothes-pics .row div').eq(i).addClass('is-showing');
      },150*(i+1));
      
    });
  }
  
  if(wScroll > $('.large-window').offset().top- $(window).height()){
    $('.large-window').css({'background-position': 'center '+ (wScroll - $('.large-window').offset().top) +'px'}); 
  }
  
  if(wScroll > $('.blog-posts').offset().top-$(window).height()){
    var offset = Math.min(0,wScroll - $('.blog-posts').offset().top + $(window).height() - 350);
    
    $('.post-1').css({'transform': 'translate('+offset+'px,'+offset*0.2+'px)'});
    $('.post-3').css({'transform': 'translate('+Math.abs(offset)+'px,'+offset*0.2+'px)'});
  }
  
  
});