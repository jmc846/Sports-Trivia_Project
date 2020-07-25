//* variables that are global on top */
var timer = 120;
var timerInterval = setInterval(updateTimer, 1000);
var timerExpired = setTimeout(generateScore, 0000);
var currentQuestionIndex = 0;
var correctAnswerCount = 0;
var wrongAnswerCount = 0;
var userAnswer = document.querySelector('#useranswer')
//selectors in the dom
var timerEl = document.getElementById("counter");
var questionTitle = document.getElementById('question-title');
var begin = document.getElementById('begin');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
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
	a: "a -Bradley beal,",
	b: "b - Lebron James,",
	c: "c- James Harden,",
	d: "d- Trae Young,",
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
	q: "What team is currently in first place in the Eastern Division of the NBA?",
	a: "a-Raptors",
	b: "b-Milwaukee Bucks,",
	c: "c-Boston Celtics,",
	d: "d-Philadelphia 76ers,",
	rightAnswer: "b",

},

{
	q: "The New York Knicks will win a playoff series within the next 10 years?",
	a: "TRUE,",
	b: "FALSE,",
	c: "NOT THIS CENTURY,",
	d: "FIRE DOLAN,",
	rightAnswer: "d",

}];

var rightAnswers = $(".rightAnswers");
var currentTime = $("<div>").append(currentTime);

// API info NYT
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=76F4by9ktUvjFKC7kIl7vqi7REdEE6JA";
ApiKey = "76F4by9ktUvjFKC7kIl7vqi7REdEE6JA";
AppId = "e12869a3-d720-4808-8150-476679bf0862";

// API info SportsRadar
// MLB Trial
// Sports Trivia and Statistics
// Key: a46agsaangqu3rr7st7fze3j
var mlbStat = "https://api.sportradar.us/mlb/trial/v6.6/en/seasons/2019/REG/teams/aa34e0ed-f342-4ec6-b774-c79b47b60e2d/statistics.json?api_key=a46agsaangqu3rr7st7fze3j";

// NBA Trial
// Sports Trivia and Statistics
// Key: nqupruujs87vehqsjscfkv38
var nbaStat = "https://api.sportradar.us/nba/trial/v7/en/seasons/2018/REG/teams/583eca2f-fb46-11e1-82cb-f4ce4684ea4c/statistics.json?api_key=nqupruujs87vehqsjscfkv38";

// NCAA Football Trial v1
// Sports Trivia and Statistics
// Key: ssp447yux4j5bqzzefsma78b
var ncaafbStat = "https://api.sportradar.us/ncaafb-t1/teams/BAMA/2018/REG/statistics.json?api_key=ssp447yux4j5bqzzefsma78b";

// NCAAMB Trial
// Sports Trivia and Statistics
// Key: qgzqf5ped5dfn4kzjggwgdvw
var ncaambStat = "https://api.sportradar.us/ncaamb/trial/v7/en/seasons/2019/REG/teams/c10544de-e3bd-4776-ba2e-83df8c017fd1/statistics.json?api_key=9xaupn4c7mnn3xapz6p7kcbn";

// NFL Official Trial
// Sports Trivia and Statistics
// Key: wpnsv5hxury3ta6nkrskyd6k
var nflStat = "https://api.sportradar.us/nfl-ot1/seasontd/2018/REG/teams/97354895-8c77-4fd4-a860-32e62ea7382a/statistics.json?api_key=wpnsv5hxury3ta6nkrskyd6k";

/* logic functions */

var compareAnswers = {};
// var responseData;
function showStats(qUrl) {
	// var params = {
	// 	mlbStat,
	// 	nbaStat,
	// 	ncaafbStat,
	// 	nflStat
	// };
	var params = {};
	params.target = qUrl;


	console.log("queryURL", qUrl)
	return $.ajax({
		url: "https://greve-chaise-90856.herokuapp.com/proxy/api/v1?" + $.param(params),
		method: "GET",
	})
		// Response for the ajax function
		.then(function (response) {
			console.log("above is response");
			return response;
		});
}
/* event handling functions , all your button clicking*/
// event to display questions, scroll stats, display results
$(".sports-stat").on("click", function () {


	var sport = $(this).attr("data-stat");
	console.log(sport);
	//switch()
	console.log("I see you");
	switch (sport) {

		case 'nba':
			showStats(nbaStat).then(
				function(response){
					console.log(response);
					window.dResponse = response;
					for (let i = 1; i < 4; i++) {
						let playerID = "#td" + i + "-player-name";
						let teamID = "#td" + i + "-team";
						let posID = "#td" + i + "-pos"
						$(playerID).text(response.players[i].full_name);
						// $(teamID).text(resNBA.name);
						// $(posID).text(resNBA.players[i].primary_position);
					}

				
console.log("--")
				}
			);
			console.log(resNBA.players[1].full_name);
			for (let i = 1; i < 4; i++) {
				let playerID = "#td" + i + "-player-name";
				let teamID = "#td" + i + "-team";
				let posID = "#td" + i + "-pos"
				$(playerID).text(resNBA.players[i].full_name);
				$(teamID).text(resNBA.name);
				$(posID).text(resNBA.players[i].primary_position);
			}

			//console.log(queryUrl)
			break;
		case 'mlb':
			showStats(resMLB);
			console.log(resMLB.players[4].full_name);
			for (let i = 1; i < 4; i++) {
				let playerID = "#td" + i + "-player-name";
				let teamID = "#td" + i + "-team";
				let posID = "#td" + i + "-pos"
				$(playerID).text(resMLB.players[i].full_name);
				$(teamID).text(resMLB.name);
				$(posID).text(resMLB.players[i].primary_position);
			}

			break;
		case 'nfl':

			showStats(resNFL);
			console.log(resNFL.players[1].full_name);
			for (let i = 1; i < 4; i++) {
				let playerID = "#td" + i + "-player-name";
				let teamID = "#td" + i + "-team";
				let posID = "#td" + i + "-pos"
				$(playerID).text(resNFL.players[i].full_name);
				$(teamID).text(resNFL.name);
				$(posID).text(resNFL.players[i].primary_position);
			}

			break;
		case 'ncaafb':

			showStats(resNCAAFB);
			console.log(resNCAAFB.players[1].full_name);
			for (let i = 1; i < 4; i++) {
				let playerID = "#td" + i + "-player-name";
				let teamID = "#td" + i + "-team";
				let posID = "#td" + i + "-pos"
				$(playerID).text(resNCAAFB.players[i].full_name);
				$(teamID).text(resNCAAFB.name);
				$(posID).text(resNCAAFB.players[i].primary_position);
			}
		default:
			console.log("try again");
	}
})
document.addEventListener("score", function () { })  //add a to the dom..
function generateScore() {
	console.log("HEY THERE I WORK");
	showscore.innerHTML = `${correctAnswerCount / wrongAnswerCount} score. `


}
function updateTimer() {
	timerEl.innerHTML = `${timer} seconds left.`
	timer = timer - 1;
}
document.addEventListener("begin", function () { })  //add a to the dom..
function displayCurrentQuestion() {
	console.log("HEY THERE I WORK");
	questionTitle.innerHTML = questions[currentQuestionIndex].q;

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
	if (document.querySelector('#userAnswer') === questions[currentQuestionIndex].rightAnswer) {
		correctAnswerCount++;
		//increment correctAnswerCount if they are the same.
		currentQuestionIndex++;
		//increment currentQuestionIndex by 1
	} else (document.querySelector('#userAnswer') !== questions[currentQuestionIndex].rightAnswer); {
		wrongAnswerCount
		currentQuestionIndex++;
		timer - 10

	}
	displayCurrentQuestion();

	// checkAnswer()
	setInterval(updateTimer, 4000);


	generateScore();

}











