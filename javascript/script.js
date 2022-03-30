jQuery(document).ready(function(){
    $('#toggle').click(function() {
        $(this).toggleClass('is-active');
        $('#navbarCollapse').toggleClass('is-active');
      });
      
})
// 서브메뉴 이벤트
$(document).ready(function(){
  $(".menu>a").click(function(){
   var submenu = $(this).next("#Navbar-menu-submenu");
    if( submenu.is(":visible") ){
    submenu.slideUp();
    }else{
     submenu.slideDown();
     }
     });
     });
//맨위로 가기 버튼
     $(document).ready(function() {
      $('#movetopbt').bind('click', function() {
        $('html, body').animate({scrollTop: '0'}, 680);
      });
      // 애니메이션 효과로 자연스럽게 이동됨, 0.68초
    
      $('#movetopbt').on('click', function() {
        $('html').scrollTop('0');
      });
      // 애니메이션 효과없이 즉시 해당 위치 0 지점으로 이동함
    });

//카테고리 이벤트
$(document).ready(function(){
  $(".e-list").slideUp(function () {
      $(".e-button").removeClass("open");
    });
    
    $(".e-button").on("click", function () {
      if ($(this).hasClass("open")) {
        $(".e-list").slideUp(function () {
          $(".e-button").removeClass("open");
        });
      } else {
        $(this).addClass("open");
        setTimeout(function () {
          $(".e-list").stop().slideDown();
        }, 200);
      }
     });
    });
 // 메인화면 페이지 로드 함수
 $(document).ready(function () {
  $('#summernote').summernote({
      placeholder: '내용을 작성하세요',
      height: 700,
      maxHeight: 1000
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
  } else {
      $('#back-to-top').fadeOut();
  }
});


$('#back-to-top').click(function () {
  $('#back-to-top').tooltip('hide');
  $('body,html').animate({
      scrollTop: 0
  }, 800);
  return false;
});
$('#back-to-top').tooltip('show');