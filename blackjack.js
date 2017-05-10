var suits = ["H","S","C","D"];
var values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var cards =[];
var count = 0;
var dealerVal=0;
var playerVal=0;
var dealerPoints=0;
var playerPoints=0;
var card;

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
	if(card.value!="A"&&card.value!="J"&&card.value!="Q"&&card.value!="K"){
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
	

}
function addDealerCard(){

	DrawCard();
	if(card.value!="A"&&card.value!="J"&&card.value!="Q"&&card.value!="K"){
	dealerVal+=card.value;
	dealerPoints+=parseInt(card.value);
	console.log("dealer cards are "+dealerVal);
	console.log(dealerPoints);
}
else if(card.value=="A"){
	dealerVal+="A";
	dealerPoints+=1;
	console.log("dealer cards are "+dealerVal);
	console.log(dealerPoints);
}
else if(card.value=="J"){
	dealerVal+="J";
	dealerPoints+=10;
	console.log("dealer cards are "+dealerVal);
	console.log(dealerPoints);
}
else if(card.value=="Q"){
	dealerVal+="Q";
	dealerPoints+=10;
	console.log("dealer cards are "+dealerVal);
	console.log(dealerPoints);
}
else{
	dealerVal+="K";
	dealerPoints+=10;
	console.log("dealer cards are "+dealerVal);
	console.log(dealerPoints);
}
}
function Hit(){
	addDealerCard();
	addPlayerCard();
	checkforOver();
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
	DealerMove();
	checkforOver();
	DealerMOve();
	checkforOver();
	DealerMOve();
	checkforOver();
	if(playerPoints=dealerPoints){
		console.log("it's a tie");
	}
	else if(playerPoints>dealerPoints){
		console.log("you won!");
	}
	else if(playerPoints<dealerPoints){
		consoole.log("you lost");
	}
	function DealerMove(){
		if(dealerPoints<=16){
			addDealerCard();
		}
	}
}



