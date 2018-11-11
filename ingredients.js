var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let counter = 0;
while (counter < ingredients.length){
    console.log(ingredients[counter]);
    counter++;
}

// Write a for loop that prints out the contents of ingredients:
for (let index = 0; index < ingredients.length; index++) {
    console.log(ingredients[index]);
    
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let index = ingredients.length-1; index >= 0; index--) {
    console.log(ingredients[index]);
    
}