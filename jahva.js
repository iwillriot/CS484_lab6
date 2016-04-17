function run(){
	var quantity = document.getElementById("quantity").value;
	var ppunit = document.getElementById("ppunit").value;
	
	ppunit = parseFloat(ppunit);
	var subtotal = quantity * ppunit;
	window.alert(subtotal);
	
	
}