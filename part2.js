//****************
//William J. Diaz
//Lab 6 - Part 2
//****************

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = handleString;
}
window.onload = init;

function handleString() {
	'use strict';
	
	//take in text as a string using the id of comment
	var str = document.getElementById("comment").value;
	
	//split the string by character
	str = str.split("");
	
	//set the max allowed characters from the value obtained from id of count
	var max = document.getElementById("count").value;
	
	//parse it to int
	max = parseInt(max);
	
	//build string to display
	var s = "";
	
	//create variable for loop
	var i;
	
	//loop and concatenate the string until the max given
	for(i=0;i<max;i++){
		
		//build the string to output. one character at at time.
		s = s + str[i];
	
	}
	//set the string to the value of the input tag with id out.
	document.getElementById("out").value = s;
	
	return false;
}