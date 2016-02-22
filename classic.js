'use strict';

(function(){

	//Constructor
	function Animal(){
		this.eyes = 2;
		this.mouth = 1;
		this.run = function(name){
			console.log(name+ ' is running');
		}
	}


	//Extend parent object
	Animal.prototype.sleep = true;
	

	//Instantiate the object
	var cat = new Animal();
	var cat2 = new Animal();

	//Extend objects
	cat.legs = 4;
	cat.name = "Milo";
	cat.sleep = false;

	cat2.legs = 2;
	cat2.name = "Peluza";


	//Use the new cat objects
	cat.run(cat.name);
	console.log(cat.name + ' is sleeping: ' + cat.sleep);
	console.log(cat.name + '\'s legs: ' + cat.legs);
	console.log(cat.name + '\'s eyes: ' + cat.eyes);

	cat2.run(cat2.name);
	console.log(cat2.name + ' is sleeping: ' + cat.sleep);
	console.log(cat2.name + '\'s legs: ' + cat.legs);
	console.log(cat2.name + '\'s eyes: ' + cat.eyes);

})();