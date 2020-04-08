/*Exercise - Capitalise every element
1. Write a short function to capitalise every element of the array.
2. You must use the Array#map function and the String#uppercase function.*/

var shoppingList = ['toilet paper', 'paper towels', 'milk', 'eggs'];

var newList = shoppingList.map(capital)
function capital(item){
    return item.toUpperCase();
};
   /* for(var i=0; i< shoppingList.length; i++) {
        shoppingList[i] = shoppingList[i].toUpperCase();
  
  console.log(shoppingList); 
 };*/

 console.log(newList);
