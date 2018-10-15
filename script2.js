
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
//Score Counter Variable, Mutated on each Correct Answer  
var initialScore = 0;
//Correct Answer Checker Method
Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correctAnswer) {
        initialScore++;
        console.log('That is the correct answer!');
        console.log('Your current score is ' + initialScore + '!');
        console.log('------------------------------');
    } else {
        console.log('That is a wrong answer. Please try again!');
        console.log('Your current score is ' + initialScore + '!');
        console.log('------------------------------');
    }
    
}

//Questions
var q1 = new Question('What is the world\'s biggest mass market luxury car brand?', ['Audi', 'BMW', 'Mercedes Benz', 'Bentley'], 2);

var q2 = new Question('Which is Formula One\'s most popular team?', ['Red Bull', 'Williams', 'Mercedes Benz', 'Force India', 'Ferrari'], 4);

var q3 = new Question('Which Formula One driver is the most successful of all time?', ['Lewis Hamilton', 'Ayrton Senna', 'Sebastian Vettel', 'Michael Schumacher', 'Juan Manuel Fangio', 'Jackie Stewart'], 3);

var questions = [q1, q2, q3];

function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var userAnswer = prompt('Please enter the correct answer here (Enter the number only)');

    if(userAnswer!== 'exit') {
        questions[n].checkAnswer(parseInt(userAnswer));
        nextQuestion();
    } 
    
}
nextQuestion();

}) ();

