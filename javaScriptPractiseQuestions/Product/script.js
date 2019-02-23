var products = "apple blackberry banana tomato broccoli pumpkin";
userInupt = prompt('Type "1" to check if a product is available:\nType "2" to list all the products:\nType anything to quit:');
if (userInupt === '2'){
	document.write("<p class = 'info'>Product available in the store: " + products + "</p>");
}else if(userInupt === '1'){
	var product = prompt('Enter the name of the product to see if it is available');
	if (products.indexOf(product) === -1){
		document.write ("<p class = 'error'>Sorry the Product is not available.</p>");
	}else{
		document.write ("<p class = 'success'>The Product is available</p>");
	}
}else{
	document.write("<p class = 'info'>Refresh the page if you want to look for a product or a list of product</p>")
}