// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(name, diameter, star, distance, moons, imageUrl) {
    const div = document.getElementById("missionTarget");
           div.innerHTML = `
           <h2>Mission Destination</h2>
           <ol>
              <li>Name: ${name}</li>
              <li>Diameter: ${diameter}</li>
              <li>Star: ${star}</li>
              <li>Distance from Earth: ${distance}</li>
              <li>Number of Moons: ${moons}</li>
           </ol>
           <img src="${imageUrl}">
           `;
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li> 
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {


    if(isNaN(testInput) === false ){
        return "Is a Number"
    }
    else if(isNaN(testInput) === true){
        return "Not a Number"
    }
    else if(testInput === "")
    {
        return "Empty"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // let form = document.getElementById("testForm");
    // form.addEventListener("submit", function(event){
    //     let pilotName = document.querySelector("input[name = pilotName]");
    //     let copilotName = document.querySelector("input[name = copilotName]");
    //     let fuelLevel = document.querySelector("input[name = fuelLevel]");
    //     let cargoMass = document.querySelector("input[name = cargoMass]")

    //     if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass === ""){
    //         alert("All fields are required!");
    //         event.preventDefault();
    //     }

    // });
    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    //const missionDestination = Math.round(Math.random()*5)
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
