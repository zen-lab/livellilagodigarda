
console.firebug=true;

var serviceURL = "http://www.ipsum.biz/livellilagogarda/";
var livelli;

$('#paginainiziale').bind('pageinit', function(event) {

	getEmployeeList();
});

    getEmployeeList();	
function getEmployeeList() {
   
		$.getJSON(serviceURL + 'service.php?last=true', function(data) {
		//$('#livello').remove();
		//console.firebug=true;
        console.log(data);
        $('#livello').html(data.livello);
        
        
        $('#dataMis').html(data.misurazione);
        
        
        
         $('.water').stop().animate({height: '75%'}, 700,'easeOutBounce', function() {
         altezza = $('.water').height();
         $('.pescatore img').animate({bottom: (altezza - 3 )+'px'} , 1000,'easeOutBounce' );
       });
     
    });
};

 