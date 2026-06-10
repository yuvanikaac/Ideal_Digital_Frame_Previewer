const frameImage = document.getElementById("frameImage");
const innerPhoto = document.querySelector(".inner-photo");

const upload = document.getElementById("upload");
const preview = document.getElementById("preview");
localStorage.setItem(
    "orientation",
    "horizontal"
);

// GET SELECTED FRAME
const selectedFrame = localStorage.getItem("selectedFrame");

// APPLY FRAME
frameImage.src = "../" + selectedFrame;

// PHOTO POSITION FOR HORIZONTAL
//innerPhoto.style.top = "45px";
//innerPhoto.style.left = "50px";
//innerPhoto.style.right = "50px";
//innerPhoto.style.bottom = "45px";


// PHOTO POSITION

frameImage.onload = function () {

    const frameData =
    FRAME_MEASUREMENTS[selectedFrame];

    if (!frameData) return;

    const frameWidth =
    frameImage.naturalWidth;

    const frameHeight =
    frameImage.naturalHeight;

    innerPhoto.style.top =
        (frameData.top / frameHeight * 100) + "%";

    innerPhoto.style.left =
        (frameData.left / frameWidth * 100) + "%";

    innerPhoto.style.width =
        (frameData.width / frameWidth * 100) + "%";

    innerPhoto.style.height =
        (frameData.height / frameHeight * 100) + "%";
};

// IMAGE UPLOAD
upload.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        preview.src = "";
        return;
    }

    const reader = new FileReader();

   reader.onload = function (e) {

    preview.src = e.target.result;

    localStorage.setItem(
        "uploadedImage",
        e.target.result
    );

};

    reader.readAsDataURL(file);

});

// DRAG + ZOOM
let scale = 1;
let posX = 0;
let posY = 0;

let isDragging = false;

let startX;
let startY;

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

        if (scale < 1) {
            scale = 1;
        }

    }

    updateTransform();

});

function updateTransform() {

    preview.style.transform =
        `translate(${posX}px, ${posY}px) scale(${scale})`;

}