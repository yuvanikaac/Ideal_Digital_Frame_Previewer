const sizeContainer = document.getElementById("sizeContainer");

const category = localStorage.getItem("sizeCategory");

// SIZE DATA
const sizes = {

    small: [
        "6x4",
        "6x6",
        "6x8",
        "6x9",
        "4x4",
        "8x8",
        "8x10"
    ],

    medium: [
        "10x10",
        "10x12",
        "10x15",
        "12x8",
        "12x12"
    ],

    large: [
        "12x15",
        "12x18",
        "16x20",
        "16x24",
        "20x24",
        "20x30",
        "30x40"
    ]

};

// LOAD SIZES
sizes[category].forEach(size => {

    const card = document.createElement("div");

    card.classList.add("size-card");

    card.innerHTML = `
    
        <h2>${size}</h2>
    
    `;

    // CLICK
    card.addEventListener("click", function () {

        localStorage.setItem("photoSize", size);

        // Go to orientation page
        window.location.href = "../orientation/index.html";

    });

    sizeContainer.appendChild(card);

});