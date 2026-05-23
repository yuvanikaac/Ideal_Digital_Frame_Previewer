const frameContainer = document.getElementById("frameContainer");

// GET USER SELECTIONS
const orientation = localStorage.getItem("orientation");

const size = localStorage.getItem("photoSize");

const thickness = localStorage.getItem("frameThickness");
console.log("Orientation:", orientation);
console.log("Size:", size);
console.log("Thickness:", thickness);

// LOAD JSON
fetch("../frames.json")

.then(response => response.json())

.then(data => {

    // GET MATCHING FRAMES
    const matchingFrames = data[orientation][size][thickness];

    // IF NO FRAMES
    if (!matchingFrames || matchingFrames.length === 0) {

        frameContainer.innerHTML = `
        
            <h2>No Frames Available</h2>
        
        `;

        return;
    }

    // CREATE FRAME CARDS
    matchingFrames.forEach((framePath, index) => {

        const card = document.createElement("div");

        card.classList.add("frame-card");

        card.innerHTML = `
        
            <img src="../${framePath}">
            
            <h2>Frame ${index + 1}</h2>
        
        `;

        // CLICK EVENT
        card.addEventListener("click", function () {

            // SAVE FRAME
            localStorage.setItem("selectedFrame", framePath);

            // REDIRECT
            if (orientation === "vertical") {

                window.location.href = "../vertical/index.html";

            } else {

                window.location.href = "../horizontal/index.html";

            }

        });

        frameContainer.appendChild(card);

    });

})

.catch(error => {

    console.error("Error loading frames:", error);

});