function vehicleConstructor(name, wheels, passengers, noise){
	vehicle = {}
	
	vehicle.name = name;
	vehicle.wheels = wheels;
	vehicle.passengers = passengers;


	function makeNoise(noise){
		console.log("The " + vehicle.name + " goes " + noise);
	}
	makeNoise(noise);

	return vehicle;
} 

// var car = vehicleConstructor("buick", 4, 2, "honk honk");
// console.log(car);

// var bike = vehicleConstructor("schwin", 2, 1, "ring ring");
// console.log(bike);

// var sedan = vehicleConstructor("mercedes", 4, 3, "VROOM");

var bus = vehicleConstructor("school bus", 4, 3, "beep beep");

bus.addPassengers = function addPassengers(num){
		bus.passengers += num;
	}	
bus.addPassengers(4);
console.log(bus.passengers);