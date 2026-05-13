const frameImage = document.getElementById("frameImage");
const innerPhoto = document.querySelector(".inner-photo");


const frames = {
    frame1: {
        src: "frame1.jpeg",
        top: 48, left: 55, right: 50, bottom: 47,
        size: "medium",
        thickness: "broad"
    },
    frame2: {
        src: "frame2.jpeg",
        top: 60, left: 55, right: 60, bottom: 60,
        size: "large",
        thickness: "medium"
    },
    frame3: {
        src: "frame3.jpeg",
        top: 48, left: 35, right: 40, bottom: 48,
        size: "small",
        thickness: "thin"
    },
    frame4: {
        src: "frame4.jpeg",
        top: 50, left: 50, right: 50, bottom: 50,
        size: "medium",
        thickness: "thin"
    },
    frame5: {
        src: "frame5.jpeg",
        top: 50, left: 50, right: 50, bottom: 50,
        size: "large",
        thickness: "broad"
    },
    frame6: {
        src: "frame6.jpeg",
        top: 50, left: 50, right: 50, bottom: 50,
        size: "medium",
        thickness: "medium"
    },
    frame7: {
        src: "frame7.jpeg",
        top: 50, left: 50, right: 50, bottom: 50,
        size: "small",
        thickness: "broad"
    }
};
const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

upload.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        preview.src = "";
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("Please upload an image file.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        preview.src = e.target.result;
    };

    reader.readAsDataURL(file);
});
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function () {

        const selected = frames[this.dataset.frame];

        if (!selected) return;

        // Change frame
        frameImage.src = selected.src;

        // Apply position
        innerPhoto.style.top = selected.top + "px";
        innerPhoto.style.left = selected.left + "px";
        innerPhoto.style.right = selected.right + "px";
        innerPhoto.style.bottom = selected.bottom + "px";

        // Active border
        thumbnails.forEach(t => t.classList.remove("active"));
        this.classList.add("active");
    });
});
// Apply default frame on page load
window.onload = function () {
    const defaultFrame = frames["frame1"];

    innerPhoto.style.top = defaultFrame.top + "px";
    innerPhoto.style.left = defaultFrame.left + "px";
    innerPhoto.style.right = defaultFrame.right + "px";
    innerPhoto.style.bottom = defaultFrame.bottom + "px";

    // Set active thumbnail
    document.querySelector('.thumb[data-frame="frame1"]').classList.add("active");
};
const sizeFilter = document.getElementById("sizeFilter");
const thicknessFilter = document.getElementById("thicknessFilter");

function filterFrames() {
    const size = sizeFilter.value;
    const thickness = thicknessFilter.value;

    thumbnails.forEach(thumb => {
        const frameKey = thumb.dataset.frame;
        const frame = frames[frameKey];

        const sizeMatch = (size === "all" || frame.size === size);
        const thicknessMatch = (thickness === "all" || frame.thickness === thickness);

        if (sizeMatch && thicknessMatch) {
            thumb.style.display = "block";
        } else {
            thumb.style.display = "none";
        }
    });
}

sizeFilter.addEventListener("change", filterFrames);
thicknessFilter.addEventListener("change", filterFrames);
let scale = 1;
let posX = 0;
let posY = 0;
let isDragging = false;
let startX, startY;

preview.addEventListener("mousedown", function (e) {
    isDragging = true;
    startX = e.clientX - posX;
    startY = e.clientY - posY;
    preview.style.cursor = "grabbing";
});

window.addEventListener("mousemove", function (e) {
    if (!isDragging) return;

    posX = e.clientX - startX;
    posY = e.clientY - startY;

    updateTransform();
});

window.addEventListener("mouseup", function () {
    isDragging = false;
    preview.style.cursor = "grab";
});

preview.addEventListener("wheel", function (e) {
    e.preventDefault();

    if (e.deltaY < 0) {
        scale += 0.1;
    } else {
        scale -= 0.1;
        if (scale < 1) scale = 1;
    }

    updateTransform();
});

function updateTransform() {
    preview.style.transform =
        `translate(${posX}px, ${posY}px) scale(${scale})`;
}
