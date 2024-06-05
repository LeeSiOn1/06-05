$(document).ready(function() {
  $(".nav > ul > li").mouseenter(function(){
    $(".sub-menu").stop().slideDown(300);
    $(".nav-bg").stop().slideDown(300);
  });
  
  $(".nav > ul > li").mouseleave(function(){
    $(".sub-menu").stop().slideUp(300);
    $(".nav-bg").stop().slideUp(300);
  });

  let currentIndex = 0;
  const slides = $('.slide-item');
  const slideCount = slides.length;
  
  function showSlide(index) {
    const newLeft = -index * 1200 + 'px';
    $('.slide-cont').animate({ left: newLeft }, 100, function() {
      slides.removeClass('active');
      slides.eq(index).addClass('active');
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    showSlide(currentIndex);
  }
  
  setInterval(nextSlide, 2500);

  $(".cont1 tr.on").click(function(){
    $(".layer-pop").show();
    $(".popup").show();
});
$(".popup .butt").click(function(){
    $(".layer-pop").hide();
    $(".popup").hide(); 
});
})