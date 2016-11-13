"use strict";

$(document).ready( function () {
	var i;
//change colors
	var c = 0;
	var o = 1;
	var l = 2;
	var oo = 3;
	var r = 4;
	var ex = 5;

	var colors = ["#FD7C7F", "#E6789F", "#FF9D79", "#4DC57E", "#5C64F9", "#A35DA3"];

	var color = function () {
		$(".c").css("color", colors[c]);
		c--
		if ( c === -1 ) { c = 5; }
	};

	var color2 = function () {
		$("#o").css("color", colors[o]);
		o--
		if ( o === -1 ) { o = 5; }
	};

	var color3 = function () {
		$(".l").css("color", colors[l]);
		l--
		if ( l === -1 ) { l = 5; }
	};

	var color4 = function () {
		$(".o").css("color", colors[oo]);
		oo--
		if ( oo === -1 ) { oo = 5; }
	};

	var color5 = function () {
		$(".r").css("color", colors[r]);
		r--
		if ( r === -1 ) { r = 5; }
	};

	var color6 = function () {
		$(".ex").css("color", colors[ex]);
		ex--
		if ( ex === -1 ) { ex = 5; }
	};

	window.setInterval(function(){
	color();
	color2();
	color3();
	color4();
	color5();
	color6();
	}, 1000);
//populate the .guessHomeBox with a 5 by 5 grid of .guessBox's
	var populationGuessHome = function () {
	    var markup = "<div class='guessBox floatLeft' correct='false'></div";
	    for ( i = 0; i < 24; i++) {
	    	markup += "><div class='guessBox floatLeft' correct='false'></div";
	    }
	    markup += ">";
	    $(".guessHomeBox").html(markup);
	};
	populationGuessHome();
//populate the .leftBarHome with a 5 by 5 grid of .guessBox's
	var populationLeftBarHome = function () {
	    var markup = "<div class='leftBar'><span></span></div>";
	    for ( i = 1; i < 6; i++) {
	    	markup += "<div class='leftBarOption' data='"+i+"'><span></span></div>";
	    }
	    $(".leftBarHome").html(markup);
	};
	populationLeftBarHome();
//populate the .topBarHome with a 5 by 5 grid of .guessBox's
	var populationLeftBarHome = function () {
		var markup = "<div class='topBar floatLeft'><span></span></div>";
		for ( i = 1; i < 6; i++) {
			markup += "<div class='topBarOption floatLeft' data='"+i+"'><span></span></div>";
		}
		$(".topBarHome").html(markup);
	};
	populationLeftBarHome();
//toggle correct answer indicator
    $(".guessBox").click(function () {
		var backgroundColor = $(this).css("background-color");
		var dark = $("#start").css("background-color");
		var medium = $("#story").css("background-color");

		if (backgroundColor == "rgb(255, 255, 255)" || backgroundColor == "rgb(187, 187, 187)"){
			$(this).css("background-color", dark).attr("correct", false);
		}
		else if (backgroundColor == dark){
			$(this).css("background-color", medium).attr("correct", true);;
		}
		else if ( $(this).parent().attr("id") == "topMiddleThird" || $(this).parent().attr("id") == "bottomMiddleSecond" ){
			$(this).css("background-color", "rgb(187, 187, 187)").attr("correct", false);
		}
		else {
			$(this).css("background-color", "rgb(255, 255, 255)").attr("correct", false);
		}
	});
//reset the puzzle
	$("#resetButton").click( function () {
		$(".guessBox").css("background-color", "white");
		$("#topMiddleThird .guessBox, #bottomMiddleSecond .guessBox").css("background-color", "#BBB");
	});


/////////////////////////////////////////////////////////////
///////////////////////navigation////////////////////////////
/////////////////////////////////////////////////////////////
//start the puzzle (on start click)
	$("div#start").click( function () {
		//$("#win").fadeOut("fast");
		$("div#story").animate({
			top: "-=900px"
		}, {duration: 1000,  start: function () {
			$("body").css("overflow-y", "hidden");
			$("#puzzleStory.puzzle").css("display", "block");
			$("#puzzleStory.puzzle").animate({
				top: "-850px"
			}, 1000);
		}});
	});  	
//go back to gallery
  	$("#story #backButton").click( function () {
  		$("body").css("overflow-y", "").css("background-color", "#CCC");
  		//$("#puzzleStory").css("display", "none");
  		$(".puzzleOption").css("display", "block");
  		//$(".puzzleOption").attr("id","");
		$("#puzzleContainer").fadeOut();
		$("#puzzleGallery").css("zoom", "100%").delay(800).fadeIn();
		$("#storyPage").css("background-image", "none");
		$(".guessBox").css("background-color", "white");
		$("#topMiddleThird .guessBox, #bottomMiddleSecond .guessBox").css("background-color", "#BBB");
		$("#puzzleStory.puzzle").css("display", "none");
	});	
//go to the previous screen
  	$("#puzzleStory #backButton").click( function () {
		$("#puzzleStory.puzzle").animate({
			top: "850px"
		}, {duration: 1000,  start: function () {
			$("body").css("overflow-y", "hidden");
			$("#puzzleStory.puzzle").css("display", "block");
			$("div#story").animate({
				top: "+=900px"
			}, 1000);
		}});
	});

});