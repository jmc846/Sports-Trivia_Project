//* variables that are global on top */
var questionsArr = [{ question: "Who currently leads the NBA in assists? a- russel westbrook, b- lebron james, c- kyrie Irving" },
{ question: "Who curently leads the nba in points  PPG? a -Bradley beal, b - Lebron James, c- James Harden" },
{ question: "Who currently leads the NBA in rebounds with over 15 per game? a- Andre Drummond,  b- Gianis,  c- Anthony Davis" },
{ question: "What team is currently in first place in the Eastern Division of the NBA? a-Raptors, b-Milwaukee Bucks, c-Boston Celtics" },
{ question: "The New York Knicks will win a playoff series within the next 10 years? a -True, b -False" }]
var resNBA= document.querySelector('resNBA');
var resNFL = document.querySelector('resNFL');
var resMLB= document.querySelector('resMLB');
var resNCAAFB= document.querySelector('resNCAAFB');
var rightAnswers = $(".rightAnswers");
 var currentTime = $("<div>").append(currentTime)

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
function showStats(queryURL) {
	var params = {mlbStat, nbaStat, ncaafbStat, nflStat};
	params.target = queryUrl;


	console.log("queryURL", queryURL)
	$.ajax({

		url: "https://greve-chaise-90856.herokuapp.com/proxy/api/v1?" + $.param(params),
		method: "GET",
	})
		// Response for the ajax function
		.then(function (response) {
			
			console.log("above is response");
		}
		);
	}
/* call back functions*/
// Here we loop through our array using the .each() method and append a new div with each iteration/questions
const displayQuiz = function () {

	for (var i = 0; i < questionsArr.length; i++) {
		var divID = "#q" + (i + 1);
		var quizItem = $(divID);
		var questionList = questionsArr[i].question;
		console.log(questionList);
		document.querySelector("#quizitem").append(questionList)
	
		
	}
}
displayQuiz();

/* event handling functions , all your button clicking*/
// event to display questions, scroll stats, display results
$(".sports-stat").on("click", function () {
	
	
	var sport = $(this).attr("data-stat");
	console.log(sport);
	//switch()
	console.log("I see you");
	switch(sport){

		case 'nba':
			if (document.getElementById(".nbaStat"),showStats(nbaStat))
			showStats(nbaStat)
			document.querySelector("#nbastatistics").append("Team",resNBA)
		    console.log(queryUrl)
			break;
		case 'mlb':
			if (document.getElementById(".mlbStat"),showStats(mlbStat))
			showStats(mlbStat)
			document.querySelector("#mlbstatistics").append("Team",resMLB)
			break;	
		 	case 'nfl':
				if (document.getElementById(".nflStat"),showStats(nflStat))
				showStats(nflStat)
				document.querySelector("#nflstatistics").append("Team",resNFL)
				break;
				case 'ncaafb':
					if (document.getElementById(".ncaafbStat"),showStats(ncaafbStat))
				 showStats(ncaafbStat)
				 document.querySelector("#ncaafbstatistics").append("Team",resNCAAFB)
		 		break;
		 default:
			console.log("try again");
			}
});


		





