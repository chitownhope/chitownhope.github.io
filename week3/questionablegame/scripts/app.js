console.log("Linked.");

var questionArray = ["A 'doe' is what kind of animal?","What food makes up nearly all (around 99%) of a Giant Panda's diet?","Groups of lions are known as what?"];

var answerArray = [	["deer","cow","cat"],
					["bamboo","insects","other Pandas"],
					["pride","party","flock"] 
				  ];

var answerKey = ["deer","bamboo","pride"];


function keepScore (){
	score = score +1;
	return score;
}


function beginGame() {
	$( "#next" ).click(function() {
  		questionAnswerDisplay1();
  	})};
beginGame();



function questionAnswerDisplay1(question,answers,key) {
		$("#answer1").css("backgroundColor","white");
		$("#answer2").css("backgroundColor","white");
		$("#answer3").css("backgroundColor","white");

		$("#questions").text(questionArray[0]);
		$("#answer1").text(answerArray[0][0]);
		$("#answer2").text(answerArray[0][1]);
		$("#answer3").text(answerArray[0][2]);
		
	// citing:  https://stackoverflow.com/questions/7917831/jquery-change-color-on-click
	// Correct/Incorrect answers on the blackboard
		$(function() {  
			$("#answer1").click(function(){
			    $("#questions").html("Correct! Press NEXT to continue.");
			  });
			$("#answer2").click(function(){
			    $("#questions").html("Sorry, that is incorrect.  Press NEXT to continue.");
			  });
			$("#answer3").click(function(){
			    $("#questions").html("Sorry, that is incorrect. Press NEXT to continue.");
			  });
			});

		$( "#next" ).click(function() {
	  		questionAnswerDisplay2();
	  	});

	  	return;


}

function questionAnswerDisplay2(question,answers,key) {
		$("#questions").text(questionArray[1]);
		$("#answer1").text(answerArray[1][0]);
		$("#answer2").text(answerArray[1][1]);
		$("#answer3").text(answerArray[1][2]);

		$(function() {  
			$("#answer1").click(function(){
			    $("#questions").html("Correct! Press NEXT to continue.");
			  });
			$("#answer2").click(function(){
			    $("#questions").html("Sorry, that is incorrect.  Press NEXT to continue.");
			  });
			$("#answer3").click(function(){
			    $("#questions").html("Sorry, that is incorrect. Press NEXT to continue.");
			  });
			});

		$( "#next" ).click(function() {
	  		questionAnswerDisplay3();
	  	});
	  	
	  	return;
 }

function questionAnswerDisplay3(question,answers,key) {
		$("#questions").text(questionArray[2]);
		$("#answer1").text(answerArray[2][0]);
		$("#answer2").text(answerArray[2][1]);
		$("#answer3").text(answerArray[2][2]);

		$(function() {  
			$("#answer1").click(function(){
			    $("#questions").html("Correct! Press NEXT to continue.");
			  });
			$("#answer2").click(function(){
			    $("#questions").html("Sorry, that is incorrect.  Press NEXT to continue.");
			  });
			$("#answer3").click(function(){
			    $("#questions").html("Sorry, that is incorrect. Press NEXT to continue.");
			  });
			});

		$( "#next" ).click(function() {
	  		finishScreen();
	  	});

		return;
	}

function finishScreen() {
	$("#questions").text("Thanks for playing. Game over!");
	$("#answer1").remove();
	$("#answer2").remove();
	$("#answer3").remove();
	$("#next").remove();
};














