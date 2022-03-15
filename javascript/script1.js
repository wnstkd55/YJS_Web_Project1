jQuery(document).ready(function(){
    $('#toggle').click(function() {
        $(this).toggleClass('is-active');
        $('#navbarCollapse').toggleClass('is-active');
      });
      AOS.init();
})