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
	
	//get the last index of the string before 50 characters
	var last = str.lastIndexOf(" ");
	
	//slice the string from the start to the last index 
	var out = str.slice(0,last);
	
	//set the string to the value of the input tag with id out.
	document.getElementById("count").value = last;
	document.getElementById("out").value = out;
	
	return false;
}