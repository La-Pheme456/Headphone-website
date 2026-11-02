const headphone = document.querySelector("#headphone");
const banner = document.querySelector("#banner");

const headphoneColors = [
    {
        image: "img/black headphone.png",
        background: "rgb(231, 234, 237)"
    },
    {
        image: "img/red headphone.png",
        background: "#eadede"
    },
    {
        image: "img/purple headphone.png",
        background: "#e5e0ef"
    },
    {
        image: "img/green headphone.png",
        background: "#dfe8df"
    },
    {
        image: "img/brown headphone.png",
        background: "#eee2d7"
    }
];

let currentIndex = 0;
let isChanging = false;

function changeHeadphone() {
    if (isChanging) return;

    isChanging = true;

    currentIndex = (currentIndex + 1) % headphoneColors.length;

    // Fade out the current headphone
    headphone.style.opacity = "0";

    setTimeout(() => {
        const nextHeadphone = headphoneColors[currentIndex];

        // Change the headphone image and background
        headphone.src = nextHeadphone.image;
        banner.style.backgroundColor = nextHeadphone.background;

        // Wait for the image to load before fading in
        if (headphone.complete && headphone.naturalWidth > 0) {
            headphone.style.opacity = "1";
            isChanging = false;
        } else {
            headphone.onload = () => {
                headphone.style.opacity = "1";
                isChanging = false;
                headphone.onload = null;
            };

            headphone.onerror = () => {
                headphone.style.opacity = "1";
                isChanging = false;
                headphone.onerror = null;
            };
        }
    }, 500);
}

// Change the headphone every 3.5 seconds
setInterval(changeHeadphone, 3500);