function convertFToC(F) {
	
	var C = 5 * ( F - 32 ) / 9;
  
	return Math.floor(C);
}
  
var F = 122;

var C = convertFToC(F);

alert( F + " F =" + C + " C");




function convertCToF(C) {
	
	var F = ( 9 * C + ( 32 * 5 )) / 5;
  
	return F;
}
  
var C = 56;

var F = convertCToF(C);

alert( C + " C =" + F + ' F' );