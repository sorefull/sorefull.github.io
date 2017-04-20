$(document).ready(function() {
  $('.item').first().show();
  $('.sqare').on('click', function(){
    var index = $('.sqare').index(this);
    $('.sqare.active').removeClass('active');
    $(this).addClass('active');
    $('.item').hide();
    $('.item').eq(index).fadeIn();
  });
  $('.side-left').hover(function() {
    $('.glyphicon-menu-left').css('color', '#fff');
  }, function() {
    $('.glyphicon-menu-left').css('color', '#130000');
  });
  $('.side-right').hover(function() {
    $('.glyphicon-menu-right').css('color', '#fff');
  }, function() {
    $('.glyphicon-menu-right').css('color', '#130000');
  });
  $('.side-left').on('click', function() {
    var item_index = $('.item').index($(this).parent().parent());
    if ($('.sqare').eq(item_index - 1).length == 0) {
      $('.sqare').last().click();
    } else {
      $('.sqare').eq(item_index - 1).click();
    }
  });
  $('.side-right').on('click', function() {
    var item_index = $('.item').index($(this).parent().parent());
    if ($('.sqare').eq(item_index + 1).length == 0) {
      $('.sqare').eq(0).click();
    } else {
      $('.sqare').eq(item_index + 1).click();
    }
  });
});
