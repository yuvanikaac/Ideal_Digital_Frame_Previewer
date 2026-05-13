const frameImage = document.getElementById("frameImage");
const innerPhoto = document.querySelector(".inner-photo");
const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

// FRAME SETTINGS
const frames = {
    frame1: {
        src: "frame1.jpeg",
        top: "11%",
        left: "6.5%",
        right: "7%",
        bottom: "10%"
    },
    frame2: {
        src: "frame2.jpeg",
        top: "10%",
        left: "8%",
        right: "8%",
        bottom: "10%"
    },
    frame3: {
        src: "frame3.jpeg",
        top: "8.5%",
        left: "6%",
        right: "6%",
        bottom: "8.5%"
    },
    frame4: {
        src: "frame4.jpeg",
        top: "12%",
        left: "7.5%",
        right: "7.5%",
        bottom: "11.5%"
    }
};

// Upload
upload.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        preview.src = e.target.result;

        // reset transform (important)
        preview.style.transform = "translate(0px, 0px) scale(1)";
    };

    reader.readAsDataURL(file);
});

// Frame selection
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function () {

        const selected = frames[this.dataset.frame];
        if (!selected) return;

        frameImage.src = selected.src;

        innerPhoto.style.top = selected.top;
        innerPhoto.style.left = selected.left;
        innerPhoto.style.right = selected.right;
        innerPhoto.style.bottom = selected.bottom;

        // active highlight
        thumbnails.forEach(t => t.classList.remove("active"));
        this.classList.add("active");
    });
});

// Default load
window.onload = function () {
    const f = frames["frame1"];

    innerPhoto.style.top = f.top;
    innerPhoto.style.left = f.left;
    innerPhoto.style.right = f.right;
    innerPhoto.style.bottom = f.bottom;
    document.querySelector('.thumb[data-frame="frame1"]').classList.add("active");
};