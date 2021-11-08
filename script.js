// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

//const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function () {

    this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json) {
           const div = document.getElementById("missionTarget");
           const missionDestination = Math.round(Math.random()*5);
           div.innerHTML = `
           <h2>Mission Destination</h2>
           <ol>
              <li>Name: ${json[missionDestination].name}</li>
              <li>Diameter: ${json[missionDestination].diameter}</li>
              <li>Star: ${json[missionDestination].star}</li>
              <li>Distance from Earth: ${json[missionDestination].distance}</li>
              <li>Number of Moons: ${json[missionDestination].moons}</li>
           </ol>
           <img src="${json[missionDestination].image}">
           `;
        });
    });

    //when submit button is hit, execute the code below
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {

        //My DOM Elements
        let pilotName = document.querySelector("input[name = pilotName]");
        let copilotName = document.querySelector("input[name = copilotName]");
        let fuelLevel = document.querySelector("input[name = fuelLevel]");
        let cargoMass = document.querySelector("input[name = cargoMass]");


        let faultyItems = document.getElementById('faultyItems');
        let fuelStatus = document.getElementById('fuelStatus');
        let launchStatus = document.getElementById('launchStatus');
        let pilotStatus = document.getElementById('pilotStatus');
        let copilotStatus = document.getElementById('copilotStatus');

        //Checking to make sure the form elements have values
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        }

        // Making sure the pilot name and co-pilot name input values are strings

        else if (validateInput(pilotName.value) === "Is a Number" || validateInput(copilotName.value) === "Is a Number" || validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoMass.value) === "Not a Number") {
            alert("Pilot & Co-pilot need to be human names, not integers! and Fuel level & cargo mass need to be integers!");
           event.preventDefault();

        }
        else {
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready`;
            event.preventDefault();


            if (fuelLevel.value < 10000) { // Is the fuelLevel value below 10,000?
                faultyItems.style.visibility = 'visible';
                fuelStatus.innerHTML = `Fuel level too low for the journey!`;
                launchStatus.innerHTML = `Shuttle not ready for launch`;
                launchStatus.style.color = 'red';
            }
            else {
                faultyItems.style.visibility = 'visible';
                fuelStatus.innerHTML = `Fuel level high enough for launch`;
            }

            if (cargoMass.value > 10000) {
                faultyItems.style.visibility = 'visible';
                cargoStatus.innerHTML = `there is too much mass for the shuttle to take off.`
                launchStatus.innerHTML = "Shuttle not ready for launch";
                launchStatus.style.color = 'red';
            }
            else {
                faultyItems.style.visibility = 'visible';
                cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            }
            // If the fuelLevel is >= 10,000 AND cargoMass <= 10,000, execute this code 
            if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
                faultyItems.style.visibility = 'visible';
                launchStatus.innerHTML = `Shuttle is ready for launch`;
                launchStatus.style.color = 'green';
                fuelStatus.innerHTML = `Fuel level high enough for launch`;
                cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            }
        }


   });


    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse = myFetch();
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })

   
});