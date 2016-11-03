"use strict";

$(document).ready( function () {
  var i;

  //populate the .guessHomeBox with a 5 by 5 grid of .guessBox's
	  var populationGuessHome = function () {
	    var markup = "<div class='guessBox floatLeft'></div";
	    for ( i = 0; i < 24; i++) {
	      markup += "><div class='guessBox floatLeft'></div";
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
		var medium = $("#start").css("background-color");
		var dark = $("#story").css("background-color");

		if (backgroundColor == "rgb(255, 255, 255)" || backgroundColor == "rgb(187, 187, 187)"){
		  $(this).css("background-color", medium);
		}
		else if (backgroundColor == medium){
			$(this).css("background-color", dark);
		}
		else if ( $(this).parent().attr("id") == "topMiddleThird" || $(this).parent().attr("id") == "bottomMiddleSecond" ){
			$(this).css("background-color", "rgb(187, 187, 187)");
		}
		else {
			$(this).css("background-color", "rgb(255, 255, 255)");
		}
	});

  	//start the puzzle (on start click)
	$("div#start").click( function () {
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
		$("#puzzleContainer").fadeOut().delay(800).css("zoom", "236%");
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

	//reset the puzzle
	$("#resetButton").click( function () {
		$(".guessBox").css("background-color", "white");
		$("#topMiddleThird .guessBox, #bottomMiddleSecond .guessBox").css("background-color", "#BBB");
	});
});