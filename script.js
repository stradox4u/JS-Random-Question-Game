//Function Constructor
(function() {
var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

//Questions
var q1 = new Question('Who designs buildings?', ['Architects', 'Builders', 'Engineers'], '0');

var q2 = new Question('Who builds buildings?', ['Architects', 'Builders', 'Engineers'], '1');

var q3 = new Question('Who is at the head of the construction Industry?', ['Architects', 'Builders', 'Engineers'], '0');

var questions = [q1, q2, q3];

//Score counter
var initialScore = 0;

 //Answer Checking Function
 Question.prototype.checkAnswer = function() {
    var userAnswer = prompt('Please enter the correct answer \(Just enter the number\)');
    if (userAnswer === this.correctAnswer) {
        initialScore ++;
        console.log('That is the correct answer.');
        console.log('Your current score is ' + initialScore + '!');
        console.log('------------------------------------------------------');
    } else {
        
        console.log('That is a wrong answer.');
        console.log('Your current score is ' + initialScore + '!' );
        console.log('------------------------------------------------------');
    }
    if(userAnswer !== 'exit') {selectQuestion()};
}

//Random Question Selector Function
selectQuestion = function() {
    var pickQuestion = Math.round(Math.random() * 10);
    if(pickQuestion >= 0 && pickQuestion <= 3) {
        console.log(q1.question);
        console.log('0: ' + q1.answers[0]);
        console.log('1: ' + q1.answers[1]);
        console.log('2: ' + q1.answers[2]);
        q1.checkAnswer();
    } else if(pickQuestion >3 && pickQuestion <= 7) {
        console.log(q2.question);
        console.log('0: ' + q2.answers[0]);
        console.log('1: ' + q2.answers[1]);
        console.log('2: ' + q2.answers[2]);
        q2.checkAnswer();
    } else {
        console.log(q3.question);
        console.log('0: ' + q3.answers[0]);
        console.log('1: ' + q3.answers[1]);
        console.log('2: ' + q3.answers[2]);
        q3.checkAnswer();
    }
 }
 selectQuestion();

 //Prompt for User Answer
 prompt('Please enter the correct answer \(Just enter the number\)');

}) ();
