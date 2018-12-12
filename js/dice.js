
// Create two global variables
//player1 boolean true or false
//player2 boolean true or false
var player1 = true;
var player2 = false;

var player1Pos = 1;
var player2Pos = 1;



var board = ["", 
	"boardField1", 
	"boardField2", 
	"boardField3", 
	"boardField4", 
	"boardField5", 
	"boardField6", 
	"boardField7", 
	"boardField8", 
	"boardField9", 
	"boardField10", 
	"boardField11", 
	"boardField12", 
	"boardField13", 
	"boardField14", 
	"boardField15", 
	"boardField16", 
	"boardField17", 
	"boardField18", 
	"boardField19", 
	"boardField20", 
	"boardField21", 
	"boardField22", 
	"boardField23", 
	"boardField24", 
	"boardField25", 
	"boardField26", 
	"boardField27", 
	"boardField28", 
	"boardField29", 
	"boardField30" 
];




//Get Items out of local storage for each user and populate player 1 and player 2 with data.
function setPlayers(p1=1, p2=1) {

  //console.log (p1, p2, player1, player2); 


	if (player1 || (p1 == p2 && p1 == 1)) {
	  var img = localStorage.getItem('Img1');
	  var player1img = document.createElement('img');
	  player1img.src = img;
	  var el1 = document.getElementById(board[p1]); 
	  el1.appendChild(player1img);
	  player1img.setAttribute('id', 'player1');

	} 
	if (player2 || (p1 == p2 && p1 == 1)) {
	  var img2 = localStorage.getItem('Img2');
	  var player2img = document.createElement('img');
	  player2img.src = img2;
	  var el2 = document.getElementById(board[p2]); 
	  el2.appendChild(player2img);
	  player2img.setAttribute('id', 'player2');
	}  

	

}

//Which player is playing. Sets new token on board and removes the old one.
function playTurn(result){

	//console.log ("Turn: ", player1, player2); 

	if (player1) {
		var el = document.getElementById(board[player1Pos]);
		console.log ("Element: " + el.innerHTML);
		var image = document.getElementById('player1');
		console.log ("SubElement: " + image);
		el.removeChild(image);
		console.log ("Element: " + el.innerHTML);

//Token stands on tile 30 even when he is "passing" it. The image of the token is being saved in local storage when he hits tile 30<
		player1Pos += result;

		if (player1Pos >= 30) {
			player1Pos = 30;
			var img = localStorage.getItem('Img1');
			localStorage.setItem('winner', '' + img);
		}

	} else {
		var el = document.getElementById(board[player2Pos]);
		console.log ("Element: " + el.innerHTML);
		var image = document.getElementById('player2');
		console.log ("SubElement: " + image);
		el.removeChild(image);
		console.log ("Element: " + el.innerHTML);

//Token stands on tile 30 even when he is "passing" it. The image of the token is being saved in local storage when he hits tile 30<
		player2Pos += result;

		if (player2Pos >= 30) {
			player2Pos = 30;
			var img2 = localStorage.getItem('Img2');
			localStorage.setItem('winner', '' + img2);
		}
	}



//Here are the traps 
	setPlayers(player1Pos, player2Pos);	

	if (player1Pos == 12 || player2Pos == 12) {
		setTimeout (trap1, 1000);
			
	} 
	else if  (player1Pos == 17 || player2Pos == 17) {
		setTimeout (trap2, 1000);
		}
	else if  (player1Pos == 23 || player2Pos == 23) {
		setTimeout (trap3, 1000);
		}
	else if  (player1Pos == 28 || player2Pos == 28) {
		setTimeout (trap4, 1000);
		}
	else if  (player1Pos == 4 || player2Pos == 4) {
		setTimeout (trap5, 1000);
		}
	else if  (player1Pos == 15 || player2Pos == 15) {
		setTimeout (forward1, 1000);
		}
	else if  (player1Pos == 5 || player2Pos == 5) {
		setTimeout (forward2, 500);
		}


	


//Switch player after one has landed on a trap	
	else {
		//Sends winner to finalpage when hitting or passing tile number 30
		if (player1Pos == 30 || player2Pos === 30) {
			setTimeout (finished, 1000)
		} else if (result == 6){
			//alert ("Samme spiller omigjen");
			document.getElementById("whichplayer").textContent = "It´s STILL your turn!";
			document.getElementById("whichplayer").style.color ="red";
		} else {
			switchPlayer();	
			document.getElementById("whichplayer").style.color ="white";
		}
	}
	
}




//------------------------Sends winner to finalpage-------------

function finished() {
	location.href = 'finalpage.html';
}



//-------------------------TRAPS--------------------------------
function trap1(){
	if (player1){
		alert('Oh no! A trap for player 1, you must go three steps back');
		var el = document.getElementById(board[player1Pos]);
		el.removeChild(document.getElementById('player1'));
		player1Pos -= 3;
	}

	else {
		alert('Oh no! A trap for player 2, you must go three steps back');
		var el = document.getElementById(board[player2Pos]);
		el.removeChild(document.getElementById('player2'));
		player2Pos -= 3;
	}
	
	setPlayers(player1Pos, player2Pos);
	switchPlayer();	
}




function trap2(){
	if (player1){
		alert('Oh no, Player 1! You landed on Castle Black, go seven steps back..');
		var el = document.getElementById(board[player1Pos]);
		el.removeChild(document.getElementById('player1'));
		player1Pos -= 7;
	}

	else {
		alert('Oh no, Player 2! You landed on Castle Black, go seven steps back..');
		var el = document.getElementById(board[player2Pos]);
		el.removeChild(document.getElementById('player2'));
		player2Pos -= 7;
	}
	
	setPlayers(player1Pos, player2Pos);
	switchPlayer();	
}




function trap3(){
	if (player1){
		alert('Oh no, a trap! Player 1, you must go two steps back');
		var el = document.getElementById(board[player1Pos]);
		el.removeChild(document.getElementById('player1'));
		player1Pos -= 2;
	}

	else {
		alert('Oh no, a trap! Player 2, you must go two steps back');
		var el = document.getElementById(board[player2Pos]);
		el.removeChild(document.getElementById('player2'));
		player2Pos -= 2;
	}
	
	setPlayers(player1Pos, player2Pos);
	switchPlayer();	
}






function trap4(){
	if (player1){
		alert('The night king got you, Player 1!! Go TEN steps back');
		var el = document.getElementById(board[player1Pos]);
		el.removeChild(document.getElementById('player1'));
		player1Pos -= 10;
	}

	else {
		alert('The night king got you, Player 2!! Go TEN steps back');
		var el = document.getElementById(board[player2Pos]);
		el.removeChild(document.getElementById('player2'));
		player2Pos -= 10;
	}
	
	setPlayers(player1Pos, player2Pos);
	switchPlayer();	
}



function trap5(){
	if (player1){
		alert('The dragon got you, Player 1!! Go back to start');
		var el = document.getElementById(board[player1Pos]);
		el.removeChild(document.getElementById('player1'));
		player1Pos -= 3;
	}

	else {
		alert('The dragon got you, Player 2!! Go back to start');
		var el = document.getElementById(board[player2Pos]);
		el.removeChild(document.getElementById('player2'));
		player2Pos -= 3;
	}
	
	setPlayers(player1Pos, player2Pos);
	switchPlayer();	
}




//------------------------Ladder up------------------------ 

function forward1(){
	if (player1){
		alert('Player1, you met Jorah! He will take you three steps forward');
		var el = document.getElementById(board[player1Pos]);
		el.removeChild(document.getElementById('player1'));
		player1Pos += 3;
	}

	else {
		alert('Player2, you met Jorah! He will take you three steps forward');
		var el = document.getElementById(board[player2Pos]);
		el.removeChild(document.getElementById('player2'));
		player2Pos += 3;
	}

	setPlayers(player1Pos, player2Pos);
	switchPlayer();	
}




function forward2(){
	if (player1){
		alert('Player1, you met Daenerys! She will take you three steps forward');
		var el = document.getElementById(board[player1Pos]);
		el.removeChild(document.getElementById('player1'));
		player1Pos += 3;
	}

	else {
		alert('Player2, you met Daenerys! She will take you three steps forward');
		var el = document.getElementById(board[player2Pos]);
		el.removeChild(document.getElementById('player2'));
		player2Pos += 3;
	}

	setPlayers(player1Pos, player2Pos);
	switchPlayer();	
}



//-----------------------Decides who´s turn it is----------------------


function switchPlayer () {
		if (player1) {
	  		player1 = false; 
	  		player2 = true;
	  		document.getElementById("whichplayer").textContent = "Player 2, it´s your turn!";
	  		document.getElementById("whichplayer").style.color ="white";

	  	} else {
	  		player1 = true; 
	  		player2 = false;
	  		document.getElementById("whichplayer").textContent = "Player 1, it´s your turn!";
	  		document.getElementById("whichplayer").style.color ="white";

  		}	
}




//------------------The dice-----------------------------------------

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}



//Prints dice roll to the page
function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('game__button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
  playTurn (result);

};



//-----------------------Shows winner at the final page-------------------------

  function showWinner() { 
  	var winnerImg = localStorage.getItem('winner');
  	var winnerImage = document.createElement('img');
  	winnerImage.src = winnerImg;
  	winnerImage.setAttribute('id', 'showWinner');
  	winner.appendChild(winnerImage);
   }


