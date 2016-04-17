function run(){
	//get variables form index.html
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