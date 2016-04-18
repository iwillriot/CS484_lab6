function run(){
	'use strict';
	//get variables from the form in index.html
	var quantity = document.getElementById("quantity").value;
	var ppunit = document.getElementById("ppunit").value;
	var tax = document.getElementById("tax").value;
	var discount = document.getElementById("discount").value;
	
	//convert the text variables to float for use in calculations
	ppunit = parseFloat(ppunit);
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
	
	document.getElementById('total').value = finalTotal;
}

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
}