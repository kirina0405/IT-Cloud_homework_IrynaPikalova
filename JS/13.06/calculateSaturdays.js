function calculateSaturdays(a, b) {
  
  var quantitySaturdays = 1;
  
  while ( a <= b ) {
	
	var date = new Date(a, 0, 1);
	
	var dayWeek = date.getDay();
	
	if ( dayWeek == 6 ) { 
		
		var quantitySaturdays = quantitySaturdays + 1;
		
		var a = a + 1;
	
	} else {
	    
	    var a = a + 1;
	}
 	
 	} 

return quantitySaturdays;

}

calculateSaturdays(2001, 2020);

