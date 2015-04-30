var pastMoves = [];

function player(id) {
	var i = id;
	var checker = true;
	do {
		var comChoice = Math.floor(Math.random() * 9) + 1;
		if ((i == comChoice) || (document.getElementById("slot" + comChoice).innerHTML != '')) {
			console.log("Invalid")
		}
		else {
			document.getElementById("slot" + id).innerHTML = "<img src='X.png' alt='X' width='200px' height='200px'>";
			computer(comChoice);
			checker = false;
		}
	} while (checker == true);
	var moveVal = numToVal(i);
	pastMoves.push(moveVal);
	calculation(pastMoves);


}

function computer(comNum) {

	switch (comNum) {
		case 1:
			document.getElementById("slot" + comNum).innerHTML = "<img src='O.png' alt='O' width='200px' height='200px'>";
			break;
		case 2:
			document.getElementById("slot" + comNum).innerHTML = "<img src='O.png' alt='O' width='200px' height='200px'>";
			break;
		case 3:
			document.getElementById("slot" + comNum).innerHTML = "<img src='O.png' alt='O' width='200px' height='200px'>";
			break;
		case 4:
			document.getElementById("slot" + comNum).innerHTML = "<img src='O.png' alt='O' width='200px' height='200px'>";
			break;
		case 5:
			document.getElementById("slot" + comNum).innerHTML = "<img src='O.png' alt='O' width='200px' height='200px'>";
			break;
		case 6:
			document.getElementById("slot" + comNum).innerHTML = "<img src='O.png' alt='O' width='200px' height='200px'>";
			break;
		case 7:
			document.getElementById("slot" + comNum).innerHTML = "<img src='O.png' alt='O' width='200px' height='200px'>";
			break;
		case 8:
			document.getElementById("slot" + comNum).innerHTML = "<img src='O.png' alt='O' width='200px' height='200px'>";
			break;
		case 9:
			document.getElementById("slot" + comNum).innerHTML = "<img src='O.png' alt='O' width='200px' height='200px'>";
			break;
		default:
		break;
	}
}

function numToVal(num) {
	var val = num;
	switch (val) {
		case 1:
			val = 1;
			break;
		case 2:
			val = 2;
			break;
		case 3:
			val = 4;
			break;
		case 4:
			val = 8;
			break;
		case 5:
			val = 16;
			break;
		case 6:
			val = 32;
			break;
		case 7:
			val = 64;
			break;
		case 8:
			val = 128;
			break;
		case 9:
			val = 256;
			break;
		default:
		break;
	}
	return val;
}

function calculation (array) {
	var result = 0;
	for (var i = 0; i < array.length; i++) {
		result += array[i];
	}
	if (result == 7 || result == 56 || result == 448 || result == 292 || result == 146 || result == 73 || result == 84 || result == 273) {
		alert("You win!")
	}



}