"use strict";

$(document).ready( function () {
	var i, length;

	//contains all colors and text for each puzzle
	var puzzle5by5 = [

		{
		    id: 1,
		    title: "COOK FOR LOVE",
		    story: "There are five couples competing on a cooking show called Cooking Couples. Each couple earned a cash prize to go towards their dream wedding. In order to win a prize they each had  to cook a signature couple&#39;s dish. Each couple will receive their check in the mail&#59; But unfortunately the executive producer, Shayla, mixed up the contestants information. Using the following clues can you help Shayla figure out which couple cooked which dish, won which cash prize, and where to send their check, Before she is fired. No pressure&#33;",
		    colors: 	{
		    				light: "#FD7C7F",
		    				medium: "#E54D51",
		    				dark: "#830003"
		    			},
		    storyPaper: "storyPaperRed.png",
		    galleryPaper: "galleryPaperRed.png",
		    topBarText: {
		    				firstBoxHeader: "Couples",
		    				firstBox: {
		    					first: "Ayanna & Jamal",
		    					second: "Emma & Matthew",
		    					third: "Grace & Richie",
		    					forth: "Lauren & Connor",
		    					fifth: "Rylee & Noah"
		    				},
		    				secondBoxHeader: "State",
		    				secondBox: {
		    					first: "California",
		    					second: "Idaho",
		    					third: "Nevada",
		    					forth: "New York",
		    					fifth: "Pennsylvania"
		    				},
		    				thirdBoxHeader: "Signature Dish",
		    				thirdBox: {
		    					first: "Chicken Pot Pie",
		    					second: "Lobster",
		    					third: "Ramen Noodle",
		    					forth: "Steak and Potato",
		    					fifth: "Vegetarian"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "Prizes",
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
		                "1. The five couples are&#58; the couples from Idaho and Nevada, Lauren and Connor, the couple who cooked the lobster dish (which wasn&#39;t Grace and Richie), and the couple who won 10 dollars. ",
		                "2. Grace and Richie(who won the least amount of money) were really upset they didn&#39;t think to cook the Steak and Potato dish (which won less money than the Lobster dish).",
		                "3. The couple from Idaho used Idaho's potatoes in their dish.",
		                "4. Lauren and Connor (who lives on the west coast) stopped eating meat 10 years ago.",
		                "5. Rylee and Noah&#39;s chicken pot pie dish won a bigger prize than the dish from New York.",
		                "6. The couple who won the 100,000 dollars prize wants to move out of Pennsylvania to Paris, but are too afraid to fly on planes.",
		                "7. The couple who made their vegetarian signature dish should have used more sauce. Maybe they would have done better than only achieving second place.",
		                "8. The five couples are&#58; Ayanna and Jamal, the couple that made steak and potatoes, the New Yorkers, and the couple who won 1,000 and 10,000."
		              ]
		            ],
		    correctAnswer: [
		    					// #topMiddleSecond puzzle box
								[2, 9, 11, 18, 20],
								// #topMiddleThird puzzle box
								[3, 7, 11, 15, 24],
								// #topMiddleForth puzzle box
								[2, 5, 13, 19, 21],
								// #bottomMiddleSecond puzzle box
								[4, 5, 12, 16, 23],
								// #bottomMiddleThird puzzle box
								[2, 9, 13, 16, 20],
								// #bottomMiddleLast puzzle box
								[3, 6, 14, 17, 20]

		    				]
		},

		{
		    id: 2,
		    title: "GOODBYE OLD FRIEND",
		    story: "The hardest part about moving to a new city is leaving behind all of your friends in the old city. This is exactly what Taneesha is going through. Next week she will be moving to Natural Springs with her family. So this week five of Taneesha&#39;s friends (her best friends) picked a day and planned a date with Taneesha. Taneesha is having a hard time keeping up with all of the different places, different people, different times, and different activities. So she decided to write it all down in her Iphone. I hope she doesn&#39;t lose her Iphone because all of her  friends will feel forgotten and begin to hate her.",
		    colors: 	{
		    				light: "#E6789F",
		    				medium: "#C12B60",
		    				dark: "#7E012D"
		    			},
		    storyPaper: "storyPaperPink.png",
		    galleryPaper: "galleryPaperPink.png",
		    topBarText: {
		    				firstBoxHeader: "Friends",
		    				firstBox: {
		    					first: "Jessica",
		    					second: "Jesse",
		    					third: "Kevin",
		    					forth: "Sara",
		    					fifth: "Tera"
		    				},
		    				secondBoxHeader: "Places",
		    				secondBox: {
		    					first: "Granny&#39s House",
		    					second: "Jon&#39s Restaurant",
		    					third: "Mario&#39s Diner",
		    					forth: "Kato&#39s Parks",
		    					fifth: "Sycamore Train"
		    				},
		    				thirdBoxHeader: "Activities",
		    				thirdBox: {
		    					first: "Eat Dinner",
		    					second: "Pizza tutorial",
		    					third: "Plays Cards",
		    					forth: "Play golf",
		    					fifth: "People watch"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "Times",
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
		                "1. Between the friend who wants to meet at 3:00PM and 7:00PM. One is Kevin and the other one wants to play cards.",
		                "2. Jessica has curfew at 10:00PM and she never breaks the rules. Not even for best friend.",
		                "3. The five friends are&#58; Kevin, Jessica, the friend who wants to meet at a train station, the friend who will meet Taneesha at 3:00PM, and the friend who is taking Tanessha out for dinner.",
		                "4. People watching is something Tera and Taneesha has done since they were five years old.",
		                "5. Jesse (who wants to eat at Johnny&#39;s) does not want to eat at 7:00PM.",
		                "6. Taneesha&#39;s five friends are&#58; Sara, the friend who wants to meet at Mario&#39;s diner and Kato&#39;s park, the friend who wants to meet at 8:00PM and the friends who wants to meet at the train station.",
		                "7. Marios diner is not a diner at all it&#39;s a place to offer cooking classes.",
		                "8. The friend who wants to play golf (who is not Kevin) obviously wants to meet at Kato&#39;s Park. You can&#39;t play golf at a train station."
		              ]
		          ],
		    correctAnswer: [
		    					// #topMiddleSecond puzzle box
								[3, 5, 12, 16, 24],
								// #topMiddleThird puzzle box
								[0, 8, 12, 16, 24],
								// #topMiddleForth puzzle box
								[2, 8, 11, 15, 24],
								// #bottomMiddleSecond puzzle box
								[1, 7, 13, 15, 24],
								// #bottomMiddleThird puzzle box
								[1, 7, 10, 18, 24],
								// #bottomMiddleLast puzzle box
								[3, 6, 12, 15, 24]

		    				]
		},

		{
		    id: 3,
		    title: "TELEVISION SHOWDOWN",
		    story: "Tiffany Applebottom is a professional slacker. She spent her entire life watching tv and sitting on the couch. Her life was based on watching romantic comedies, survivals shows, and any other show that the Disarm Network creates. So imagine her surprise when she turned on her television and realized none of her shows came on at the right time. Tiffany wants to write a strongly worded letter to the Disarm Network complaining about the network&#39;s sudden changes. In order for her to write the letter she must know the name of the show, what time it used to come on, the shows new time, and what genre the show is. Please help TIffany figure this out quickly before she does something crazy, like get a job.", //&#39; is the symbol an apostrophe
		    colors: 	{
		    				light: "#FF9D79",
		    				medium: "#F05C25",
		    				dark: "#9D2A00"
		    			},
		    storyPaper: "storyPaperOrange.png",
		    galleryPaper: "galleryPaperOrange.png",
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
		                "1. Between the show that used to come on at 8:00PM and the romantic comedy one is Dig It Up and the other show has been changed to 7:00PM.",
		                "2. When Tiffany first heard about the show Face the Music, she thought it was a reality tv show. But it turned out the be a tv drama.",
		                "3. The five tv shows are&#58; the gardening show, Better If Used, the shows that used to come on at 7:00PM and 10:00pm, and the show that new time is 9:00PM.",
		                "4. The only change that Tiffany likes is That Passion and Peril (her favorite soap opera) no longer comes on last, it is now the first show of the evening.",
		                "5. Dig It Up (the gardening show) used to come on after Fly on the Wall, but now it comes on after face the music.",
		                "6. Fly on the Wall new time is now squeezed between the show that comes on at 9:00PM and the romantic comedy.",
		                "7. Keep in mind no show comes on the same time it used to."
		                // "8. Between the show that used to come on at 7:00PM and the the show that has been changed to 10:00PM one is Dig It Up and the other is Fly on the Wall."
		              ]
		          ],
		    correctAnswer: [
		    					// #topMiddleSecond puzzle box
								[2, 8, 11, 15, 24],
								// #topMiddleThird puzzle box
								[3, 7, 14, 16, 20],
								// #topMiddleForth puzzle box
								[0, 7, 11, 18, 24],
								// #bottomMiddleSecond puzzle box
								[2, 6, 13, 15, 24],
								// #bottomMiddleThird puzzle box
								[3, 9, 12, 16, 20],
								// #bottomMiddleLast puzzle box
								[4, 5, 13, 17, 21]

		    				] 
		},

		{
		    id: 4,
		    title: "A Day to Celebrate",
		    story: "Catherine, Christopher, Carrie, Cory, and Chad are the children of Isaiah, king of the little people. Once a year King Isaiah has a little people festival. At the end of this year&#39;s festival King Isaiah&#39;s children are suppose to put on some sort of display of what they love about being a little person and what they hate about the big people. King Isaiah is responsible for scheduling his children performances, but as usual, King Isaiah waited until the last minute to give the responsibility to Heinz, his second advisor. Heinz now has two hours to learn the different types of performances, likes, and dislikes of the children. This can only go one of two ways for Heinz. He can seek the help of someone like you and have everything planned before the end of the festival, or the very spoiled children will begin to argue about who goes first and the arguing will give King Isaiah a headache, which will lead to Heinz losing his head.",
		    colors: 	{
		    				light: "#4DC57E",
		    				medium: "#008837",
		    				dark: "#004920"//"#006B2B"
		    			},
		    storyPaper: "storyPaperGreen.png",
		    galleryPaper: "galleryPaperGreen.png",
		    topBarText: {
		    				firstBoxHeader: "Children",
		    				firstBox: {
		    					first: "Carrie",
		    					second: "Catherine",
		    					third: "Chad",
		    					forth: "Christopher",
		    					fifth: "Cory"
		    				},
		    				secondBoxHeader: "Likes",
		    				secondBox: {
		    					first: "3 ft. tall",
		    					second: "Bug food",
		    					third: "Flying on bugs",
		    					forth: "No rent",
		    					fifth: "Traveling Far"
		    				},
		    				thirdBoxHeader: "Dislikes",
		    				thirdBox: {
		    					first: "5 ft. tall",
		    					second: "Complaining",
		    					third: "Everything",
		    					forth: "Loud Music",
		    					fifth: "Noisy cars"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "Performances",
		    				firstBox: {
		    					first: "Dance",
		    					second: "Movie",
		    					third: "Play",
		    					forth: "Song",
		    					fifth: "Speech"
		    				},
		    				//The next two objects comes from the topBarText secondBoxHeader, secondBox, thirdBoxHeader, and thirdBoxHeader info
		    			},
		    clues: [
		              [
		                "1. Between the one who sings and the one who hates everything one is christopher and the other is the one who loves traveling far (12 inches is far to a little person).",
		                "2. Catherine is afraid of heights, her feet never leaves the ground.",
		                "3. The five performances are&#58; the one who sings, the one who performed a play, the performer who likes to travel far, the performer who hates loud music, and Chad.",
		                "4. Christopher and Carrie are always arguing, because he thinks it&#39;s horrible that big people can grow to be 5ft. and taller, and Carrie thinks it&#39;s the complaining that is the worst. They always go to king Isaiah to settle their dispute but he passes that off to Heinz (Poor Heinz).",
		                "5. Between the one who put on a movie at the festival and the one who likes to travel far one is Chad (who likes to fly) and the other one is the child who hates everything big people do.",
		                "6. Carrie, who loves that she doesn&#39;t have to pay rent, does not know how to sing or dance. ",
		                "7. Catherine (who hates bug food) will not do anything that requires her to speak in public.",
		                "8. Isaiah&#39;s five children are&#58; the one who made a speech, the one who hates noisy cars, Carrie, the one who hates loud music, and the one who loves to eat bugs."
		              ]
		          ],
		    correctAnswer: [
		    					// #topMiddleSecond puzzle box
								[1, 9, 10, 18, 24],
								// #topMiddleThird puzzle box
								[0, 13, 16, 22, 24],
								// #topMiddleForth puzzle box
								[3, 11, 15, 22, 24],
								// #bottomMiddleSecond puzzle box
								[3, 5, 14, 16, 24],
								// #bottomMiddleThird puzzle box
								[1, 8, 14, 15, 22],
								// #bottomMiddleLast puzzle box
								[4, 8, 12, 15, 21]

		    				]
		},

		{
		    id: 5,
		    title: "Family Dinner",
		    story: "Taneesha and her family finally moved to Natural Springs and they do not know anyone in the neighborhood. So the neighborhood block captain thought it would be nice if some of the neighbors with children invited Taneesha and her family over for dinner. The block captain made a list of which family they should visit, on which day, and which time, and what the host will be serving. Then she past the list on to Taneesha. Taneesha has a fun and eventful week ahead of her. If you&#39;d like to join her for a week of free food follow the clues to figure out where Taneesha will be.",
		    colors: 	{
		    				light: "#5C64F9",
		    				medium: "#3C44EC",
		    				dark: "#050B66"//"#060E82" "#020AA1"
		    			},
		    storyPaper: "storyPaperBlue.png",
		    galleryPaper: "galleryPaperBlue.png",
		    topBarText: {
		    				firstBoxHeader: "Families",
		    				firstBox: {
		    					first: "Harrison Family",
		    					second: "Jenkins Family",
		    					third: "Jackson Family",
		    					forth: "Stewards Family",
		    					fifth: "Willson Family"
		    				},
		    				secondBoxHeader: "Days",
		    				secondBox: {
		    					first: "Monday",
		    					second: "Tuesday",
		    					third: "Wednesday",
		    					forth: "Thursday",
		    					fifth: "Friday"
		    				},
		    				thirdBoxHeader: "Dinner",
		    				thirdBox: {
		    					first: "Lasagna",
		    					second: "Meatloaf",
		    					third: "Pizza",
		    					forth: "Steak",
		    					fifth: "Tacos"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "Times",
		    				firstBox: {
		    					first: "5:30PM",
		    					second: "6:00PM",
		    					third: "6:30PM",
		    					forth: "7:00PM",
		    					fifth: "7:30PM"
		    				},
		    				//The next two objects comes from the topBarText secondBoxHeader, secondBox, thirdBoxHeader, and thirdBoxHeader info
		    			},
		    clues: [
		              [
		                "1. The Jackson family cannot cook. That&#39;s why they always order out, except on experimental Friday. Luckily for Taneesha and her family, the Jackson&#39;s hosted dinner on Thursday.",
		                "2. Between the family that made meatloaf and the one who hosted dinner on Tuesday. One the Stwert family and the other hosted dinner at 6:30PM.",
		                "3. The Harrison family had their dinner before 6:30PM. They had plans to go bowling but was afraid to tell the block captain no.",
		                "4. The lasagna dish was not cooked by the Stwert family, but was served at 6:00PM.",
		                "5. Tanneesha couldn&#39;t enjoy her pizza on Thursday because she was sick from her meal on Wednesday at the Willson&#39;s house.",
		                "6. Between the Harrison family and the family who served dinner at 6:30PM one made meatloaf and the other was hosting on Friday.",
		                "7. The five families are&#58; the Jenkins family, the family that made steak, and lasagna, the family that served dinner at 7:30PM, and the family that cooked dinner on Friday."
		              ]
		          ],
		    correctAnswer: [
		    					// #topMiddleSecond puzzle box
								[0, 9, 11, 18, 22],
								// #topMiddleThird puzzle box
								[4, 7, 10, 16, 23],
								// #topMiddleForth puzzle box
								[4, 5, 11, 18, 22],
								// #bottomMiddleSecond puzzle box
								[4, 6, 12, 18, 20],
								// #bottomMiddleThird puzzle box
								[2, 5, 13, 16, 24],
								// #bottomMiddleLast puzzle box
								[1, 8, 14, 17, 20]

		    				]
		},

		{
		    id: 6,
		    title: "OPPORTUNITYS KNOCKING",
		    story: "Alex, a senior at Magnavox High, scored a 2300 on his S.A.T. and a 32 on his A.C.T. So it really shouldn&#39;t come as a surprise to hear that five college representatives came to Magnavox to meet Alex (one for everyday of the week). When the reps met Alex they each offered him a different scholarship toward tuition, and a secret bribe. Now Alex has a big decision to make, one that will alter his life forever. Alex has composed a list of who he met, which college they represent, how much the scholarship was worth, and what the secret bribe was. Alex gave his list to the guidance counselor (Jim) to seek advice. But unfortunately  Jim the counselor cannot read Alex&#39;s chicken scratch. Can you help him decipher the list before Alex misses out on a chance of a lifetime?",
		    colors: 	{
		    				light: "#A35DA3",
		    				medium: "#741F74",
		    				dark: "#410041"
		    			},
		    storyPaper: "storyPaperPurple.png",
		    galleryPaper: "galleryPaperPurple.png",
		    topBarText: {
		    				firstBoxHeader: "Colleges",
		    				firstBox: {
		    					first: "Brown U",
		    					second: "M.I.T.",
		    					third: "Stanford U",
		    					forth: "Princeton U",
		    					fifth: "Yale U"
		    				},
		    				secondBoxHeader: "Scholarships",
		    				secondBox: {
		    					first: "&#36;20,000",
		    					second: "&#36;35,000",
		    					third: "&#36;40,000",
		    					forth: "&#36;45,000",
		    					fifth: "Full ride"
		    				},
		    				thirdBoxHeader: "Secret Bribes",
		    				thirdBox: {
		    					first: "Campus job",
		    					second: "Free books",
		    					third: "Free laptops",
		    					forth: "Free housing",
		    					fifth: "Mini fridge"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "Representatives",
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
		                "",
		                "",
		                "",
		                "",
		                "",
		                "",
		                "",
		                ""
		              ]
		          ],
		    correctAnswer: [
		    					// #topMiddleSecond puzzle box
								[4, 7, 10, 18, 21],
								// #topMiddleThird puzzle box
								[3, 5, 11, 19, 22],
								// #topMiddleForth puzzle box
								[4, 5, 12, 18, 21],
								// #bottomMiddleSecond puzzle box
								[2, 6, 10, 18, 24],
								// #bottomMiddleThird puzzle box
								[0, 7, 11, 19, 23],
								// #bottomMiddleLast puzzle box
								[2, 5, 11, 19, 23]

		    				]
		},

		{
		    id: 7,
		    title: "OBSESSED MUCH",
		    story: "Kelly is obsessed with the children&#39;s show Pokemon. For the past five years she sent a letter to the creators of the show asking them to use one of her specially made cartoons on the show. Each year she created a different type of pokemon, gave them a specific special attack, and most importantly a very special name. This year she is more determined to have her character on the show. In order to do this Kelly must review all of her past failures. This could be the year Kelly finally succeeds or she could could have a total nervous breakdown. Will you help Kelly review her previous failed attempts before she has to pay thousands of dollars to a therapist.",
		    colors: 	{
		    				light: "#FD7C7F",
		    				medium: "#E54D51",
		    				dark: "#830003"
		    			},
		    storyPaper: "storyPaperRed.png",
		    galleryPaper: "galleryPaperRed.png",
		    topBarText: {
		    				firstBoxHeader: "Pokemon",
		    				firstBox: {
		    					first: "Bunnair",
		    					second: "Gooserine",
		    					third: "Hippomean",
		    					forth: "Moodle",
		    					fifth: "Peregrine"
		    				},
		    				secondBoxHeader: "Types",
		    				secondBox: {
		    					first: "Grass type",
		    					second: "Fight type",
		    					third: "Fire type",
		    					forth: "Flying type",
		    					fifth: "Water type"
		    				},
		    				thirdBoxHeader: "Moves",
		    				thirdBox: {
		    					first: "Avante kick",
		    					second: "Blastro Pump",
		    					third: "Flaming foette",
		    					forth: "Flapping wind",
		    					fifth: "Forest frenzy"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "Years",
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
		                "1. The five pokemon are&#58; the one she named Gooserina (which was created in 2014) and Moodle, the grass type, the one with blasto pump as a special attack, and the one she created in 2015.",
		                "2. The pokemon she named Hippomean (who uses a pump to blast his opponents) was created in a odd number year.",
		                "3. Between Gooserina and the one who special attack is forest frenzy, one is the grass type and the other was created in 2014.",
		                "4. Peregrine, the flying pokemon, special attack is not the forest frenzy.",
		                "5. 2013 was the year she came the closest to getting her pokemon on the show. The creators thought the flaming fouette was very clever.",
		                "6. Between the one with the special attack called avant kick and the fire type one was created in 2014 and the other is called Moodle.",
		                "7. The pokemon created in 2015 is a flying pokemon because she got on a plane for the first time that year.",
		                "8. The five pokemon are&#58; the ones created in 2012 and 2013, the one with the special attack flapping wind, the fighting type, and the one called Hippomean (the water type)."
		              ]
		          ],
		    correctAnswer: [
		    					// #topMiddleSecond puzzle box
								[2, 5, 13, 16, 24],
								// #topMiddleThird puzzle box
								[4, 5, 12, 16, 23],
								// #topMiddleForth puzzle box
								[1, 9, 12, 15, 23],
								// #bottomMiddleSecond puzzle box
								[1, 7, 13, 19, 20],
								// #bottomMiddleThird puzzle box
								[1, 9, 12, 18, 20],
								// #bottomMiddleLast puzzle box
								[0, 6, 13, 19, 22]

		    				]
		},

		{
		    id: 8,
		    title: "A WHOLE NEW WORLD",
		    story: "Once again Taneesha needs our help. Taneesha is a 9th grade transfer student at Magnavox High. She met the principal who gave her a schedule and a map to all her classes. Even with the map Taneesha went to the wrong classes and the classes she did manage to make it to she arrived late. At the end of the day Taneesha went back to the principal&#39;s office to seek help from the principal. When she arrived at the office she saw Jace, a kid from her neighborhood. Jace offered to show her around the next day. The next day came and Jace was nowhere to be found. This looks like the start of another really bad, terrible, god awful day for Taneesha. Will you help her navigate through the halls of Magnavox High before she is expelled for cutting classes and ends up homeless living in a cardboard box?",
		    colors: 	{
		    				light: "#E6789F",
		    				medium: "#C12B60",
		    				dark: "#7E012D"
		    			},
		    storyPaper: "storyPaperPink.png",
		    galleryPaper: "galleryPaperPink.png",
		    topBarText: {
		    				firstBoxHeader: "Classes",
		    				firstBox: {
		    					first: "Algebra",
		    					second: "English",
		    					third: "Physical Science",
		    					forth: "Spanish",
		    					fifth: "World History"
		    				},
		    				secondBoxHeader: "Class Rooms",
		    				secondBox: {
		    					first: "101",
		    					second: "107",
		    					third: "204",
		    					forth: "209",
		    					fifth: "211"
		    				},
		    				thirdBoxHeader: "Teachers",
		    				thirdBox: {
		    					first: "Mr. Birch",
		    					second: "Mr. Elm",
		    					third: "Ms. Juniper",
		    					forth: "Mrs. Oak",
		    					fifth: "Ms. Rowan"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "Times",
		    				firstBox: {
		    					first: "7:45AM",
		    					second: "8:30AM",
		    					third: "9:15AM",
		    					forth: "10:45AM",
		    					fifth: "1:00PM"
		    				},
		    				//The next two objects comes from the topBarText secondBoxHeader, secondBox, thirdBoxHeader, and thirdBoxHeader info
		    			},
		    clues: [
		              [
		                "",
		                "",
		                "",
		                "",
		                "",
		                "",
		                "",
		                ""
		              ]
		          ],
		    correctAnswer: [
		    					// #topMiddleSecond puzzle box
								[0, 9, 12, 18, 21],
								// #topMiddleThird puzzle box
								[2, 6, 10, 18, 24],
								// #topMiddleForth puzzle box
								[3, 6, 10, 19, 22],
								// #bottomMiddleSecond puzzle box
								[2, 9, 11, 15, 23],
								// #bottomMiddleThird puzzle box
								[0, 6, 14, 17, 23],
								// #bottomMiddleLast puzzle box
								[2, 9, 10, 18, 21]

		    				]
		},

		{
		    id: 9,
		    title: "TECHNICAL MALFUNCTIONS",
		    story: "Dr. Park is the chief of surgery at Atomas Hospital. He is responsible for scheduling the surgeries at the hospital. He writes all the surgeries at 6:00am on the viewing board. After working ten hours on the schedule, Dr. Park&#39;s computers begans to malfunctions. He no longer has access to his perfect plans. So he randomly writes names, times, and types of surgeries on the board and hopes for the best. Two hours later his computer is up and running. He realizes that the only thing he guessed correct was the patients&#39; to the surgeons. If you would like to see what Dr. Park should have written on the board, follow the clues and figure it out yourself. ",
		    colors: 	{
		    				light: "#FF9D79",
		    				medium: "#F05C25",
		    				dark: "#9D2A00"
		    			},
		    storyPaper: "storyPaperOrange.png",
		    galleryPaper: "galleryPaperOrange.png",
		    topBarText: {
		    				firstBoxHeader: "Surgeons",
		    				firstBox: {
		    					first: "Dr. Artificial",
		    					second: "Dr. Grey",
		    					third: "Dr. Petersburg",
		    					forth: "Dr. Raspberry",
		    					fifth: "Dr. Sommers"
		    				},
		    				secondBoxHeader: "Times",
		    				secondBox: {
		    					first: "7:00AM",
		    					second: "8:00AM",
		    					third: "9:00AM",
		    					forth: "10:00AM",
		    					fifth: "11:00AM"
		    				},
		    				thirdBoxHeader: "Surgeries",
		    				thirdBox: {
		    					first: "Gynecological",
		    					second: "Hernia",
		    					third: "Neurosurgery",
		    					forth: "Orthopedic",
		    					fifth: "Pediatric"
		    				},
		    			},
			leftBarText: {
		    				firstBoxHeader: "Patients",
		    				firstBox: {
		    					first: "Ella",
		    					second: "Jace",
		    					third: "Jordan",
		    					forth: "Kelly",
		    					fifth: "Luke"
		    				},
		    				//The next two objects comes from the topBarText secondBoxHeader, secondBox, thirdBoxHeader, and thirdBoxHeader info
		    			},
		    clues: [
	                [""],
	                [""],
	                [""],
	                [""],
	                [""],
	                [""],
	                [""],
	                [""]
		          ],
		    correctAnswer: [
		    					// #topMiddleSecond puzzle box
								[1, 8, 12, 15, 24],
								// #topMiddleThird puzzle box
								[1, 8, 10, 17, 24],
								// #topMiddleForth puzzle box
								[4, 8, 11, 15, 22],
								// #bottomMiddleSecond puzzle box
								[0, 7, 14, 18, 21],
								// #bottomMiddleThird puzzle box
								[2, 5, 14, 18, 21],
								// #bottomMiddleLast puzzle box
								[2, 6, 10, 18, 24]

		    				]
		},
	];

//populate the gallery page
  var populationGallery = function () {
  	//markup
  	length = puzzle5by5.length;
  	var markup = "<div id='menu'>Main Menu</div>";
  	markup += "<div class=puzzleOption data=0><span>"+puzzle5by5[0].title+"</span></div>"
  	for ( i = 1; i < length; i++) {
  		markup += "<div class=puzzleOption data="+i+"><span>"+puzzle5by5[i].title+"</span></div>"
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
		$("#pageLiner span").hide();
		$("#puzzleGallery").animate({
			zoom: "41%"
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
					$("#pageLiner span").show();
					}
				});
		}});
	});
	
//markup creator function
var markup = function (selector, target){
	$(selector).html(target);
};

//play app
  $("#play").click( function () {
  	$("#homepage").fadeOut("slow");
  	$("#puzzleGallery").fadeIn(1800);
  });

//back to main menu
  $("#menu").click( function () {
  	$("#puzzleGallery").fadeOut("slow");
  	$("#homepage").delay(800).fadeIn(1800);
  });

//non working pages
	$("#store").click( function () {
		$("#homepage").fadeOut("slow");
	  	$("#storePage").fadeIn(1800);
	});
	$("#directions").click( function () {
		$("#homepage").fadeOut("slow");
	  	$("#howToPage").fadeIn(1800);
	});
	$("#achievements").click( function () {
		$("#homepage").fadeOut("slow");
	  	$("#achievementsPage").fadeIn(1800);
	});
	$("#tutorial").click( function () {
		$("#homepage").fadeOut("slow");
	  	$("#tutorialPage").fadeIn(1800);
	});
	$("#settings").click( function () {
		$("#homepage").fadeOut("slow");
	  	$("#settingsPage").fadeIn(1800);
	});
	$(".menuCS").click( function () {
	  	$(this).parent().fadeOut("slow");
	  	$("#homepage").delay(800).fadeIn(1800);
	});

//////////////population of puzzle customizations///////////////////
//set puzzle to the selected gallery puzzle
	var puzzleInheritance = function (){
	$(".puzzleOption").click( function () {
		var tempHolder, length, j;
		var location = $(this).attr("data");
		tempHolder = location;
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
	markup("#bottomMiddleFirst .leftBar span", puzzle5by5[tempHolder].topBarText.thirdBoxHeader);
	markup("#bottomFirst .leftBar span", puzzle5by5[tempHolder].topBarText.secondBoxHeader);
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
	backgroundColorTheme("#start, .leftBar, .leftBarOption, .topBar, .topBarOption, #backButton, #resetButton, #submit", puzzle5by5[tempHolder].colors.dark);
	borderColorTheme(".guessBox, .leftBar, .leftBarOption, .topBar, .topBarOption", puzzle5by5[tempHolder].colors.light);
	borderColorTheme("#story, #puzzleStory, #start, div#clue, div#next, div#previous, div#currentClue", puzzle5by5[tempHolder].colors.dark);
	textColorTheme("#start, #backButton, #resetButton, #submit, .leftBarOption span, .topBarOption span, .leftBar span, .topBar span", puzzle5by5[tempHolder].colors.light);
//clue box switch
				var clueMarkup = function (selector, target) {
				  $(selector).html("");
				  $(selector).append(target);
				};

				var j = 0;
				var clueLength = puzzle5by5[tempHolder].clues[0].length;
				clueMarkup("#currentClue span", puzzle5by5[tempHolder].clues[0][j]);
				$("#next").click( function () {
					$("#currentClue").scrollTop(0);
					j++;
					if ( j === clueLength ) {
					  j = 0;
					}
					clueMarkup("#currentClue span", puzzle5by5[tempHolder].clues[0][j]);
				});
				$("#previous").click( function () {
					$("#currentClue").scrollTop(0);
					j--;
					if ( j === -1 ) {
					 	j = clueLength - 1;
					}
					clueMarkup("#currentClue span", puzzle5by5[tempHolder].clues[0][j]);
				});
		});
	};
	puzzleInheritance();
//submit button
	$(".puzzleOption").click( function () {
			var tempHolder;
			var location = $(this).attr("data");
			tempHolder = location;
		$("#submit").click( function () {
			var j;
			var correctAnswers = 0;
			//shortct
			$(".guessBox[correct='true']").each( function () {
				var position = $(this).index();
				console.log(position);
			}); //end short cut
			//check each box for right answers
			for ( j = 0; j < 5; j++) {
				$("#topMiddleSecond .guessBox").each( function () {
					//get position of each .guessBox and match it to puzzle5by5.correctAnswer
					var position = $(this).index();
					var correctAnswer = puzzle5by5[tempHolder].correctAnswer[0][j];
					//used to check to see if correct is set to true
					var correct = $(this).attr("correct");
					if ( correct === "true" & position === correctAnswer) {
						console.log("correct!");
						correctAnswers ++;
					}
				});
				$("#topMiddleThird .guessBox").each( function () {
					//get position of each .guessBox and match it to puzzle5by5.correctAnswer
					var position = $(this).index();
					var correctAnswer = puzzle5by5[tempHolder].correctAnswer[1][j];
					//used to check to see if correct is set to true
					var correct = $(this).attr("correct");
					if ( correct === "true" & position === correctAnswer) {
						console.log("correct!");
						correctAnswers ++;
					}
				});
				$("#topMiddleLast .guessBox").each( function () {
					//get position of each .guessBox and match it to puzzle5by5.correctAnswer
					var position = $(this).index();
					var correctAnswer = puzzle5by5[tempHolder].correctAnswer[2][j];
					//used to check to see if correct is set to true
					var correct = $(this).attr("correct");
					if ( correct === "true" & position === correctAnswer) {
						console.log("correct!");
						correctAnswers ++;
					}
				});
				$("#bottomMiddleSecond .guessBox").each( function () {
					//get position of each .guessBox and match it to puzzle5by5.correctAnswer
					var position = $(this).index();
					var correctAnswer = puzzle5by5[tempHolder].correctAnswer[3][j];
					//used to check to see if correct is set to true
					var correct = $(this).attr("correct");
					if ( correct === "true" & position === correctAnswer) {
						console.log("correct!");
						correctAnswers ++;
					}
				});
				$("#bottomMiddleThird .guessBox").each( function () {
					//get position of each .guessBox and match it to puzzle5by5.correctAnswer
					var position = $(this).index();
					var correctAnswer = puzzle5by5[tempHolder].correctAnswer[4][j];
					//used to check to see if correct is set to true
					var correct = $(this).attr("correct");
					if ( correct === "true" & position === correctAnswer) {
						console.log("correct!");
						correctAnswers ++;
					}
				});
				$("#bottomSecond .guessBox").each( function () {
					//get position of each .guessBox and match it to puzzle5by5.correctAnswer
					var position = $(this).index();
					var correctAnswer = puzzle5by5[tempHolder].correctAnswer[5][j];
					//used to check to see if correct is set to true
					var correct = $(this).attr("correct");
					if ( correct === "true" & position === correctAnswer) {
						console.log("correct!");
						correctAnswers ++;
					}
				});
			}
			
			//display correct alert
				if ( correctAnswers === 30 ) {
					$("#puzzleGameBoardInside").effect( "explode", 1800 );
					$("#win").css("z-index", "1");
				} else {
					console.log("Sorry. I know you can do it if you try again!");
				}
		});
	});
});