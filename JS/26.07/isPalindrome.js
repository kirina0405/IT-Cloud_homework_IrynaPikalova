function isPalindrome(a) {
  
  	var arr = a.split('');
  	var word;
		for (i = 0; i < arr.length / 2; i++) { 
			
		if (arr[i] !== arr[arr.length - i - 1])	{ 
			word = false;
			return word;
		} else {
			word = true;
		}; 
	}

	return word;
}

isPalindrome('racecar') // true;