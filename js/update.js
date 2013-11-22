
function getEmployeeList() {
         var serviceURL = "http://www.ipsum.biz/livellilagogarda/";
		$.getJSON(serviceURL + 'service.php?last=true', function(data) {
		//$('#livello').remove();
		//console.firebug=true;
        $('#livello').html(data.livello);
        
        
        $('#dataMis').html(data.misurazione);
        
        
        
         $('.water').stop().animate({height: '75%'}, 700,'easeOutBounce', function() {
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
      transition              : 'fade',
      showLoadMsg             : false,
      reloadPage              : true
    }
  );
}


 