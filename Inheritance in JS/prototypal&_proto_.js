// __proto__ is property of every variable
// prototype is property on constructor function that contains the all the stuff that we will be inherited by its instance

// same thins acces from different ends

// "I feel like cristoper nolen wrote this shit or somthing" -: color code

// consnt me = {}; == const me = new Object();

const dude = {};
console.log(dude);  //inharit from __proto__ inharit from Object

dude.name = "Vidura";
dude.age = 22;

console.log(dude);

const myBrothers = ["Vidura", "Dhruv", "Siddharth"];
console.log(myBrothers);