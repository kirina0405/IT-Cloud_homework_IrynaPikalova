function calculateSaturdays(a, b) {
  
  var quantitySaturdays = 0;
  
  while ( a <= b ) {
	
	var date = new Date(a, 0, 1);
	
	var dayWeek = date.getDay();
	
	if ( dayWeek == 6 ) { 
		
		var quantitySaturdays = quantitySaturdays + 1;
		
		a++;
	
	} else {
	    
	    a++;
	}
 	
 	} 

return quantitySaturdays;

}

calculateSaturdays(2001, 2020);

