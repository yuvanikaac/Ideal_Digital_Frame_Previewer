const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", function () {

        const category = this.dataset.category;

        // Save category
        localStorage.setItem("sizeCategory", category);

        // Go to exact size page
        window.location.href = "photo_size/index.html";

    });

});