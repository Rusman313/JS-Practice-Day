/* Exercise - Pizza
1. Create an array of pizza toppings
2. Write a function that we can call
3. Function should return a string that describes the pizza, example “A delicious
pizza with Cheese and Pepperoni and Garlic and Peppers.”*/

/* 1*/ pizza = ['mushroom', 'onion', 'beef'];
console.log(pizza);

function thatWeCanCall(){
"A delicious pizza with " + (pizza.join(", "));
var pizzaSentence = "";
if (pizza.length === 1) {
    pizzaSentence = [0];
} else if (pizza.length === 2){
    pizzaSentence = pizza.join('and');
} else if (pizza.length > 2){
    pizzaSentence = "A delicious pizza with " + pizza.slice(0,-1).join(', ') + ", and " + pizza.slice(-1) + ".";
}
    return pizzaSentence;

};

thatWeCanCall();

console.log(thatWeCanCall());
