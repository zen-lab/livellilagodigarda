
function update() {
    var serviceURL = "http://www.ipsum.biz/livellilagogarda/";
		$.getJSON(serviceURL + 'service.php?last=true', function(data) {
		
        $('#livello').html(data.livello);
        $('#dataMis').html(data.misurazione);
         var misura = parseInt(data.livello) + 5;
        $('.water').stop().animate({height: (misura * 0.487404 ) + '%'}, 700,'easeOutBounce', function() {
         altezza = $('.water').height();
         
         $('.pescatore img').animate({bottom: (altezza - 3 )+'px'} , 1000,'easeOutBounce' );
       });
        
    });
};
function refreshPage() {
  $.mobile.changePage(
    window.location.href,
    {
      allowSamePageTransition : true,
      transition              : 'slide',
      showLoadMsg             : false,
      reloadPage              : true
    }
  );
}


 