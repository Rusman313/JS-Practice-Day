  
function sandwichCalculator(slicesOfBread, slicesOfCheese){
	var sandwiches = Math.floor(slicesOfBread / 2);

	if ((slicesOfBread > 1) && (slicesOfCheese > 0) && (slicesOfCheese < sandwiches)) {
		sandwiches = slicesOfCheese;
		console.log(sandwiches);
		return sandwiches;
	} else if ((slicesOfCheese >= sandwiches) && (slicesOfBread > 1)) {
		console.log(sandwiches);
		return sandwiches;
	} else if ((slicesOfCheese = 0) || (slicesOfBread < 2)) {
		console.log("Not enough cheese to make a sandwich.");
		return 0;
	}

}
sandwichCalculator(20,5);
sandwichCalculator(100,50);


//return ends the function. important to remember
