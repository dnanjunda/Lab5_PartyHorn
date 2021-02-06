// main.js

//number input for volume
let volumeNumber = document.getElementById('volume-number');

//slider input for volume
let volumeSlider = document.getElementById('volume-slider');

//horn audio element
let soundElement = document.getElementById('horn-sound');

//sound image
let soundImage = document.getElementById('sound-image');

//volume icon
let volumeImage = document.getElementById('volume-image');

//button to play sound
let honkBtn = document.getElementById('hook-btn');

//radio switches for different sounds
let airHorn = document.getElementById('radio-air-horn');
let carHorn = document.getElementById('radio-car-horn');
let partyHorn = document.getElementById('radio-party-horn');

//updates volume when number input changes
volumeNumber.addEventListener("change", () => {
    volumeSlider.value = volumeNumber.value;

    soundElement.volume = volumeNumber.value/100;

    updateVolumeImg(volumeNumber.value);
});

//updates volume when slider value changes
volumeSlider.addEventListener("change", () => {
    volumeNumber.value = volumeSlider.value;

    soundElement.volume = volumeSlider.value/100;

    updateVolumeImg(volumeSlider.value);
});

//changes sound and image when air horn is selected
airHorn.addEventListener("click", () => {
    soundImage.src = "./assets/media/images/air-horn.svg";
    soundElement.src = "./assets/media/audio/air-horn.mp3";
});

//changes sound and image when car horn is selected
carHorn.addEventListener("click", () => {
    soundImage.src = "./assets/media/images/car.svg";
    soundElement.src = "./assets/media/audio/car-horn.mp3";
});

//changes sound and image when party horn is selected
partyHorn.addEventListener("click", () => {
    soundImage.src = "./assets/media/images/party-horn.svg";
    soundElement.src = "./assets/media/audio/party-horn.mp3";
});

//plays sounds when honk button is clicked
honkBtn.addEventListener("click", (event) => {
    event.preventDefault();
    soundElement.play();
})

//updates volume image based on current volume
function updateVolumeImg(val) {
    honkBtn.disabled = false;
    if(val >= 67 && val <= 100) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    } else if(val >= 34 && val <= 66) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    } else if(val >= 1 && val <= 33) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    } else if(val === 0) {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        honkBtn.disabled = true;
    }
}