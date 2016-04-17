function run(){
	var quantity = document.getElementById("quantity").value;
	var ppunit = document.getElementById("ppunit").value;
	var tax = document.getElementById("tax").value;
	var discount = document.getElementById("discount").value;
	
	
	ppunit = parseFloat(ppunit);
	tax = parseFloat(tax)/100.0;
	discount = parseFloat(discount)/100.0;
	
	window.alert(tax);
	window.alert(discount);
	
	var subtotal = quantity * ppunit;
	
	
	var finalTotal = subtotal + (subtotal * tax);
	
	finalTotal = finalTotal - (finalTotal * discount);
	finalTotal = finalTotal.toFixed(2);
	
	window.alert(finalTotal);
	
}