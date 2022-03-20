jQuery(document).ready(function(){
    $('#toggle').click(function() {
        $(this).toggleClass('is-active');
        $('#navbarCollapse').toggleClass('is-active');
      });
      
})
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