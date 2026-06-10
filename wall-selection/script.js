const cards =
document.querySelectorAll(".colour-card");

const customBtn =
document.getElementById("customBtn");

const colorPicker =
document.getElementById("wallColorPicker");

const continueBtn =
document.getElementById("continueBtn");

let selectedColor = "#ffffff";

// DEFAULT

localStorage.setItem(
    "wallColor",
    selectedColor
);

// COLOUR CARDS

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        cards.forEach(c=>
            c.classList.remove("selected")
        );

        card.classList.add("selected");

        selectedColor =
        card.dataset.colour;

        localStorage.setItem(
            "wallColor",
            selectedColor
        );

    });

});

// CUSTOM COLOUR

customBtn.addEventListener("click",()=>{

    colorPicker.click();

});

colorPicker.addEventListener("input",()=>{

    selectedColor =
    colorPicker.value;

    localStorage.setItem(
        "wallColor",
        selectedColor
    );

    cards.forEach(c=>
        c.classList.remove("selected")
    );

});

// CONTINUE

continueBtn.addEventListener("click",()=>{

    window.location.href =
    "../wall-preview/index.html";

});