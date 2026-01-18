$('button.btn1').click(function (e) { 
  e.preventDefault();
  $('h1').toggleClass('red');
});


$('h1').on('mouseover', function () {
  $('h1').toggleClass('bonito')
});

