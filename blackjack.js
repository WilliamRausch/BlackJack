
var suits = ["H","S","C","D"];
var values = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"];
var cards =[];
var count = 0;
var dealerVal=0;
var playerVal=0;
var playerSuit=0;
var dealerSuit=0;
var dealerPoints=0;
var playerPoints=0;
var card;
var dealerCards=[];
var playerCards=[];
var playerSuits=[];
var dealerSuits=[];
var numofPlayerCards=0;
var numofDealerCards=0;


function createCards(){
	cards=[];
	for(var i=0;i<suits.length;i++){
		for(var j=0;j<values.length;j++){
			var card={};
			card.suit=suits[i];
			card.value=values[j];
			cards.push(card);
		}
	}
	console.log(cards.length);
	console.log(cards);
}
function DrawCard(){
 
  
  if( cards.length > 0 ) {
    
    var randIndex = Math.floor( Math.random() * cards.length );
    card = cards.splice( randIndex, 1 )[0];
  }
  
  return card;
}

function addPlayerCard(){
	DrawCard();
	if(card.suit=="H"){
		playerSuit+="H";
	}
	if(card.suit=="S"){
		playerSuit+="S";
	}
	if(card.suit=="C"){
		playerSuit+="C";
	}
	if(card.suit=="D"){
		playerSuit+="D";
	}
	if(card&&card.value&&card.value!="A"&&card.value!="J"&&card.value!="Q"&&card.value!="K"&&card.value!="T"){
	playerVal+=card.value;
	playerPoints+=parseInt(card.value);
	console.log("your cards are "+playerVal);
	console.log(playerPoints);
}
else if(card.value=="A"){
	playerVal+="A";
	playerPoints+=1;
	console.log("your cards are "+playerVal);
	console.log(playerPoints);
}
else if(card.value=="T"){
	playerVal+="T";
	playerPoints+=1;
	console.log("your cards are "+playerVal);
	console.log(playerPoints);
}
else if(card.value=="J"){
	playerVal+="J";
	playerPoints+=10;
	console.log("your cards are "+playerVal);
	console.log(playerPoints);
}
else if(card.value=="Q"){
	playerVal+="Q";
	playerPoints+=10;
	console.log("your cards are "+playerVal);
	console.log(playerPoints);
}
else {
	playerVal+="K";
	playerPoints+=10;
	console.log("your cards are "+playerVal);
	console.log(playerPoints);
}
	for(i=0;i<=playerVal.length-1;i++){
	playerCards[i]=playerVal[i+1];
}
for(i=0;i<=playerSuit.length-1;i++){
	playerSuits[i]=playerSuit[i+1];

	
}
//playerAceCheck();

}
function addDealerCard(){
	//numofDealerCards+=1;
	DrawCard();
	if(card.suit=="H"){
		dealerSuit+="H";
	}
	if(card.suit=="S"){
		dealerSuit+="S";
	}
	if(card.suit=="C"){
		dealerSuit+="C";
	}
	if(card.suit=="D"){
		dealerSuit+="D";
	}
	if(card&&card.value&&card.value!="A"&&card.value!="J"&&card.value!="Q"&&card.value!="K"&&card.value!="T"){
	dealerVal+=card.value;
	dealerPoints+=parseInt(card.value);
	console.log("dealer cards are "+dealerVal);
	console.log(dealerPoints);
	dealerCards.push(dealerVal);
}
else if(card.value=="A"){
	dealerVal+="A";
	dealerPoints+=1;
	console.log("dealer cards are "+dealerVal);
	console.log(dealerPoints);
	dealerCards.push(dealerVal);
}
else if(card.value=="T"){
	dealerVal+="T";
	dealerPoints+=1;
	console.log("dealer cards are "+dealerVal);
	console.log(dealerPoints);
	dealerCards.push(dealerVal);
}
else if(card.value=="J"){
	dealerVal+="J";
	dealerPoints+=10;
	console.log("dealer cards are "+dealerVal);
	console.log(dealerPoints);
	dealerCards.push(dealerVal);
}
else if(card.value=="Q"){
	dealerVal+="Q";
	dealerPoints+=10;
	console.log("dealer cards are "+dealerVal);
	console.log(dealerPoints);
	dealerCards.push(dealerVal);
}
else{
	dealerVal+="K";
	dealerPoints+=10;
	console.log("dealer cards are "+dealerVal);
	console.log(dealerPoints);
	dealerCards.push(dealerVal);
}
for(i=0;i<=dealerVal.length-1;i++){
	dealerCards[i]=dealerVal[i+1];
}
for(i=0;i<=dealerSuit.length-1;i++){
	dealerSuits[i]=dealerSuit[i+1];
}

}
function Hit(){
	DealerMove();
	addPlayerCard();
	checkforOver();
	playerSuitDisplay();
	numofPlayerCards+=1;
}
function checkforOver(){
	if(dealerPoints>21){
		alert("dealer over 21");
	}
	if(playerPoints>21){
		alert("player over 21");
	}
}
function Pass(){
	playerAceCheck();
	DealerMove();
	
	DealerMove();
	
	DealerMove();
	checkforOver();
	if(playerPoints==dealerPoints){
		alert("it's a tie");
	}
	else if(playerPoints>dealerPoints&&playerPoints<=21){
		alert("you won!");
	}
	else if(playerPoints<dealerPoints&&dealerPoints<=21){
		alert("you lost");
	}
}
	function DealerMove(){
		console.log("dealer made a move");
		dealerSuitDisplay();
		dealerAceCheck();

		if(dealerPoints<=16||dealerPoints<=playerPoints){
			addDealerCard();
			numofDealerCards+=1;
			checkforOver();
		}
	}
	
	function playerAceCheck(){
		for(var i=0; i<=playerCards.length;i++){
			if(playerCards[i]=='A'){
				console.log("Player has an ace");
				if(playerPoints<=11){
					playerPoints+=10;
					console.log("player Ace activated as 11");
				}
				else{
					console.log("ace stays as 1");
				}
			
			
		}
	}
	}
	function dealerAceCheck(){
		for(var i=0; i<=dealerCards.length;i++){
			if(dealerCards[i]=='A'){
				console.log("Dealer has an ace");
				if(dealerPoints<=11){
					dealerPoints+=10;
					console.log("Dealer Ace activated as 11");
				}
				else{
					console.log("Dealer stays as 1");
				}
			
			
		}
	}
	}
	function playerSuitDisplay(){
		console.log("function runs");
		if(numofPlayerCards==0){
			if(playerSuits[numofPlayerCards]=='H'){
				$("#pcone").text(playerCards);
				$('#pcone').css('background-color', 'blue');
		}
		if(playerSuits[numofPlayerCards]=='S'){
				$('#pcone').css('background-color', 'green');
		}	$("#pcone").text(playerCards);
		if(playerSuits[numofPlayerCards]=='C'){
				$('#pcone').css('background-color', 'yellow');
		}	$("#pcone").text(playerCards);
		if(playerSuits[numofPlayerCards]=='D'){
				$('#pcone').css('background-color', 'pink');
		}$("#pcone").text(playerCards);
			}

		
		if(numofPlayerCards==1){
			if(playerSuits[numofPlayerCards]=='H'){
				$('#pctwo').css('background-color', 'blue');
				$("#pctwo").text(playerCards[1]);
		}
		if(playerSuits[numofPlayerCards]=='S'){
				$('#pctwo').css('background-color', 'green');
				$("#pctwo").text(playerCards[1]);
		}
		if(playerSuits[numofPlayerCards]=='C'){
				$('#pctwo').css('background-color', 'yellow');
				$("#pctwo").text(playerCards[1]);
		}
		if(playerSuits[numofPlayerCards]=='D'){
				$('#pctwo').css('background-color', 'pink');
				$("#pctwo").text(playerCards[1]);
		}
		}
		if(numofPlayerCards==2){
			if(playerSuits[numofPlayerCards]=='H'){
				$('#pcthree').css('background-color', 'blue');
				$("#pcthree").text(playerCards[2]);
		}
		if(playerSuits[numofPlayerCards]=='S'){
				$('#pcthree').css('background-color', 'green');
		}		$("#pcthree").text(playerCards[2]);
		if(playerSuits[numofPlayerCards]=='C'){
				$('#pcthree').css('background-color', 'yellow');
		}		$("#pcthree").text(playerCards[2]);
		if(playerSuits[numofPlayerCards]=='D'){
				$('#pcthree').css('background-color', 'pink');
		}
		}
		if(numofPlayerCards==3){
			if(playerSuits[numofPlayerCards]=='H'){
				$('#pcfour').css('background-color', 'blue');
		}		$("#pcfour").text(playerCards[3]);
		if(playerSuits[numofPlayerCards]=='S'){
				$('#pcfour').css('background-color', 'green');
		}		$("#pcfour").text(playerCards[3]);
		if(playerSuits[numofPlayerCards]=='C'){
				$('#pcfour').css('background-color', 'yellow');
		}		$("#pcfour").text(playerCards[3]);
		if(playerSuits[numofPlayerCards]=='D'){
				$('#pcfour').css('background-color', 'pink');
		}		$("#pcfour").text(playerCards[3]);
		}		
		if(numofPlayerCards==4){
			if(playerSuits[numofPlayerCards]=='H'){
				$('#pcfive').css('background-color', 'blue');
		}		$("#pcfive").text(playerCards[4]);
		if(playerSuits[numofPlayerCards]=='S'){
				$('#pcfive').css('background-color', 'green');
		}		$("#pcfive").text(playerCards[4]);
		if(playerSuits[numofPlayerCards]=='C'){
				$('#pcfive').css('background-color', 'yellow');
		}		$("#pcfive").text(playerCards[4]);
		if(playerSuits[numofPlayerCards]=='D'){
				$('#pcfive').css('background-color', 'pink');
		}		$("#pcfive").text(playerCards[4]);
		}
		if(numofPlayerCards==5){
			if(playerSuits[numofPlayerCards]=='H'){
				$('#pcsix').css('background-color', 'blue');
		}		$("#pcsix").text(playerCards[5]);
		if(playerSuits[numofPlayerCards]=='S'){
				$('#pcsix').css('background-color', 'green');
		}		$("#pcsix").text(playerCards[5]);
		if(playerSuits[numofPlayerCards]=='C'){
				$('#pcsix').css('background-color', 'yellow');
		}		$("#pcsix").text(playerCards[5]);
		if(playerSuits[numofPlayerCards]=='D'){
				$('#pcsix').css('background-color', 'pink');
		}		$("#pcsix").text(playerCards[5]);
		}
	}
	function dealerSuitDisplay(){
		console.log("DSP");
		//console.log(numofDealerCards);
		if(numofDealerCards==1){
			console.log("first one");
			if(dealerSuits[numofDealerCards-1]=='H'){
				//console.log(dealerCards[0]);
				$("#dcone").html(dealerCards[0]);
				$('#dcone').css('background-color', 'blue');
		}
		if(dealerSuits[numofDealerCards-1]=='S'){
			//console.log(dealerCards[0]);
				$('#dcone').css('background-color', 'green');
		}		$("#dcone").html(dealerCards[0]);
		if(dealerSuits[numofDealerCards-1]=='C'){
			//console.log(dealerCards[0]);
				$('#dcone').css('background-color', 'yellow');
		}		$("#dcone").html(dealerCards[0]);
		if(dealerSuits[numofDealerCards-1]=='D'){
			//console.log(dealerCards[0]);
			$('#dcone').css('background-color', 'pink');
		}	$("#dcone").html(dealerCards[0]);
			}

		
		if(numofDealerCards==2){
			console.log("second one");
			if(dealerSuits[numofDealerCards-1]=='H'){
				$('#dctwo').css('background-color', 'blue');
				$("#dctwo").text(dealerCards[1]);
		}
		if(dealerSuits[numofDealerCards-1]=='S'){
				$('#dctwo').css('background-color', 'green');
				$("#dctwo").text(dealerCards[1]);
		}
		if(dealerSuits[numofDealerCards-1]=='C'){
				$('#dctwo').css('background-color', 'yellow');
				$("#dctwo").text(dealerCards[1]);
		}
		if(dealerSuits[numofDealerCards-1]=='D'){
				$('#dctwo').css('background-color', 'pink');
				$("#dctwo").text(dealerCards[1]);
		}
		}
		if(numofDealerCards==3){
			console.log("third one");
			if(dealerSuits[numofDealerCards-1]=='H'){
				$('#dcthree').css('background-color', 'blue');
				$("#dcthree").text(dealerCards[2]);
		}
		if(dealerSuits[numofDealerCards-1]=='S'){
				$('#dcthree').css('background-color', 'green');
		}		$("#dcthree").text(dealerCards[2]);
		if(dealerSuits[numofDealerCards-1]=='C'){
				$('#dcthree').css('background-color', 'yellow');
		}		$("#dcthree").text(dealerCards[2]);
		if(dealerSuits[numofDealerCards-1]=='D'){
				$('#dcthree').css('background-color', 'pink');
		}		$("#dcthree").text(dealerCards[2]);
		}
		if(numofDealerCards==4){
			console.log("fourth one");
			if(dealerSuits[numofDealerCards-1]=='H'){
				$('#dcfour').css('background-color', 'blue');
		}		$("#dcfour").text(dealerCards[3]);
		if(dealerSuits[numofDealerCards-1]=='S'){
				$('#dcfour').css('background-color', 'green');
		}		$("#dcfour").text(dealerCards[3]);
		if(dealerSuits[numofDealerCards-1]=='C'){
				$('#dcfour').css('background-color', 'yellow');
		}		$("#dcfour").text(dealerCards[3]);
		if(dealerSuits[numofDealerCards-1]=='D'){
				$('#dcfour').css('background-color', 'pink');
		}		$("#dcfour").text(dealerCards[3]);
		}		
		if(numofDealerCards==5){
			console.log("fifth one");
			if(dealerSuits[numofDealerCards-1]=='H'){
				$('#dcfive').css('background-color', 'blue');
		}		$("#dcfive").text(dealerCards[4]);
		if(dealerSuits[numofPlayerCards-1]=='S'){
				$('#dcfive').css('background-color', 'green');
		}		$("#dcfive").text(dealerCards[4]);
		if(dealerSuits[numofPlayerCards-1]=='C'){
				$('#dcfive').css('background-color', 'yellow');
		}		$("#dcfive").text(playerCards[4]);
		if(dealerSuits[numofDealerCards-1]=='D'){
				$('#dcfive').css('background-color', 'pink');
		}		$("#dcfive").text(dealerCards[4]);
		}
		if(numofDealerCards==5){
			if(dealerSuits[numofDealerCards-1]=='H'){
				$('#dcsix').css('background-color', 'blue');
		}		$("#dcsix").text(dealerCards[5]);
		if(dealerSuits[numofDealerCards-1]=='S'){
				$('#dcsix').css('background-color', 'green');
		}		$("#dcsix").text(dealerCards[5]);
		if(playerSuits[numofDealerCards-1]=='C'){
				$('#dcsix').css('background-color', 'yellow');
		}		$("#dcsix").text(dealerCards[5]);
		if(playerSuits[numofDealerCards-1]=='D'){
				$('#dcsix').css('background-color', 'pink');
		}		$("#dcsix").text(dealerCards[5]);
		}
	}
	

console.log('hello');
window.onload = function() {
	createCards();
	DealerMove();
	dealerSuitDisplay();
	$('#hit').on('click', function(){
		 console.log("hit");
		 Hit();
	
	});
	$('#pass').on('click', function(){
		 console.log("pass");
		 Pass();
		 console.log("dealer hand: "+dealerCards);
		 console.log("player hand: "+playerCards);
		 console.log("player suits are "+playerSuits);
		 console.log("Dealer suits are " +dealerSuits);
		 console.log("player has: "+numofPlayerCards+" cards");
		 console.log("dealer has: "+numofDealerCards+" cards");
	});
	

}

