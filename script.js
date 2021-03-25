
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         let target = document.getElementById("missionTarget");
            target.innerHTML =
               `<h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[0].name}</li>
                  <li>Diameter: ${json[0].diameter}</li>
                  <li>Star: ${json[0].star}</li>
                  <li>Distance from Earth: ${json[0].distance}</li>
                  <li>Number of Moons: ${json[0].moons}</li>
               </ol>
               <img src="${json[0].image}">`;
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      // form input:
      let pilotNameInput = document.getElementById("pilotName");
      let copilotNameInput = document.getElementById("copilotName");
      let fuelLevelInput = document.getElementById("fuelLevel");
      let cargoMassInput = document.getElementById("cargoMass");
      // status updates:
      let faults = document.getElementById("faultyItems");
      let launchStatusUpdate = document.getElementById("launchStatus");
      let pilotStatusUpdate = document.getElementById("pilotStatus");
      let copilotStatusUpdate = document.getElementById("copilotStatus");
      let fuelStatusUpdate = document.getElementById("fuelStatus");
      let cargoStatusUpdate = document.getElementById("cargoStatus");
      // input validation:
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required.");
      } else if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Please eneter valid information for each field.");
      }
      // give shuttle status:
      if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
         launchStatusUpdate.style.color = "red";
         launchStatusUpdate.innerHTML = "Shuttle not ready for launch";
         faults.style.visibility = 'visible'; 
         pilotStatusUpdate.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatusUpdate.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         fuelStatusUpdate.innerHTML = "Fuel level is too low for launch";
         cargoStatusUpdate.innerHTML = "Cargo mass too high for launch";
      } else if (fuelLevelInput.value < 10000 && cargoMassInput.value < 10000) {
         launchStatusUpdate.style.color = "red";
         launchStatusUpdate.innerHTML = "Shuttle not ready for launch";
         faults.style.visibility = 'visible';
         pilotStatusUpdate.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatusUpdate.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         fuelStatusUpdate.innerHTML = "Fuel level is too low for launch";
         cargoStatusUpdate.innerHTML = "Cargo mass is low enough for launch";
      } else if (fuelLevelInput.value > 10000 && cargoMassInput.value > 10000) {
         launchStatusUpdate.style.color = "red";
         launchStatusUpdate.innerHTML = "Shuttle not ready for launch";
         faults.style.visibility = 'visible'; 
         pilotStatusUpdate.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatusUpdate.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         fuelStatusUpdate.innerHTML = "Fuel level is high enough for launch";
         cargoStatusUpdate.innerHTML = "Cargo mass too high for launch";
      } else {
         launchStatusUpdate.style.color = "green";
         launchStatusUpdate.innerHTML = "Shuttle is ready for launch";
         faults.style.visibility = 'hidden'; 
      }
   });
});
