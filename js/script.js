$(document).ready(function() {
  $('.items div').first().show();
  $('.sqare').on('click', function(){
    var index = $('.sqare').index(this);
    $('.items div').hide();
    $('.items div').eq(index).fadeIn();
  });
});
