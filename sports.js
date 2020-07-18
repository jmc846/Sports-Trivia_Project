//* variables that are global on top */
var questionsArr = [{
	"question": "Who currently leads the NBA in assists? a- russel westbrook, b- lebron james, c- kyrie Irving"},{ "question": "Who curently leads the nba in points  PPG?", }, { "question": "Who currently leads the NBA in rebounds with over 15 per game?", },{ "question": "What team is currently in first place in the Eastern Division of the NBA?", },{ "question": "The New York Knicks will win a playoff series within the next 10 years?", }]
// "options": [ "a- russel westbrook", "b- lebron james", "c- kyrie Irving"],

// "options": [ "a -Bradley beal", "b - Lebron James", "c- James Harden",],

// "options":[ "a- Andre Drummond"," b- Gianis"," c- Anthony Davis",],

// "options":[ "a-Raptors","b-Milwaukee Bucks", "c-Boston Celtics",],

// "options":[ "a -True", "b -False"],



// var answerChoices = [{}];
// var answerSelected = document.querySelector$(onclick)
var rightAnswers = $(".rightAnswers");
// var currentTime = $("<div>").append(currentTime)
// // var score = {};
var questionList = $("#quiz-list");
// API info NYT
var queryUrl = ("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=76F4by9ktUvjFKC7kIl7vqi7REdEE6JA");
ApiKey = "76F4by9ktUvjFKC7kIl7vqi7REdEE6JA";
AppId = "e12869a3-d720-4808-8150-476679bf0862";

// API info SportsRadar
// MLB Trial
// Sports Trivia and Statistics
// Key: a46agsaangqu3rr7st7fze3j
var queryUrl1 = ("http://api.sportradar.us/mlb/trial/v6.6/en/seasons/2019/REG/teams/aa34e0ed-f342-4ec6-b774-c79b47b60e2d/statistics.json?api_key=a46agsaangqu3rr7st7fze3j");

// NBA Trial
// Sports Trivia and Statistics
// Key: nqupruujs87vehqsjscfkv38
var queryUrl2 = ("http://api.sportradar.us/nba/trial/v7/en/seasons/2018/REG/teams/583eca2f-fb46-11e1-82cb-f4ce4684ea4c/statistics.json?api_key=nqupruujs87vehqsjscfkv38");

// NCAA Football Trial v1
// Sports Trivia and Statistics
// Key: ssp447yux4j5bqzzefsma78b
var queryUrl3 = ("http://api.sportradar.us/ncaafb-t1/teams/BAMA/2018/REG/statistics.json?api_key=ssp447yux4j5bqzzefsma78b");

// NCAAMB Trial
// Sports Trivia and Statistics
// Key: qgzqf5ped5dfn4kzjggwgdvw
var queryUrl4 = ("http://api.sportradar.us/ncaamb/trial/v7/en/seasons/2019/REG/teams/c10544de-e3bd-4776-ba2e-83df8c017fd1/statistics.json?api_key=9xaupn4c7mnn3xapz6p7kcbn");

// NFL Official Trial
// Sports Trivia and Statistics
// Key: wpnsv5hxury3ta6nkrskyd6k
var queryUrl5 = ("http://api.sportradar.us/nfl-ot1/seasontd/2018/REG/teams/97354895-8c77-4fd4-a860-32e62ea7382a/statistics.json?api_key=wpnsv5hxury3ta6nkrskyd6k");

/* logic functions */
// questions object appears as page loads

var compareAnswers = {};



/* call back functions*/
// Here we loop through our array using the .each() method and append a new div with each iteration/questions
const displayQuiz = function () {

	for (var i = 0; i < questionsArr.length; i++) {
		var divID = "#q" + (i + 1);
		var quizItem = $(divID);
		var question = questionsArr[i].question;
		console.log(quizItem);
		quizItem.text(question);
		questionList.append(quizItem);
	}
}
displayQuiz();
// function() { };
var displayResults = function (scrollStats) {
	$(".nbaStat").on("click", showStats);
	$("li").append(json.stringify)
		/


		function rollQuestions() {
			// console.log(questions);start question display
		}
	// console.log(event);
	$("li").append(questionsObj[i]);
	for (var i = 0; i < questionsObj.length; i++) {
		console.log(questionsObj[i].q);

		$('li').append(questionsObj[i].q);
	}
	/* event handling functions , all your button clicking*/
	// event to display questions, scroll stats, display results


	console.log("works");


	$("#nbaStat", "#nflStat", "#mlbStat", "#nhlStat").append("click", function () {
		console.log("I see you");

		//naming the website which we should use in the ajax
		queryUrl = ("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=76F4by9ktUvjFKC7kIl7vqi7REdEE6JA");
		//Pulling the random stats from these websites
		function showStats() {
			$.ajax({

				url: queryURL,
				queryUrl1,
				queryUrl2,
				queryUrl3,
				queryUrl4,
				queryUrl5,
				method: "GET"
			})
				// Response for the ajax function
				.then(function (response) {
					$(".menu").text(JSON.stringify(response));

				});
		};









	});

	/* psuedo code for quiz
	the user is presented with prompt for name/email(modal)

	the user is presented with a start button(use modal here)

	the user clicks the start button (use on click function here)
	$("start").on("click",  function (event) {
	  event.preventDefault();


	  function rollQuestions() {
		// console.log(questions);start question display
	};
	  // console.log(event);
	  $("questions-container").append(questions.i)
	  for (var i = 0; i <questions.length; i++) {}



	a new page appears with instructions (modal(header)) /Additional button (on click)
	questions appear(20+) (each show seconds elasped plus actual time) moment js shown here-pulled from espn api
	if question answer incorrect deduction in time pops next question (if conditional --)(json to missed)
	if question correct, modal messages, (json to score )
	quiz continues until either timer elapses or all question answered

	user presented with score /missed data and scroll stats  --*/

	function saveTriviaData() {
		$.ajax({
			url: queryURL,
			queryUrl1,
			queryUrl2,
			queryUrl3,
			queryUrl4,
			queryUrl5
		});
		method: "GET"
			.then(function (response) {
				console.log("works")
				$(".menu").append(JSON.stringify(response));

			});
	}
};

	// rollQuestions



	// }}

