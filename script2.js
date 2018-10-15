
(function() {
//Question Function Constructor
var Question = function(question, answers, correctAnswer) {
    this.question = question,
    this.answers = answers,
    this.correctAnswer = correctAnswer
};

//Random Question Selector
    var n = Math.floor(Math.random() * 3);

//Question Display Method
Question.prototype.displayQuestion = function() {
    console.log(questions[n].question);
    for (i = 0; i < questions[n].answers.length; i++) {
            console.log(i + ':' + questions[n].answers[i]);
            }
}
    

//Correct Answer Checker Method
Question.prototype.checkAnswer = function() {
    var userAnswer = prompt('Please enter the correct answer here (Enter the number only)');
    if (parseInt(userAnswer) === this.correctAnswer) {
        console.log('That is the correct answer!');
    } else {
        console.log('That is a wrong answer. Please try again!');
    }
}

//Questions
var q1 = new Question('What is the world\'s biggest mass market luxury car brand?', ['Audi', 'BMW', 'Mercedes Benz', 'Bentley'], 2);

var q2 = new Question('Which is Formula One\'s most popular team?', ['Red Bull', 'Williams', 'Mercedes Benz', 'Ferrari', 'Force India'], 3);

var q3 = new Question('Which Formula One driver is the most successful of all time?', ['Lewis Hamilton', 'Ayrton Senna', 'Felipe Massa', 'Sebastian Vettel', 'Michael Schumacher', 'Juan Manuel Fangio', 'Jackie Stewart'], 4);

var questions = [q1, q2, q3];

questions[n].displayQuestion();
questions[n].checkAnswer();
}) ();


