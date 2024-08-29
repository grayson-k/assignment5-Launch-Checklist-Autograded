// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `
 }
 
 function validateInput(testInput) {
    console.log(testInput.length);
    console.log(typeof(testInput));
    if (testInput.lengh > 0) {
        if (typeof(testInput) === number) {
            return "Is a Number";
        } else if (typeof(testInput) === string) {
            return "Not a Number";
        }
    } else {
        return "Empty";
    }
 }
 
 function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("pilotStatus").innerHTML += ` ${pilot}`;
    document.getElementById("copilotStatus").innerHTML += ` ${copilot}`;

    function changeHeaderRed() {
        let launchStatusDiv = document.getElementById("launchStatus");
        launchStatusDiv.innerHTML = `Shuttle not ready for launch`;
        launchStatusDiv.style.color = "red";
    }

    if (fuelLevel < 10000) {
        document.getElementById("fuelStatus").innerHTML = `Not enough fuel!`;
        changeHeaderRed();
    }

    if (cargoLevel > 10000) {
        document.getElementById("cargoStatus").innerHTML = `To much mass for liftoff!`;
        changeHeaderRed();
    }

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        let launchStatusDiv = document.getElementById("launchStatus");
        launchStatusDiv.innerHTML = `Shuttle is ready for launch`;
        launchStatusDiv.style.color = "green";
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
        });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(planets.length * Math.random());
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;