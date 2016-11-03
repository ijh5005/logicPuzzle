"use strict";

$(document).ready( function () {
	var i, length;

	//contains all colors and text for each puzzle
	var puzzle5by5 = [

		{
		    id: 1,
		    title: "COOK FOR LOVE",
		    story: "",
		    colors: 	{
		    				light: "#FD7C7F",
		    				medium: "#E54D51",
		    				dark: "#830003"
		    			},
		    storyPaper: "storyPaperRed.png",
		    galleryPaper: "galleryPaperRed.png",
		    topBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "Ayanna & Jamal",
		    					second: "Emma & Matthew",
		    					third: "Grace & Richie",
		    					forth: "Lauren & Connor",
		    					fifth: "Rylee & Noah"
		    				},
		    				secondBoxHeader: "",
		    				secondBox: {
		    					first: "California",
		    					second: "Idaho",
		    					third: "Nevada",
		    					forth: "New York",
		    					fifth: "Pennsylvania"
		    				},
		    				thirdBoxHeader: "",
		    				thirdBox: {
		    					first: "Chicken Pot Pie",
		    					second: "Lobster",
		    					third: "Ramen Noodle",
		    					forth: "Steak and Potato",
		    					fifth: "Vegetarian"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "10",
		    					second: "100",
		    					third: "1000",
		    					forth: "10000",
		    					fifth: "100000"
		    				},
		    				//The next two objects comes from the topBarText secondBoxHeader, secondBox, thirdBoxHeader, and thirdBoxHeader info
		    			},
		    clues: [
		              [
		                "This is the first clue",
		                "This is the second clue",
		                "This is the third clue",
		                "This is the forth clue",
		                "This is the fifth clue",
		                "This is the sixth clue",
		                "This is the seventh clue",
		                "This is the eight clue"
		              ]
		          ]
		},

		{
		    id: 2,
		    title: "GOODBYE OLD FRIEND",
		    story: "",
		    colors: 	{
		    				light: "#FF9D79",
		    				medium: "#F05C25",
		    				dark: "#9D2A00"
		    			},
		    storyPaper: "storyPaperOrange.png",
		    galleryPaper: "galleryPaperOrange.png",
		    topBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "Jessica",
		    					second: "Jesse",
		    					third: "Kevin",
		    					forth: "Sara",
		    					fifth: "Tera"
		    				},
		    				secondBoxHeader: "",
		    				secondBox: {
		    					first: "Granny&#39s House",
		    					second: "Jon&#39s Restaurant",
		    					third: "Mario&#39s Diner",
		    					forth: "Kato&#39s Parks",
		    					fifth: "Sycamore Train"
		    				},
		    				thirdBoxHeader: "",
		    				thirdBox: {
		    					first: "Eat Dinner",
		    					second: "Pizza tutorial",
		    					third: "Plays Cards",
		    					forth: "Play golf",
		    					fifth: "People watch"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "3:00PM",
		    					second: "4:00PM",
		    					third: "7:00PM",
		    					forth: "8:00PM",
		    					fifth: "10:00PM"
		    				},
		    				//The next two objects comes from the topBarText secondBoxHeader, secondBox, thirdBoxHeader, and thirdBoxHeader info
		    			},
		    clues: [
		              [
		                "This is the first clue",
		                "This is the second clue",
		                "This is the third clue",
		                "This is the forth clue",
		                "This is the fifth clue",
		                "This is the sixth clue",
		                "This is the seventh clue",
		                "This is the eight clue"
		              ]
		          ]
		},

		{
		    id: 3,
		    title: "TELEVISION SHOWDOWN",
		    story: "Tiffany Applebottom is a professional slacker. She spent her entire life watching tv and sitting on the couch. Her life was based on watching romantic comedies, survivals shows, and any other show that the Disarm Network creates. So imagine her surprise when she turned on her television and realized none of her shows came on at the right time. Tiffany wants to write a strongly worded letter to the Disarm Network complaining about the network&#39s sudden changes. In order for her to write the letter she must know the name of the show, what time it used to come on, the shows new time, and what genre the show is. Please help TIffany figure this out quickly before she does something crazy, like get a job.", //&#39 is the symbol an apostrophe
		    colors: 	{
		    				light: "#E4D106",
		    				medium: "black",
		    				dark: "#B1A200"
		    			},
		    storyPaper: "storyPaperYellow.png",
		    galleryPaper: "galleryPaperYellow.png",
		    topBarText: {
		    				firstBoxHeader: "Name of TV show",
		    				firstBox: {
		    					first: "Better if used",
		    					second: "Dig it up",
		    					third: "Face the music",
		    					forth: "Fly on the wall",
		    					fifth: "Passion and perl"
		    				},
		    				secondBoxHeader: "New Time",
		    				secondBox: {
		    					first: "6:00PM",
		    					second: "7:00PM",
		    					third: "8:00PM",
		    					forth: "9:00PM",
		    					fifth: "10:00PM"
		    				},
		    				thirdBoxHeader: "Genre",
		    				thirdBox: {
		    					first: "Drama",
		    					second: "Gardening",
		    					third: "Reality",
		    					forth: "Romantic Comedy",
		    					fifth: "Soap Opera"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "Old Times",
		    				firstBox: {
		    					first: "6:00PM",
		    					second: "7:00PM",
		    					third: "8:00PM",
		    					forth: "9:00PM",
		    					fifth: "10:00PM"
		    				},
		    				//The next two objects comes from the topBarText secondBoxHeader, secondBox, thirdBoxHeader, and thirdBoxHeader info
		    			},
		    clues: [
		              [
		                "This is the first clue",
		                "This is the second clue",
		                "This is the third clue",
		                "This is the forth clue",
		                "This is the fifth clue",
		                "This is the sixth clue",
		                "This is the seventh clue",
		                "This is the eight clue"
		              ]
		          ]
		},

		{
		    id: 4,
		    title: "",
		    story: "",
		    colors: 	{
		    				light: "#4DC57E",
		    				medium: "#008837",
		    				dark: "#006B2B"
		    			},
		    storyPaper: "storyPaperGreen.png",
		    galleryPaper: "galleryPaperGreen.png",
		    topBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "",
		    					second: "",
		    					third: "",
		    					forth: "",
		    					fifth: ""
		    				},
		    				secondBoxHeader: "",
		    				secondBox: {
		    					first: "",
		    					second: "",
		    					third: "",
		    					forth: "",
		    					fifth: ""
		    				},
		    				thirdBoxHeader: "",
		    				thirdBox: {
		    					first: "",
		    					second: "",
		    					third: "",
		    					forth: "",
		    					fifth: ""
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "",
		    					second: "",
		    					third: "",
		    					forth: "",
		    					fifth: ""
		    				},
		    				//The next two objects comes from the topBarText secondBoxHeader, secondBox, thirdBoxHeader, and thirdBoxHeader info
		    			},
		    clues: [
		              [
		                "This is the first clue",
		                "This is the second clue",
		                "This is the third clue",
		                "This is the forth clue",
		                "This is the fifth clue",
		                "This is the sixth clue",
		                "This is the seventh clue",
		                "This is the eight clue"
		              ]
		          ]
		},

		{
		    id: 5,
		    title: "OPPORTUNITY'S KNOCKING",
		    story: "",
		    colors: 	{
		    				light: "#5C64F9",
		    				medium: "#010CD8",
		    				dark: "#020AA1"
		    			},
		    storyPaper: "storyPaperBlue.png",
		    galleryPaper: "galleryPaperBlue.png",
		    topBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "Brown U",
		    					second: "Mass. Institute",
		    					third: "Stanford U",
		    					forth: "Princeton U",
		    					fifth: "Yale U"
		    				},
		    				secondBoxHeader: "",
		    				secondBox: {
		    					first: "20,000",
		    					second: "35,000",
		    					third: "40,000",
		    					forth: "45,000",
		    					fifth: "Full ride"
		    				},
		    				thirdBoxHeader: "",
		    				thirdBox: {
		    					first: "Campus job",
		    					second: "Free books",
		    					third: "Free laptops",
		    					forth: "Free housing",
		    					fifth: "Mini fridge"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "Alison",
		    					second: "Christina",
		    					third: "George",
		    					forth: "Miranda",
		    					fifth: "Shane"
		    				},
		    				//The next two objects comes from the topBarText secondBoxHeader, secondBox, thirdBoxHeader, and thirdBoxHeader info
		    			},
		    clues: [
		              [
		                "This is the first clue",
		                "This is the second clue",
		                "This is the third clue",
		                "This is the forth clue",
		                "This is the fifth clue",
		                "This is the sixth clue",
		                "This is the seventh clue",
		                "This is the eight clue"
		              ]
		          ]
		},

		{
		    id: 6,
		    title: "OBSESSED MUCH",
		    story: "",
		    colors: 	{
		    				light: "#A35DA3",
		    				medium: "#741F74",
		    				dark: "#410041"
		    			},
		    storyPaper: "storyPaperPurple.png",
		    galleryPaper: "galleryPaperPurple.png",
		    topBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "Bunnair",
		    					second: "Gooserine",
		    					third: "Hippomean",
		    					forth: "Moodle",
		    					fifth: "Peregrine"
		    				},
		    				secondBoxHeader: "",
		    				secondBox: {
		    					first: "Grass type",
		    					second: "Fight type",
		    					third: "Fire type",
		    					forth: "Flying type",
		    					fifth: "Water type"
		    				},
		    				thirdBoxHeader: "",
		    				thirdBox: {
		    					first: "Avante kick",
		    					second: "Blastro Pump",
		    					third: "Flaming foette",
		    					forth: "Flapping wind",
		    					fifth: "Forest frenzy"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "2011",
		    					second: "2012",
		    					third: "2013",
		    					forth: "2014",
		    					fifth: "2015"
		    				},
		    				//The next two objects comes from the topBarText secondBoxHeader, secondBox, thirdBoxHeader, and thirdBoxHeader info
		    			},
		    clues: [
		              [
		                "This is the first clue",
		                "This is the second clue",
		                "This is the third clue",
		                "This is the forth clue",
		                "This is the fifth clue",
		                "This is the sixth clue",
		                "This is the seventh clue",
		                "This is the eight clue"
		              ]
		          ]
		},

		{
		    id: 7,
		    title: "A WHOLE NEW WORLD",
		    story: "",
		    colors: 	{
		    				light: "#FD7C7F",
		    				medium: "#E54D51",
		    				dark: "#830003"
		    			},
		    storyPaper: "storyPaperRed.png",
		    galleryPaper: "galleryPaperRed.png",
		    topBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "Algebra",
		    					second: "English",
		    					third: "Physical Science",
		    					forth: "Spanish",
		    					fifth: "World History"
		    				},
		    				secondBoxHeader: "",
		    				secondBox: {
		    					first: "101",
		    					second: "107",
		    					third: "204",
		    					forth: "209",
		    					fifth: "211"
		    				},
		    				thirdBoxHeader: "",
		    				thirdBox: {
		    					first: "Mr. Birch",
		    					second: "Mr. Elm",
		    					third: "Ms. Juniper",
		    					forth: "Mrs. Oak",
		    					fifth: "Ms. Rowan"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "7:45",
		    					second: "8:30",
		    					third: "9:15",
		    					forth: "10:45",
		    					fifth: "1:00"
		    				},
		    				//The next two objects comes from the topBarText secondBoxHeader, secondBox, thirdBoxHeader, and thirdBoxHeader info
		    			},
		    clues: [
		              [
		                "This is the first clue",
		                "This is the second clue",
		                "This is the third clue",
		                "This is the forth clue",
		                "This is the fifth clue",
		                "This is the sixth clue",
		                "This is the seventh clue",
		                "This is the eight clue"
		              ]
		          ]
		},

		{
		    id: 8,
		    title: "",
		    story: "",
		    colors: 	{
		    				light: "#FF9D79",
		    				medium: "#F05C25",
		    				dark: "#9D2A00"
		    			},
		    storyPaper: "storyPaperOrange.png",
		    galleryPaper: "galleryPaperOrange.png",
		    topBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "",
		    					second: "",
		    					third: "",
		    					forth: "",
		    					fifth: ""
		    				},
		    				secondBoxHeader: "",
		    				secondBox: {
		    					first: "",
		    					second: "",
		    					third: "",
		    					forth: "",
		    					fifth: ""
		    				},
		    				thirdBoxHeader: "",
		    				thirdBox: {
		    					first: "",
		    					second: "",
		    					third: "",
		    					forth: "",
		    					fifth: ""
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "",
		    					second: "",
		    					third: "",
		    					forth: "",
		    					fifth: ""
		    				},
		    				//The next two objects comes from the topBarText secondBoxHeader, secondBox, thirdBoxHeader, and thirdBoxHeader info
		    			},
		    clues: [
		              [
		                "This is the first clue",
		                "This is the second clue",
		                "This is the third clue",
		                "This is the forth clue",
		                "This is the fifth clue",
		                "This is the sixth clue",
		                "This is the seventh clue",
		                "This is the eight clue"
		              ]
		          ]
		},

		{
		    id: 9,
		    title: "",
		    story: "",
		    colors: 	{
		    				light: "#E4D106",
		    				medium: "black",
		    				dark: "#B1A200"
		    			},
		    storyPaper: "storyPaperYellow.png",
		    galleryPaper: "galleryPaperYellow.png",
		    topBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "",
		    					second: "",
		    					third: "",
		    					forth: "",
		    					fifth: ""
		    				},
		    				secondBoxHeader: "",
		    				secondBox: {
		    					first: "",
		    					second: "",
		    					third: "",
		    					forth: "",
		    					fifth: ""
		    				},
		    				thirdBoxHeader: "",
		    				thirdBox: {
		    					first: "",
		    					second: "",
		    					third: "",
		    					forth: "",
		    					fifth: ""
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "",
		    				firstBox: {
		    					first: "",
		    					second: "",
		    					third: "",
		    					forth: "",
		    					fifth: ""
		    				},
		    				//The next two objects comes from the topBarText secondBoxHeader, secondBox, thirdBoxHeader, and thirdBoxHeader info
		    			},
		    clues: [
	                ["This is the first clue"],
	                ["This is the second clue"],
	                ["This is the third clue"],
	                ["This is the forth clue"],
	                ["This is the fifth clue"],
	                ["This is the sixth clue"],
	                ["This is the seventh clue"],
	                ["This is the eight clue"]
		          ]
		},
	];

	//populate the gallery page
	  var populationGallery = function () {
	  	//markup
	  	length = puzzle5by5.length;
	  	var markup = "<div class='puzzleOption' data=0><span>"+puzzle5by5[0].title+"</span></div>"
	  	for ( i = 1; i < length; i++) {
	  		markup += "<div class='puzzleOption' data="+i+"><span>"+puzzle5by5[i].title+"</span></div>"
	  	}
	  	$("#puzzleGallery").html(markup);
	  };
	  populationGallery();

	  //give each puzzle its theme page color
	  var populatePaper = function () {
	  	var length = puzzle5by5.length;
	  	//gallery puzzle pages
	  	for ( i = 0; i < length; i++) { //"+puzzle5by5[i].galleryPaper+"
	  		$(".puzzleOption[data="+i+"]").css("background-image", "url("+puzzle5by5[i].galleryPaper+")");
	  	}
	  };
	  populatePaper();
	//choose a puzzle from the gallery
		$(".puzzleOption").click( function () {
			var tempHolder, length, j;
			var location = $(this).attr("data");
			tempHolder = location;
			$("#puzzleGallery").animate({
				zoom: "40%"
			}, {duration: 1000, complete: function (){
				$("#puzzleGallery").css("display", "none");
				$("#puzzleContainer").delay(50).animate({
					zoom: "100%"
				}, {duration: 1200, 
					start: function () {
						$("#puzzleContainer").css("display", "block");
						},
					complete: function (){
						$("#storyPage").css("background-image", "url("+puzzle5by5[tempHolder].storyPaper+")");
						}
					});
			}});
			// var $data = $(this).attr("data");
			//display all othe puzzleOption to be none
			// $(".puzzleOption[data!="+$data+"]").css("display", "none");
			// $(this).attr("id", "selected");

			//make the selected puzzleOption grow on click
			// $(this).animate( {
			// 	top: "40px",
			//     margin: "0 auto",
			//     height: "740px",
			//     width: "645px",
			//     backgroundSize: "92%",
			// }, {duration: 1000, complete: function () {
			// 	//fadeOut the other puzzles
			// 	$("#puzzleGallery").fadeOut();
			// 	//fadeIn the clicked puzzle's story page
			// 	$("#puzzleContainer").delay(500).fadeIn();
			// 	//undo the animateion when the puzzleOption has faded
			// 	$(this).css("top", "").css("margin", "").css("height", "31.25em").css("width", "23.75em").css("background-size", "23.8em 31.3em");
			// }});
		});
	
	//markup creator function
	var markup = function (selector, target){
		$(selector).html(target);
	};

	//set puzzle to the selected gallery puzzle
		var puzzleInheritance = function (){
		$(".puzzleOption").click( function () {
			var tempHolder, length, j;
			var location = $(this).attr("data");
			tempHolder = location;
			//$("#storyPage").delay(5000).css("background-image", "url("+puzzle5by5[tempHolder].storyPaper+")");
			//.topBarOption markup
				markup("#topSecond .topBar span", puzzle5by5[tempHolder].topBarText.firstBoxHeader);
				markup("#topThird .topBar span", puzzle5by5[tempHolder].topBarText.secondBoxHeader);
				markup("#topLast .topBar span", puzzle5by5[tempHolder].topBarText.thirdBoxHeader);
				markup("#topSecond .topBarOption[data=1] span", puzzle5by5[tempHolder].topBarText.firstBox.first);
				markup("#topSecond .topBarOption[data=2] span", puzzle5by5[tempHolder].topBarText.firstBox.second);
				markup("#topSecond .topBarOption[data=3] span", puzzle5by5[tempHolder].topBarText.firstBox.third);
				markup("#topSecond .topBarOption[data=4] span", puzzle5by5[tempHolder].topBarText.firstBox.forth);
				markup("#topSecond .topBarOption[data=5] span", puzzle5by5[tempHolder].topBarText.firstBox.fifth);
				markup("#topThird .topBarOption[data=1] span", puzzle5by5[tempHolder].topBarText.secondBox.first);
				markup("#topThird .topBarOption[data=2] span", puzzle5by5[tempHolder].topBarText.secondBox.second);
				markup("#topThird .topBarOption[data=3] span", puzzle5by5[tempHolder].topBarText.secondBox.third);
				markup("#topThird .topBarOption[data=4] span", puzzle5by5[tempHolder].topBarText.secondBox.forth);
				markup("#topThird .topBarOption[data=5] span", puzzle5by5[tempHolder].topBarText.secondBox.fifth);
				markup("#topLast .topBarOption[data=1] span", puzzle5by5[tempHolder].topBarText.thirdBox.first);
				markup("#topLast .topBarOption[data=2] span", puzzle5by5[tempHolder].topBarText.thirdBox.second);
				markup("#topLast .topBarOption[data=3] span", puzzle5by5[tempHolder].topBarText.thirdBox.third);
				markup("#topLast .topBarOption[data=4] span", puzzle5by5[tempHolder].topBarText.thirdBox.forth);
				markup("#topLast .topBarOption[data=5] span", puzzle5by5[tempHolder].topBarText.thirdBox.fifth);

			//.leftBarOption markup
				markup("#topMiddleFirst .leftBar span", puzzle5by5[tempHolder].leftBarText.firstBoxHeader);
				markup("#bottomMiddleFirst .leftBar span", puzzle5by5[tempHolder].topBarText.secondBoxHeader);
				markup("#bottomFirst .leftBar span", puzzle5by5[tempHolder].topBarText.thirdBoxHeader);
				markup("#topMiddleFirst .leftBarOption[data=1] span", puzzle5by5[tempHolder].leftBarText.firstBox.first);
				markup("#topMiddleFirst .leftBarOption[data=2] span", puzzle5by5[tempHolder].leftBarText.firstBox.second);
				markup("#topMiddleFirst .leftBarOption[data=3] span", puzzle5by5[tempHolder].leftBarText.firstBox.third);
				markup("#topMiddleFirst .leftBarOption[data=4] span", puzzle5by5[tempHolder].leftBarText.firstBox.forth);
				markup("#topMiddleFirst .leftBarOption[data=5] span", puzzle5by5[tempHolder].leftBarText.firstBox.fifth);
				markup("#bottomMiddleFirst .leftBarOption[data=1] span", puzzle5by5[tempHolder].topBarText.thirdBox.first);
				markup("#bottomMiddleFirst .leftBarOption[data=2] span", puzzle5by5[tempHolder].topBarText.thirdBox.second);
				markup("#bottomMiddleFirst .leftBarOption[data=3] span", puzzle5by5[tempHolder].topBarText.thirdBox.third);
				markup("#bottomMiddleFirst .leftBarOption[data=4] span", puzzle5by5[tempHolder].topBarText.thirdBox.forth);
				markup("#bottomMiddleFirst .leftBarOption[data=5] span", puzzle5by5[tempHolder].topBarText.thirdBox.fifth);
				markup("#bottomFirst .leftBarOption[data=1] span", puzzle5by5[tempHolder].topBarText.secondBox.first);
				markup("#bottomFirst .leftBarOption[data=2] span", puzzle5by5[tempHolder].topBarText.secondBox.second);
				markup("#bottomFirst .leftBarOption[data=3] span", puzzle5by5[tempHolder].topBarText.secondBox.third);
				markup("#bottomFirst .leftBarOption[data=4] span", puzzle5by5[tempHolder].topBarText.secondBox.forth);
				markup("#bottomFirst .leftBarOption[data=5] span", puzzle5by5[tempHolder].topBarText.secondBox.fifth);

			//#pageLiner markup
			markup("#pageLiner span", puzzle5by5[tempHolder].story);

			//#pageLiner markup
			markup("#title", puzzle5by5[tempHolder].title);

			//color theme functions
				//background-color theme function
				var backgroundColorTheme = function ( selector, target) {
					$(selector).css("background-color", target );
				};
				//border color theme function
				var borderColorTheme = function ( selector, target) {
					$(selector).css("border-color", target );
				};
				//text color theme function
				var textColorTheme = function ( selector, target) {
					$(selector).css("color", target );
				};

			//set color themes
				backgroundColorTheme("#gameBoardInside, #gameBoardInside, .gridbox, #puzzleGameBoardInside, #topFirst, #bottomMiddleLast, #bottomThird, #bottomLast, div#next, div#previous, div#currentClue", puzzle5by5[tempHolder].colors.light);
				backgroundColorTheme("#story, #puzzleStory, div#clue", puzzle5by5[tempHolder].colors.medium);
				backgroundColorTheme("#start, .leftBar, .leftBarOption, .topBar, .topBarOption, #backButton, #resetButton", puzzle5by5[tempHolder].colors.dark);
				borderColorTheme(".guessBox, .leftBar, .leftBarOption, .topBar, .topBarOption", puzzle5by5[tempHolder].colors.light);
				borderColorTheme("#story, #puzzleStory, #start, div#clue, div#next, div#previous, div#currentClue", puzzle5by5[tempHolder].colors.dark);
				textColorTheme("#start, #backButton, #resetButton, .leftBarOption span, .topBarOption span, .leftBar span, .topBar span", puzzle5by5[tempHolder].colors.light);
//clue box switch
				var clueMarkup = function (selector, target) {
				  $(selector).html("");
				  $(selector).append(target);
				};

				var j = 0;
				var clueLength = puzzle5by5[tempHolder].clues[0].length;
				clueMarkup("#currentClue span", puzzle5by5[tempHolder].clues[0][j]);
				$("#next").click( function () {
				  j++;
				  console.log(j);
				  if ( j === clueLength ) {
				    j = 0;
				  }
				  clueMarkup("#currentClue span", puzzle5by5[tempHolder].clues[0][j]);
				});
				$("#previous").click( function () {
				  j--;
				  if ( j === -1 ) {
				    j = clueLength - 1;
				  }
				  clueMarkup("#currentClue span", puzzle5by5[tempHolder].clues[0][j]);
				});
		});
	};
	puzzleInheritance();

});