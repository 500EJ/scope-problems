/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

const smoothieMachine = (...baseIngredients) => {
  let str = "I'm having a smoothie with ";
  for (let i = 0; i < baseIngredients.length; i++) {
    if (str.endsWith(" ")) {
      str += baseIngredients[i];
    } else {
      str += ` and ${baseIngredients[i]}`;
    }
  }
  return (...ingredients) => {
    for (let i = 0; i < ingredients.length; i++) {
      if (str.endsWith(" ")) {
        str += ingredients[i];
      } else {
        str += ` and ${ingredients[i]}`;
      }
    }
    return str;
  };
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
