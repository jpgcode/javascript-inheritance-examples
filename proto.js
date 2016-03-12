'use strict';

(function(){

	//Parent object
	var Animal = {
		eyes: 2,
		mouth: 1,
		run: function(name){
			console.log(name+ ' is running');
		}
	}


	//Extend parent object
	Animal.sleep = true;

	//Cat will inherits the attributes and methods from animal
	var cat = Object.create(Animal);
	var chicken = Object.create(Animal);

	//Extend objects
	cat.legs = 4;
	cat.name = "Milo";
	cat.sleep = false;

	chicken.legs = 2;
	chicken.name = "Peluza";


	//Use the new cat objects
	cat.run(cat.name); //Milo is running
	console.log(cat.name + ' is sleeping: ' + cat.sleep); //Milo is sleeping: false
	console.log(cat.name + '\'s legs: ' + cat.legs); //Milo's legs: 4
	console.log(cat.name + '\'s eyes: ' + cat.eyes); //Milo's eyes: 2

	chicken.run(chicken.name); //Peluza is running
	console.log(chicken.name + ' is sleeping: ' + chicken.sleep); //Peluza is sleeping: true
	console.log(chicken.name + '\'s legs: ' + chicken.legs); //Peluza's legs: 2
	console.log(chicken.name + '\'s eyes: ' + chicken.eyes); //Peluza's eyes: 2
})();