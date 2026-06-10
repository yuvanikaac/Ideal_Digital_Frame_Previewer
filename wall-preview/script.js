// GET ELEMENTS
const wall = document.getElementById("wall");

const frameImage = document.getElementById("frameImage");

const preview = document.getElementById("preview");

// GET SAVED FRAME
const selectedFrame = localStorage.getItem("selectedFrame");

// GET UPLOADED IMAGE
const uploadedImage = localStorage.getItem("uploadedImage");
const orientation =localStorage.getItem("orientation");
const frameContainer =document.querySelector(".frame-container");

const innerPhoto =document.querySelector(".inner-photo");



// APPLY FRAME
frameImage.src = "../" + selectedFrame;
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

// APPLY PHOTO
preview.src = uploadedImage;
console.log(uploadedImage);

// GET SELECTED WALL
const wallColor =
localStorage.getItem("wallColor")
|| "#ffffff";

wall.style.backgroundImage = "none";

wall.style.backgroundColor =
wallColor;