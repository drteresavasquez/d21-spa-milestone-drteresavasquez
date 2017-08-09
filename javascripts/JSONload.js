console.log("JSONload, Yo!");
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

}(Carlot || {});