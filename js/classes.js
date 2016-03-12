'use strict';

class Animal {

	constructor(name){
		this.eyes = 2;
		this.mouth = 1;
		this.sleep = true;
		this.name = name;
	}

	run(){
		console.log(this.name+ ' is running');
	}

}

class Cat extends Animal {
	constructor(name){
		super(name);
		this.legs = 4;
		this.name = "Milo";
		this.sleep = true;
	}
}

class Chicken extends Animal {
	constructor(name){
		super(name);
		this.legs = 2;
		this.name = "Peluza";
		this.sleep = true;
	}
}

//Intantiate classes
const cat = new Cat();
const chicken = new chicken();


//Use the new created objects
cat.run(cat.name); //Milo is running
console.log(cat.name + ' is sleeping: ' + cat.sleep); //Milo is sleeping: false
console.log(cat.name + '\'s legs: ' + cat.legs); //Milo's legs: 4
console.log(cat.name + '\'s eyes: ' + cat.eyes); //Milo's eyes: 2

chicken.run(chicken.name); //Peluza is running
console.log(chicken.name + ' is sleeping: ' + chicken.sleep); //Peluza is sleeping: true
console.log(chicken.name + '\'s legs: ' + chicken.legs); //Peluza's legs: 2
console.log(chicken.name + '\'s eyes: ' + chicken.eyes); //Peluza's eyes: 2