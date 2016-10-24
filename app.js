

var questions = [
	{
		title: 'Which of these is not a neighborhood of Boston?',
		answers: ['Brighton','Allston','Cambridge','Charlestown'],
		correct: 2
	},{
		title: 'Which of these sites is not on the historic Freedom Trail?',
		answers: ['Old North Church','Fanueil Hall','Boston Tea Party Museum','Harvard Yard'],
		correct: 3
	},{
		title: 'Who is the Mayor of Boston?',
		answers: ['Marty Walsh','Charlie Baker','Maura Healey','Elizabeth Warren'],
		correct: 0
	},{
		title: 'What is the nickname of the Boston Subway system?',
		answers: ['the Metro','the Subway','the T','the Tube'],
		correct: 2
	},
];

var score = 0;
var currentQuestion = 0;


$(document).ready(function(){
	displayQuestion();
	$('.next').click(function(){
		var guess = $('input[name="guess"]:checked').val();
		checkAnswer(guess);
	});

	$('.new-game').click(function(){
		newGame();
	});
});

function displayQuestion(){
	if(currentQuestion < questions.length){
		var question = questions[currentQuestion]; 
		$('.question').text(question.title);
		$('.answers').html('');
		for (var i = 0; i < question.answers.length; i++) {
			$('.answers').append('<li><input type="radio" name="guess" value="'+i+'" id="'+i+'"/><label for="'+i+'">'+question.answers[i]+'</label></li>');
		}
	} else {
		showSummary();
	}
}

function checkAnswer(guess){
	var question = questions[currentQuestion];
	if(guess == question.correct){
		score++;
	}
	currentQuestion++;
	displayQuestion();
}

function showSummary(){
	$('main').hide();
	$('.summary h3').text('You got '+score+' of '+questions.length+' correct. That is '+((score/questions.length)*100)+'% correct!');
	$('.summary').show();
}

function newGame(){
	$('main').show();
	$('.summary').hide();
	score = 0;
	currentQuestion = 0;
	displayQuestion();
}
