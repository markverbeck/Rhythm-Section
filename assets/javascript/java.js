$(document).ready(function(){
	var time = 0;
	var points = 0;
	var misses = 0;

	var increment = function(){
		time ++;
		console.log(time);
	}

	var pointUp = function(){
		points ++;
		$("#points").html("Points: " + points);
	}

	var pointCheckA = function(a){
		switch(a){
			case 102:
				pointUp();
				break;
			case 103:
				pointUp();
				break;
			case 104:
				pointUp();
				break;
			// Each group of three represents one available point.

			case 128:
				pointUp();
				break;
			case 129:
				pointUp();
				break;
			case 130:
				pointUp();
				break;

			
			case 154:
				pointUp();
				break;
			case 155:
				pointUp();
				break;
			case 156:
				pointUp();
				break;

			
			case 180:
				pointUp();
				break;
			case 181:
				pointUp();
				break;
			case 182:
				pointUp();
				break;

			
			case 205:
				pointUp();
				break;
			case 206:
				pointUp();
				break;
			case 207:
				pointUp();
				break;


			case 231:
				pointUp();
				break;
			case 232:
				pointUp();
				break;
			case 233:
				pointUp();
				break;


			case 257:
				pointUp();
				break;
			case 258:
				pointUp();
				break;
			case 259:
				pointUp();
				break;


			case 266:
				pointUp();
				break;
			case 267:
				pointUp();
				break;
			case 268:
				pointUp();
				break;


			case 282:
				pointUp();
				break;
			case 283:
				pointUp();
				break;
			case 284:
				pointUp();
				break;


			case 292:
				pointUp();
				break;
			case 293:
				pointUp();
				break;
			case 294:
				pointUp();
				break;


			case 308:
				pointUp();
				break;
			case 309:
				pointUp();
				break;
			case 310:
				pointUp();
				break;


			case 318:
				pointUp();
				break;
			case 319:
				pointUp();
				break;
			case 320:
				pointUp();
				break;


			case 334:
				pointUp();
				break;
			case 335:
				pointUp();
				break;
			case 336:
				pointUp();
				break;


			case 344:
				pointUp();
				break;
			case 345:
				pointUp();
				break;
			case 346:
				pointUp();
				break;


			case 360:
				pointUp();
				break;
			case 361:
				pointUp();
				break;
			case 362:
				pointUp();
				break;


			case 369:
				pointUp();
				break;
			case 370:
				pointUp();
				break;
			case 371:
				pointUp();
				break;


			case 386:
				pointUp();
				break;
			case 387:
				pointUp();
				break;
			case 388:
				pointUp();
				break;


			case 395:
				pointUp();
				break;
			case 396:
				pointUp();
				break;
			case 397:
				pointUp();
				break;


			case 411:
				pointUp();
				break;
			case 412:
				pointUp();
				break;
			case 413:
				pointUp();
				break;


			case 421:
				pointUp();
				break;
			case 422:
				pointUp();
				break;
			case 423:
				pointUp();
				break;


			case 437:
				pointUp();
				break;
			case 438:
				pointUp();
				break;
			case 439:
				pointUp();
				break;

			case 447:
				pointUp();
				break;
			case 448:
				pointUp();
				break;
			case 449:
				pointUp();
				break;


			case 463:
				pointUp();
				break;
			case 464:
				pointUp();
				break;
			case 465:
				pointUp();
				break;


			case 473:
				pointUp();
				break;
			case 474:
				pointUp();
				break;
			case 475:
				pointUp();
				break;


			case 489:
				pointUp();
				break;
			case 490:
				pointUp();
				break;
			case 491:
				pointUp();
				break;


			case 499:
				pointUp();
				break;
			case 500:
				pointUp();
				break;
			case 501:
				pointUp();
				break;


			case 515:
				pointUp();
				break;
			case 516:
				pointUp();
				break;
			case 517:
				pointUp();
				break;


			case 524:
				pointUp();
				break;
			case 525:
				pointUp();
				break;
			case 526:
				pointUp();
				break;


			case 540:
				pointUp();
				break;
			case 541:
				pointUp();
				break;
			case 542:
				pointUp();
				break;


			case 550:
				pointUp();
				break;
			case 551:
				pointUp();
				break;
			case 552:
				pointUp();
				break;


			case 566:
				pointUp();
				break;
			case 567:
				pointUp();
				break;
			case 568:
				pointUp();
				break;


			case 515:
				pointUp();
				break;
			case 516:
				pointUp();
				break;
			case 517:
				pointUp();
				break;


			case 576:
				pointUp();
				break;
			case 577:
				pointUp();
				break;
			case 578:
				pointUp();
				break;


			case 592:
				pointUp();
				break;
			case 593:
				pointUp();
				break;
			case 594:
				pointUp();
				break;


			case 602:
				pointUp();
				break;
			case 603:
				pointUp();
				break;
			case 604:
				pointUp();
				break;


			case 618:
				pointUp();
				break;
			case 619:
				pointUp();
				break;
			case 620:
				pointUp();
				break;

			case 628:
				pointUp();
				break;
			case 629:
				pointUp();
				break;
			case 630:
				pointUp();
				break;

			case 644:
				pointUp();
				break;
			case 645:
				pointUp();
				break;
			case 646:
				pointUp();
				break;

			case 653:
				pointUp();
				break;
			case 654:
				pointUp();
				break;
			case 655:
				pointUp();
				break;

			case 670:
				pointUp();
				break;
			case 671:
				pointUp();
				break;
			case 672:
				pointUp();
				break;

			case 679:
				pointUp();
				break;
			case 680:
				pointUp();
				break;
			case 681:
				pointUp();
				break;

			case 695:
				pointUp();
				break;
			case 696:
				pointUp();
				break;
			case 697:
				pointUp();
				break;

			case 705:
				pointUp();
				break;
			case 706:
				pointUp();
				break;
			case 707:
				pointUp();
				break;

			case 721:
				pointUp();
				break;
			case 722:
				pointUp();
				break;
			case 723:
				pointUp();
				break;

			case 731:
				pointUp();
				break;
			case 732:
				pointUp();
				break;
			case 733:
				pointUp();
				break;

			case 747:
				pointUp();
				break;
			case 748:
				pointUp();
				break;
			case 749:
				pointUp();
				break;

			case 757:
				pointUp();
				break;
			case 758:
				pointUp();
				break;
			case 759:
				pointUp();
				break;

			case 773:
				pointUp();
				break;
			case 774:
				pointUp();
				break;
			case 775:
				pointUp();
				break;



		}
			
	}

	var keyPress = document.onkeypress = function(event){
		var letter = event.key;
		if(letter === "a"){
			document.getElementById("aNote").play();
			document.getElementById("aNote").volume = 0.5;
			$("#a").addClass("noteBorder");
			pointCheckA(time);
		}else if (letter === "d"){
			document.getElementById("gNote").play();
			document.getElementById("gNote").volume = 0.5;
			$("#g").addClass("noteBorder");
		}

	}

	document.onkeyup = function(event){
		var letter = event.key;
		if(letter === "a"){
			document.getElementById("aNote").load();
			$("#a").removeClass("noteBorder");
		}else if (letter === "d"){
			document.getElementById("gNote").load();
			$("#g").removeClass("noteBorder");
		}
	}

	$("#startButton").on("click", function(){
		document.getElementById("funkyTomNoBass").play();
		time = 0;
		setInterval(increment, 100);
	})

	
});