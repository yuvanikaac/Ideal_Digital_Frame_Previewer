const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", function () {

        const thickness = this.dataset.thickness;

        // Save thickness
        localStorage.setItem("frameThickness", thickness);

        // Go to frame selection page
        window.location.href = "../frame-selection/index.html";

    });

});