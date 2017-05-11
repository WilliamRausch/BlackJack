
var suits = ["H","S","C","D"];
var values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
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
	if(card&&card.value&&card.value!="A"&&card.value!="J"&&card.value!="Q"&&card.value!="K"){
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
playerAceCheck();

}
function addDealerCard(){

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
	if(card&&card.value&&card.value!="A"&&card.value!="J"&&card.value!="Q"&&card.value!="K"){
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
		console.log("winner!")
	}
	if(playerPoints>21){
		console.log("you lose!")
	}
}
function Pass(){
	playerAceCheck();
	DealerMove();
	checkforOver();
	DealerMove();
	checkforOver();
	DealerMove();
	checkforOver();
	if(playerPoints==dealerPoints){
		console.log("it's a tie");
	}
	else if(playerPoints>dealerPoints){
		console.log("you won!");
	}
	else if(playerPoints<dealerPoints){
		console.log("you lost");
	}
}
	function DealerMove(){
		dealerAceCheck();

		if(dealerPoints<=16){
			addDealerCard();
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
		if(numofPlayerCards==0){
			$('#pcone').css('background-color', 'blue');
		}
		if(numofPlayerCards==1){
			$('#pctwo').css('background-color', 'blue');
		}
		if(numofPlayerCards==2){
			$('#pcthree').css('background-color', 'blue');
		}
		if(numofPlayerCards==3){
			$('#pcfour').css('background-color', 'blue');
		}
		if(numofPlayerCards==4){
			$('#pcfive').css('background-color', 'blue');
		}
		if(numofPlayerCards==5){
			$('#pcsix').css('background-color', 'blue');
		}
	}
	


console.log('hello');
window.onload = function() {
	createCards();
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
		 console.log("player has: "+numofPlayerCards+" cards")
	});
	

}

