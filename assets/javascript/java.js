$(document).ready(function(){
	var time = 0;
	var points = 0;
	var misses = 0;
	var keyPressed = false;

	var increment = function(){
		time ++;
		console.log(time);
		missedNote(time);
	}

	var pointUp = function(){
		points ++;
		$("#points").html("Points: " + points);
	}

	var missed = function(){
		misses ++;
		$("#miss").html("Misses: " + misses);
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

			case 782:
				pointUp();
				break;
			case 783:
				pointUp();
				break;
			case 784:
				pointUp();
				break;

			case 799:
				pointUp();
				break;
			case 800:
				pointUp();
				break;
			case 801:
				pointUp();
				break;

			case 808:
				pointUp();
				break;
			case 809:
				pointUp();
				break;
			case 810:
				pointUp();
				break;

			case 824:
				pointUp();
				break;
			case 825:
				pointUp();
				break;
			case 826:
				pointUp();
				break;

			case 834:
				pointUp();
				break;
			case 835:
				pointUp();
				break;
			case 836:
				pointUp();
				break;

			case 850:
				pointUp();
				break;
			case 851:
				pointUp();
				break;
			case 852:
				pointUp();
				break;

			case 860:
				pointUp();
				break;
			case 861:
				pointUp();
				break;
			case 862:
				pointUp();
				break;

			case 876:
				pointUp();
				break;
			case 877:
				pointUp();
				break;
			case 878:
				pointUp();
				break;

			case 886:
				pointUp();
				break;
			case 887:
				pointUp();
				break;
			case 888:
				pointUp();
				break;

			case 902:
				pointUp();
				break;
			case 903:
				pointUp();
				break;
			case 904:
				pointUp();
				break;

			case 911:
				pointUp();
				break;
			case 912:
				pointUp();
				break;
			case 913:
				pointUp();
				break;

			case 928:
				pointUp();
				break;
			case 929:
				pointUp();
				break;
			case 930:
				pointUp();
				break;

			case 937:
				pointUp();
				break;
			case 938:
				pointUp();
				break;
			case 939:
				pointUp();
				break;

			case 953:
				pointUp();
				break;
			case 954:
				pointUp();
				break;
			case 955:
				pointUp();
				break;

			case 963:
				pointUp();
				break;
			case 964:
				pointUp();
				break;
			case 965:
				pointUp();
				break;

			case 979:
				pointUp();
				break;
			case 980:
				pointUp();
				break;
			case 981:
				pointUp();
				break;

			case 989:
				pointUp();
				break;
			case 990:
				pointUp();
				break;
			case 991:
				pointUp();
				break;

			case 1005:
				pointUp();
				break;
			case 1006:
				pointUp();
				break;
			case 1007:
				pointUp();
				break;

			case 1015:
				pointUp();
				break;
			case 1016:
				pointUp();
				break;
			case 1017:
				pointUp();
				break;

			case 1031:
				pointUp();
				break;
			case 1032:
				pointUp();
				break;
			case 1033:
				pointUp();
				break;

			case 1040:
				pointUp();
				break;
			case 1041:
				pointUp();
				break;
			case 1042:
				pointUp();
				break;

			case 1057:
				pointUp();
				break;
			case 1058:
				pointUp();
				break;
			case 1059:
				pointUp();
				break;

			case 1066:
				pointUp();
				break;
			case 1067:
				pointUp();
				break;
			case 1068:
				pointUp();
				break;

			case 1082:
				pointUp();
				break;
			case 1083:
				pointUp();
				break;
			case 1084:
				pointUp();
				break;

			case 1092:
				pointUp();
				break;
			case 1093:
				pointUp();
				break;
			case 1094:
				pointUp();
				break;

			case 1108:
				pointUp();
				break;
			case 1109:
				pointUp();
				break;
			case 1110:
				pointUp();
				break;





		}
			
	}

	var pointCheckD = function(a){
		switch(a){
			case 279:
				pointUp();
				break;
			case 280:
				pointUp();
				break;
			case 281:
				pointUp();
				break;

			case 331:
				pointUp();
				break;
			case 332:
				pointUp();
				break;
			case 333:
				pointUp();
				break;

			case 382:
				pointUp();
				break;
			case 383:
				pointUp();
				break;
			case 384:
				pointUp();
				break;

			case 434:
				pointUp();
				break;
			case 435:
				pointUp();
				break;
			case 436:
				pointUp();
				break;

			case 663:
				pointUp();
				break;
			case 664:
				pointUp();
				break;
			case 665:
				pointUp();
				break;

			case 692:
				pointUp();
				break;
			case 693:
				pointUp();
				break;
			case 694:
				pointUp();
				break;

			case 744:
				pointUp();
				break;
			case 745:
				pointUp();
				break;
			case 746:
				pointUp();
				break;

			case 795:
				pointUp();
				break;
			case 796:
				pointUp();
				break;
			case 797:
				pointUp();
				break;

			case 847:
				pointUp();
				break;
			case 848:
				pointUp();
				break;
			case 849:
				pointUp();
				break;

			case 899:
				pointUp();
				break;
			case 900:
				pointUp();
				break;
			case 901:
				pointUp();
				break;

			case 950:
				pointUp();
				break;
			case 951:
				pointUp();
				break;
			case 952:
				pointUp();
				break;

			case 1002:
				pointUp();
				break;
			case 1003:
				pointUp();
				break;
			case 1004:
				pointUp();
				break;

			case 1053:
				pointUp();
				break;
			case 1054:
				pointUp();
				break;
			case 1055:
				pointUp();
				break;

			case 1118:
				pointUp();
				break;
			case 1119:
				pointUp();
				break;
			case 1120:
				pointUp();
				break;


		}
	}

	var missedNote = function(a){
		switch(a){
			case 105:
			if(keyPressed === false){
					missed();
				};
			break;

			case 131:
			if(keyPressed === false){
					missed();
				};
			break;

			case 156:
			if(keyPressed === false){
					missed();
				};
			break;

			case 182:
			if(keyPressed === false){
					missed();
				};
			break;

			case 208:
			if(keyPressed === false){
					missed();
				};
			break;

			case 234:
			if(keyPressed === false){
					missed();
				};
			break;

			case 260:
			if(keyPressed === false){
					missed();
				};
			break;

			case 269:
			if(keyPressed === false){
					missed();
				};
			break;

			case 282:
			if(keyPressed === false){
					missed();
				};
			break;

			case 285:
			if(keyPressed === false){
					missed();
				};
			break;

			case 295:
			if(keyPressed === false){
					missed();
				};
			break;

			case 311:
			if(keyPressed === false){
					missed();
				};
			break;

			case 321:
			if(keyPressed === false){
					missed();
				};
			break;

			case 335:
			if(keyPressed === false){
					missed();
				};
			break;

			case 337:
			if(keyPressed === false){
					missed();
				};
			break;

			case 347:
			if(keyPressed === false){
					missed();
				};
			break;

			case 363:
			if(keyPressed === false){
					missed();
				};
			break;

			case 372:
			if(keyPressed === false){
					missed();
				};
			break;

			case 385:
			if(keyPressed === false){
					missed();
				};
			break;

			case 389:
			if(keyPressed === false){
					missed();
				};
			break;

			case 399:
			if(keyPressed === false){
					missed();
				};
			break;

			case 414:
			if(keyPressed === false){
					missed();
				};
			break;

			case 424:
			if(keyPressed === false){
					missed();
				};
			break;

			case 437:
			if(keyPressed === false){
					missed();
				};
			break;

			case 440:
			if(keyPressed === false){
					missed();
				};
			break;

			case 450:
			if(keyPressed === false){
					missed();
				};
			break;

			case 466:
			if(keyPressed === false){
					missed();
				};
			break;

			case 476:
			if(keyPressed === false){
					missed();
				};
			break;

			case 492:
			if(keyPressed === false){
					missed();
				};
			break;

			case 502:
			if(keyPressed === false){
					missed();
				};
			break;

			case 518:
			if(keyPressed === false){
					missed();
				};
			break;

			case 527:
			if(keyPressed === false){
					missed();
				};
			break;

			case 543:
			if(keyPressed === false){
					missed();
				};
			break;

			case 553:
			if(keyPressed === false){
					missed();
				};
			break;

			case 569:
			if(keyPressed === false){
					missed();
				};
			break;

			case 579:
			if(keyPressed === false){
					missed();
				};
			break;

			case 595:
			if(keyPressed === false){
					missed();
				};
			break;

			case 605:
			if(keyPressed === false){
					missed();
				};
			break;

			case 621:
			if(keyPressed === false){
					missed();
				};
			break;

			case 631:
			if(keyPressed === false){
					missed();
				};
			break;

			case 647:
			if(keyPressed === false){
					missed();
				};
			break;

			case 656:
			if(keyPressed === false){
					missed();
				};
			break;

			case 666:
			if(keyPressed === false){
					missed();
				};
			break;

			case 673:
			if(keyPressed === false){
					missed();
				};
			break;

			case 682:
			if(keyPressed === false){
					missed();
				};
			break;

			case 695:
			if(keyPressed === false){
					missed();
				};
			break;

			case 697:
			if(keyPressed === false){
					missed();
				};
			break;

			case 709:
			if(keyPressed === false){
					missed();
				};
			break;

			case 103:
			if(keyPressed === false){
					missed();
				};
			break;

			case 103:
			if(keyPressed === false){
					missed();
				};
			break;

			case 103:
			if(keyPressed === false){
					missed();
				};
			break;







		}
			
	}

	var keyPress = document.onkeypress = function(event){
		var letter = event.key;
		if(letter === "a"){
			keyPressed = true;
			document.getElementById("aNote").play();
			document.getElementById("aNote").volume = 0.5;
			$("#a").addClass("noteBorder");
			pointCheckA(time);
			// document.getElementById("aNote").volume = 0;
		}else if (letter === "d"){
			keyPressed = true;
			document.getElementById("gNote").play();
			document.getElementById("gNote").volume = 0.5;
			$("#g").addClass("noteBorder");
			pointCheckD(time);
		}
	};



	document.onkeyup = function(event){
		var letter = event.key;
		if(letter === "a"){
			keyPressed = false;
			document.getElementById("aNote").load();
			$("#a").removeClass("noteBorder");
		}else if (letter === "d"){
			keyPressed = false;
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