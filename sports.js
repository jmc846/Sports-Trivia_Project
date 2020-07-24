// Global variables

// score = parseInt(userAnswer/rightAnswer)

//What data we need to make this work.
//1. Timer and ability to decrement it every second.
//2. A list of questions and answers, etc.
//3. A way to tell what the current question is.
//4. count of correct answers
var timer = 120;
var timerInterval = setInterval(updateTimer, 1000);
var timerExpired = setTimeout(generateScore,0000);
var currentQuestionIndex = 0;
var correctAnswerCount = 0;
var wrongAnswerCount = 0;
var userAnswer= document.querySelector('#useranswer')
//selectors in the dom
var timerEl = document.getElementById("counter");
var questionTitle = document.getElementById('question-title');
var begin = document.getElementById('begin');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');

//What actions do we need.
//1. fun change the timer value and print it to the screen.ction to
//2. function to take the current question and print it to the screen.
//3. function to check a user's answer and see if it's correct.
//4. event handlers to call the answre check when a answer is clicked.

var questions = [{
  q: "Who currently leads the NBA in assists?",
  a: "a- russel westbrook,",
  b: "b- lebron james,",
  c: "c- kyrie Irving",
  d: "d- Damian Lillard,",
  rightAnswer: 'b',
},

{
  q: "Who curently leads the nba in points  PPG?",
  a: "a -Bradley beal",
  b: "b - Lebron James",
  c: "c- James Harden",
  d: "d- Trae Young",
  rightAnswer: 'c',

},

{
  q: "Who currently leads the NBA in rebounds with over 15 per game?",
  a: "a- Andre Drummond,",
  b: "b- Gianis,",
  c: "c- Anthony Davis",
  d: "d-Tacko ",
  rightAnswer: "b",

},

{
  q:  "What team is currently in first place in the Eastern Division of the NBA?",
  a: "a-Raptors",
  b: "b-Milwaukee Bucks",
  c: "c-Boston Celtics",
  d: "d-Philadelphia 76ers",
  rightAnswer: "b",

},

{
  q: "The New York Knicks will win a playoff series within the next 10 years?",
  a: "TRUE",
  b: "FALSE",
  c: "NOT THIS CENTURY",
  d: "FIRE DOLAN",
  rightAnswer: "d",

}];

document.addEventListener("score",function(){})  //add a to the dom..
function generateScore() {
console.log("HEY THERE I WORK");
showscore.innerHTML= `${correctAnswerCount/wrongAnswerCount} score. `


}
function updateTimer() {
  timerEl.innerHTML = `${timer} seconds left.`
  timer = timer - 1;
}
document.addEventListener("begin",function(){})  //add a to the dom..
function displayCurrentQuestion() {
console.log("HEY THERE I WORK");
  questionTitle.innerHTML = questions[currentQuestionIndex].q ;
  
  a.innerHTML = questions[currentQuestionIndex].a
  a.addEventListener('click', () => { checkAnswer('a') })
   
  b.innerHTML = questions[currentQuestionIndex].b
  b.addEventListener('click', () => { checkAnswer('b') })
  console.log("HEY THERE I WORK TOO")
  c.innerHTML = questions[currentQuestionIndex].c
  c.addEventListener('click', () => { checkAnswer('c') })

  d.innerHTML = questions[currentQuestionIndex].d
  d.addEventListener('click', () => { checkAnswer('d') })
} 
 
  //
displayCurrentQuestion()
updateTimer()


//call display currentQuestion
function checkAnswer(userAnswer) {
  //compare user answer to current question right answer.
  if (document.querySelector('#userAnswer') === questions[currentQuestionIndex].rightAnswer){
  correctAnswerCount ++ ;  
  //increment correctAnswerCount if they are the same.
  currentQuestionIndex ++;
  //increment currentQuestionIndex by 1
  } else (document.querySelector('#userAnswer') !== questions[currentQuestionIndex].rightAnswer);{
    wrongAnswerCount 
   currentQuestionIndex ++;
   timer -10
     
   }
   displayCurrentQuestion();

  // checkAnswer()
  setInterval(updateTimer, 4000);


  generateScore();
  
}






 





  
