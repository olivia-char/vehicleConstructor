function vehicleConstructor(name, wheels, passengers, noise, speed){
	if (!(this instanceof vehicleConstructor)){
    return new vehicleConstructor(name,wheels,passengerNumber, noise, speed);
  	}
  	var characters = "0123456789ABCDEFGHIJKLMONPQRSTUVWXYZ"
	var distance_traveled = 0;
	var self = this;
	function updateDistanceTraveled(){
		distance_traveled += self.speed;

	}

	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed;
	this.vin = createVin();

	function createVin(){
		var vin = "";
		for(var i = 0; i < 17; i++){
			vin += characters[Math.floor(Math.random()*35)];
		}
		return vin;
	}

	this.makeNoise = function(noise){
		var noise = noise;
		console.log("The " + this.name + " goes " + noise);
	};
	this.move = function(){
		this.makeNoise(noise);
		updateDistanceTraveled();
		return this;
	} 
	this.checkMiles = function(){
		console.log("You have traveled " + distance_traveled + " miles");
		return this;
	}

} 

var car = new vehicleConstructor("buick", 4, 2, "honk honk", 35);
car.move().move();
car.checkMiles();
console.log(car.vin);
// console.log(car.speed);


var bike = new vehicleConstructor("schwin", 2, 1, "ring ring", 10);
bike.move();
bike.checkMiles();

// var sedan = vehicleConstructor("mercedes", 4, 3, "VROOM");

// var bus = vehicleConstructor("school bus", 4, 3, "beep beep");

// bus.addPassengers = function addPassengers(num){
// 		bus.passengers += num;
// 	}	
// bus.addPassengers(4);
// console.log(bus.passengers);

