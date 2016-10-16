// pop up for each clue element below
$('#trunk').hover(function() {
    $('#trunk-pop-up').show();
   }, function() {
     $('#trunk-pop-up').hide();
   });
 
$('#telescope').hover(function() {
    $('#telescope-pop-up').show();
   }, function() {
     $('#telescope-pop-up').hide();
   });

$('#brown-bear').hover(function() {
    $('#brown-bear-pop-up').show();
   }, function() {
     $('#brown-bear-pop-up').hide();
   });
  
$('#red-chair').hover(function() {
	$('#red-chair-pop-up').show();
	}, function() {
 	 $('#red-chair-pop-up').hide();
	});
  
 $('#green-phone').hover(function() {
	$('#green-phone-pop-up').show();
	}, function() {
 	 $('#green-phone-pop-up').hide();
	});

$('#big-trophy').hover(function() {
	$('#big-trophy-pop-up').show();
	}, function() {
 	 $('#big-trophy-pop-up').hide();
	});

$('#sword').hover(function() {
  $('#sword-pop-up').show();
  }, function() {
   $('#sword-pop-up').hide();
  });

// if player wants to start game over, press re-start button
//   re-start button should direct back to landing page which is the starting point

$('#restart-game').click(function() {
    window.location = 'landing-page.html';
    return false;
});


// TIMER

window.onload = function(){
  var timesUp = document.getElementById('timer'); 

     var sec = 45;
     var timer = setInterval(function(){
       sec--;
       timesUp.innerHTML = "You've got " + sec + " seconds left!";
       
       if(sec == 0){
          window.location = 'not-solved.html';
          clearInterval(timer)
         }
       }, 1000);
}












