
//IIFE Wrapping
(function() {
//Question Function Constructor
var Question = function(question, answers, correctAnswer) {
    this.question = question,
    this.answers = answers,
    this.correctAnswer = correctAnswer
};

//Question Display Method
Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (i = 0; i < this.answers.length; i++) {
            console.log(i + ':' + this.answers[i]);
            }
}
    
var initialScore = 0;
//Correct Answer Checker Method
Question.prototype.checkAnswer = function() {
    var userAnswer = prompt('Please enter the correct answer here (Enter the number only)');
    if (parseInt(userAnswer) === this.correctAnswer) {
        console.log('That is the correct answer!');
        console.log('------------------------------');
    } else {
        console.log('That is a wrong answer. Please try again!');
        console.log('------------------------------');

    }
    if(userAnswer !== 'exit') {
        nextQuestion();
    }
       
}

//Questions
var q1 = new Question('What is the world\'s biggest mass market luxury car brand?', ['Audi', 'BMW', 'Mercedes Benz', 'Bentley'], 2);

var q2 = new Question('Which is Formula One\'s most popular team?', ['Red Bull', 'Williams', 'Mercedes Benz', 'Force India', 'Ferrari'], 4);

var q3 = new Question('Which Formula One driver is the most successful of all time?', ['Lewis Hamilton', 'Ayrton Senna', 'Sebastian Vettel', 'Michael Schumacher', 'Juan Manuel Fangio', 'Jackie Stewart'], 3);

var questions = [q1, q2, q3];


var n = Math.floor(Math.random() * questions.length);
questions[n].displayQuestion();
questions[n].checkAnswer();

function nextQuestion() {
    var qNext = Math.floor(Math.random() * questions.length);
    questions[qNext].displayQuestion();
    questions[qNext].checkAnswer();
}


}) ();

