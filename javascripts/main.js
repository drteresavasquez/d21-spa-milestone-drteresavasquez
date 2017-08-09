console.log("main.js, YO!");

{


	Carlot.showCarData = (cars, item) => {
	let carsDiv = document.getElementById("cars");
	cars = Object.keys(carListings.cars);
		// console.log("thisCard", thisCard);

	cars.forEach((id, index) => {
		carsDiv.innerHTML += `<div class="myCard border col-12 col-sm-3" id="${index}">
		<div class="card-header"><h4>${carListings.cars[id].year} ${carListings.cars[id].make} ${carListings.cars[id].model} </h4></div>
			<img class="card-img-top" src="${carListings.cars[id].image}" alt="Card image cap">
				<div class="card-block">
					<p id="description--${index}" class="card-text">${carListings.cars[id].description}</p>
					<p>Price: $${carListings.cars[id].price}</p>
					  <a href="#" class="btn btn-primary">Learn More</a>
				</div>
			</div>`

				});	

	carContainer = document.getElementsByClassName("myCard");
	test(carContainer);

	};

	var carId = "";
	let textInput = document.getElementById("textInput");


	function test(input){
		for (var i = 0 ; i < input.length; i++){
		input[i].addEventListener("click", () => {
			textInput.value = "";
			carId = event.currentTarget.id;
			console.log("carId", carId);
			let getWhole = document.getElementById(carId);
			getWhole.classList.toggle("border");
			textInput.focus();
			});
		};

		textInput.addEventListener("keyup", () => {
		document.getElementById(`description--${carId}`).innerText = textInput.value;

		if (event.keyCode == 13) {
		textInput.value = "";
	}
		
	});
};

	


		// console.log("carContainer", carContainer);


	// for (var i = 0; i < carContainer.length; i++) {

 //  	carContainer[i].addEventListener("click", function (event) {
 //  			carId = event.currentTarget.id;
 //  			console.log("carId", carId);
 //  //   	let getWhole = document.getElementById(carId);
	// 	// getWhole.classList.toggle("border");
	// 	// textInput.focus();
 //  	})

	// for (var i = 0; i < thisCard.length; i++){
	// 		console.log("thisCard", thisCard[i]);

					// thisCard.addEventListener("click", () => {
					// let textInput = document.getElementById("textInput");
					// cardId = event.target.id;
					// let getWhole = document.getElementById(cardId);
					// getWhole.classList.toggle("border");

					// textInput.focus();

					// });
				// };



}(Carlot || {});