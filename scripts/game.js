// java script for game 
// by Alessandro guaresti
// & Alexis Greene
 
 var dmg = 5;
 var def = 5;

function Begin() {
	window.location.assign('/pages/testbattle.html');
}

function Kni() {
	document.getElementById('Start').disabled = false;
	var dmg = dmg * 2;
	var def = def * 3;
}

function Mag() {
	document.getElementById('Start').disabled = false;
	var dmg = dmg * 3;
	var def = def * 1.5;
}

function Arc() {
	document.getElementById('Start').disabled = false;
	var dmg = dmg * 2;
	var def = def * 1;
}