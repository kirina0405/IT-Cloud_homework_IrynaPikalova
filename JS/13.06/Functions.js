function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yyyy = date.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
}

var date = new Date(); 
formatDate(date); // 2017-06-16

var date = 1496851371222; 
formatDate(new Date(date)); // 2017-06-07

var date = '12 January 2017';
formatDate(new Date(Date.parse(date))); // 2017-06-12

var date = ['12 January 2017'];
formatDate(new Date( Date.parse(date.join('')))); // 2017-06-12

