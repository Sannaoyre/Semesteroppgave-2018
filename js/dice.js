
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

//console.log ('Hallo?'); 


//Get Items out of local storage for each user and populate player 1 and player 2 with data.
function setPlayers(p1=1, p2=1) {

  console.log (p1, p2, player1, player2); 
  // Slette de forrige token

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


function playTurn(result){

	console.log ("Turn: ", player1, player2); 

	if (player1) {
		var el = document.getElementById(board[player1Pos]);
		console.log ("Element: " + el.innerHTML);
		var image = document.getElementById('player1');
		console.log ("SubElement: " + image);
		el.removeChild(image);
		console.log ("Element: " + el.innerHTML);

		player1Pos += result;
	} else {
		var el = document.getElementById(board[player2Pos]);
		console.log ("Element: " + el.innerHTML);
		var image = document.getElementById('player2');
		console.log ("SubElement: " + image);
		el.removeChild(image);
		console.log ("Element: " + el.innerHTML);


		player2Pos += result;
	}



	setPlayers(player1Pos, player2Pos);
	

}




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
	console.log ("player1: ", player1, "player2: ", player2);
  var result = dice.roll();
  printNumber(result);
  playTurn (result);

  if (player1) {
  	player1 = false; 
  	player2 = true;
  } else {
  	player1 = true; 
  	player2 = false;
	
  }

  // test to see which global variable is true. FIGURE WHICH PLAYERS TURN IT IS IF ELSE STATEMENT.
  // then you will need to get the number on the dice. YOU HAVE DONE THIS ALREADY
  // add the number on the dice to the tile which the token is on. TODO
  // Move the the token to that tile: TODO
  // Remove token from tile which it is on and move it to ID that corresponds to the number rolled on the dice. TODO
};

//document.getElementById('boardField1').innerHTML = "1";
//playerTile = 1;
//numberOnDice = 5;

//newTile = document.getElementById("boardField1"+ (playerTile+numberOnDice)).innerHTML = '<img src=characters/"' + aray + '.png />';


