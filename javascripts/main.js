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

	function DataFailed(event){
	console.log("oops the data failed");
	};

	Carlot.showCarData = (cars, item) => {
	let carsDiv = document.getElementById("cars");
	// console.log("carListings", carListings);
	cars = Object.keys(carListings.cars);
	
		cars.forEach((id, index) => {
		
		// console.log(carListings.cars[id].make);
		carsDiv.innerHTML += `<div id="carId" class="myCard col-12 col-sm-3">
		<div class="card-header"><h4>${carListings.cars[id].year} ${carListings.cars[id].make} ${carListings.cars[id].model} </h4></div>
			<img class="card-img-top" src="${carListings.cars[id].image}" alt="Card image cap">
				<div class="card-block">
					<p id="description--${index}" class="card-text">${carListings.cars[id].description}</p>
					<p>Price: $${carListings.cars[id].price}</p>
					  <a href="#" class="btn btn-primary">Learn More</a>
				</div>
			</div>
		`
		});

	};
	
	var thisCard = document.getElementById(`carId`);
	var cardId = "";

	for (var i = 0; i < thisCard.length; i++){
		var thisCard = document.getElementsByClassName("myCard");
		let textInput = document.getElementById("textInput");
		thisCard.item(i).addEventListener("click", function(event){
			cardId = event.target.id;
			console.log(event);
			// let getWhole = document.getElementById(cardId);
			// getWhole.classList.toggle("border");

			textInput.focus();
		});
	};



}(Carlot || {});