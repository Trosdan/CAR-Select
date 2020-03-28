$(document).ready(function () {
  var $obj = $('.parallax');
  $(window).scroll(function () {
    var yPos = -($(window).scrollTop() / 5);
    var bgpos = "0 " + yPos + 'px';
    $obj.css('background-position', bgpos);
    //var bgpos = '50% '+ yPos + 'px';
  });
});