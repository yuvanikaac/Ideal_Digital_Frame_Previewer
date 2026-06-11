function createNavigation(currentStep) {

    const steps = [

        {
            name: "Frame Size",
            link: "../frame-size.html"
        },

        {
            name: "Size",
            link: "../photo_size/index.html"
        },

        {
            name: "Orientation",
            link: "../orientation/index.html"
        },

        {
            name: "Thickness",
            link: "../frame-thickness/index.html"
        },

        {
            name: "Frame",
            link: "../frame-selection/index.html"
        },

        {
            name: "Preview",
            link: "preview"
        },

        {
            name: "Wall",
            link: "../wall-selection/index.html"
        },

        {
            name: "Final",
            link: "../wall-preview/index.html"
        }

    ];

    const nav = document.getElementById("wizardNav");

    steps.forEach((step, index) => {

        const a = document.createElement("a");

        a.innerText = step.name;

        a.classList.add("wizard-step");

        if (index < currentStep) {

            a.classList.add("completed");

        }

        else if (index === currentStep) {

            a.classList.add("active");

        }

        else {

            a.classList.add("disabled");

        }

        if (step.link === "preview") {

            const orientation =
                localStorage.getItem("orientation");

            if (orientation === "vertical") {

                a.href = "../vertical/index.html";

            } else {

                a.href = "../horizontal/index.html";

            }

        } else {

            a.href = step.link;

        }

        if (index > currentStep) {

            a.href = "#";

        }

        nav.appendChild(a);

    });

}
