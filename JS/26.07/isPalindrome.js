function isPalindrome(a) {
  
  	var arr = a.split('');
	
	for (i = 0; i < arr.length / 2; i++) { 
			
		if (arr[i] !== arr[arr.length - i - 1])	{ 
			word = false;
		} else {
			word = true;
		}; 
	}

	alert(word);
}

isPalindrome('racecar') // true;