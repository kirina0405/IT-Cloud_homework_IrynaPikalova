function calculateDaysToNY() {
var today = new Date;

var todayMS = +new Date;

var nextYear = today.getFullYear() + 1;

var dayNYMS = +new Date(nextYear, 0, 1);

return Math.floor( ( dayNYMS - todayMS ) / ( 3600 * 24 * 1000 ) );
}
var quantityDays = calculateDaysToNY();

calculateDaysToNY();  

