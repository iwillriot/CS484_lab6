function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = toma;
}
window.onload = init;

function toma() {
	'use strict';
	var str = document.getElementById("comment").value;
	str = str.split("");
	var max = document.getElementById("count").value;
	
	//parse it to int
	max = parseInt(max);
	
	//build string to display
	var s = "";
	
	//create variable for loop
	var i;
	
	//loop and concatenate the string until the max given
	for(i=0;i<max;i++){
		s = s + str[i];
	}
	document.getElementById("out").value = s;
	return false;
}
