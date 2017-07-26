  
function startGame(constanta) {
	
	var step = 0;
	
	for ( var i = 1; i > 0; step ) {
	  
	var number = prompt('Угадайте секретный код. Введите ваш вариант', '');
  
		if (number == constanta) {
			alert('Поздравляем! Вы угадали! Попыток было ' + (step + 1));
			break;
      	} else if (number < constanta) {
 			alert('больше');
  		} else {
   			alert('меньше');
 			}; 
      	
      	step = i++;
  	};
}; 

startGame(5);