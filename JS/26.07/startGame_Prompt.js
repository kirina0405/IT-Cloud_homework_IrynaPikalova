  
function startGame(constanta) {
		
	var steps = 0;

	while ( true ) {
	  
	var number = prompt('Угадайте секретный код. Введите ваш вариант', '');
  
		if (number == constanta) {
			alert('Поздравляем! Вы угадали! Попыток было ' + (steps + 1));
			break;
      	} else if (number < constanta) {
 			alert('больше');
  		} else {
   			alert('меньше');
 		}; 
      	
      	steps++;
  	};
}; 

startGame();