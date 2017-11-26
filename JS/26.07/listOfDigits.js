function listOfDigits(n) { 
	
	var arr = String(n).split('');

	var numberArr = arr.map(function(number) {
		return +number;
});
	return numberArr;
}

listOfDigits(562);// [5,6,2]