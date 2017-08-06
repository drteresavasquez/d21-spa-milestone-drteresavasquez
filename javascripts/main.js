console.log("main.js, YO!");

{
	let loadCars = new XMLHttpRequest();
	loadCars.open("GET", "inventory.json");
	loadCars.send();

	loadCars.addEventListener("load", DataComplete);
	loadCars.addEventListener("error", DataFailed);

var carListings = {};

 function DataComplete(event){
	if (event.target.status === 200) {
	console.log("The data has loaded");
	carListings = JSON.parse(event.target.responseText);
	Carlot.showCarData(carListings);
	}else {
		console.log("Check the spelling of your file");
	}
};

	Carlot.showCarData = (cars, item) => {
	let carsDiv = document.getElementById("cars");
	// console.log("carListings", carListings);
	cars = Object.keys(carListings.cars);
	
		cars.forEach(function(id){
		// console.log(carListings.cars[id].make);
		carsDiv.innerHTML += `<div class="card col-12 col-sm-4">
		<div class="card-header"><h4>${carListings.cars[id].year} ${carListings.cars[id].make} ${carListings.cars[id].model} </h4></div>
			<img class="card-img-top" src="${carListings.cars[id].image}" alt="Card image cap">
				<div class="card-block">
					<p class="card-text">${carListings.cars[id].description}</p>
					<p>Price: $${carListings.cars[id].price}</p>
					  <a href="#" class="btn btn-primary">Learn More</a>
				</div>
			</div>
		`
	});

};

function DataFailed(event){
	console.log("oops the data failed");
};


}(Carlot || {});