const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", function () {

        const orientation = this.dataset.orientation;

        // Save orientation
        localStorage.setItem("orientation", orientation);

        // Go to thickness page
        window.location.href = "../frame-thickness/index.html";

    });

});