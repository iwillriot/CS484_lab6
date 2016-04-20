//****************
//William J. Diaz
//Lab 6 - Part 1
//****************

//function to initiate the listener when the form is submitted
function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
}
//load it on when the page loads
window.onload = init;

//this function calculates the total
function calculate(){
	'use strict';
	
	//get variables from the form in index.html
	var quantity = document.getElementById("quantity").value;
	var ppunit = document.getElementById("ppunit").value; //this variable is the PRICE varible. 
	var tax = document.getElementById("tax").value;
	var discount = document.getElementById("discount").value;
	
	//convert the text variables to float for use in calculations
	ppunit = parseFloat(ppunit); //parsing the price
	tax = parseFloat(tax)/100.0;
	discount = parseFloat(discount)/100.0;
	
	//calculate the subtotal
	var subtotal = quantity * ppunit;
	
	//Add the tax to the final total
	var finalTotal = subtotal + (subtotal * tax);
	
	//Subtract the tax from the final total	
	finalTotal = finalTotal - (finalTotal * discount);
	
	//fix the final total to 2 decimal places
	finalTotal = finalTotal.toFixed(2);
	
	//place the finalTotal as the value of the input tag with the id of total
	document.getElementById('total').value = finalTotal;
	return false;
}