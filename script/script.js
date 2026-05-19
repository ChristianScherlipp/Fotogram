let currentImage = 0;
let slideshowTimer = null;  // Saves the timer for the slideshow

const dogPicture = document.getElementById("content-dogGallery"); // Variable with access to the main page's content
const dialogDogPicture = document.getElementById("dialogPicture"); // Variable with access to the main content of the dialog
const dialogTitle = document.getElementById("pictureTitle"); // Variable with access to the dialog title
const counter = document.getElementById("imageCounter");
const dogGallery = [
    "Abby_Baden_ist_das_größte.jpeg",
    "Abby_Das_riecht_aber_gut.jpeg",
    "Abby_Lange_Auto_fahrten_machen_müde.jpeg",
    "Abby_spielen_in_der_freien_Natur.jpeg",
    "Kira_erster_Tag_im_neuen_zu_Hause.jpeg",
    "Kira_Es_gibt_Nachwuchs.jpeg",
    "Kira_Im_Arm_schläft_sich_am_besten_.jpeg",
    "Kira_My_best_buddy_Sunny.jpeg",
    "Sunny_ein_gechillter_Tag.jpeg",
    "Sunny_Eis_ist_das_beste.jpeg",
    "Sunny_My_best_buddy_und_Ich_in_Errinnerung.jpeg",
    "Sunny_OH_es_gibt_was_neues.jpeg",
]; // List of paths to the images
const dialogRef = document.getElementById("dialogGallery"); // Variable with access to the dialog

// Function to generate images in the main section of the main page, including an ID, class, and onclick function within the main area of ​​the dialog.
function renderDogGallery() {
    for (let i = 0; i < dogGallery.length; i++) {
    dogPicture.innerHTML += `<button class="pictureDog" onclick="openDialog(${i})"><img id="dogGallery-Picture${i}" src="./assets/img/gallery/${dogGallery[i]}" alt="${dogGallery[i]}"></button`;
    }
}

// Open the dialog by clicking the images; includes a function to generate the images within the dialog's main section, as well as the title.
function openDialog(i) {
    currentImage = i;
    dialogRef.showModal();
    renderDialogImage();
    counter.innerHTML =`${currentImage + 1} / ${dogGallery.length}`; // Modify the <p> tag and output the numeric values; the first number changes, while the second remains fixed.
}
//  Closes the dialog.
function closeDialog() {
    dialogRef.close();
    
    dialogRef.addEventListener("close", () => {
    stopSlideshow();  // <--Important: Stop slideshow upon closing.
    });
}

// Render Picture
function renderDialogImage() {
    dialogTitle.innerText = dogGallery[currentImage]
    .replaceAll("_", " ")
    .replaceAll(".jpeg", "");

    dialogDogPicture.innerHTML = `<img id="dogGalleryPicture${dogGallery[currentImage]}" src="./assets/img/gallery/${dogGallery[currentImage]}" alt="${dogGallery[currentImage]}">`;
}

//  Change Picture with opened Dialog
function changePicture(step) {
    currentImage += step;

    if (currentImage >= dogGallery.length) {
    // Check if the key input is greater than the list; if true, go to the start of the list.
    currentImage = 0;
    }

    if (currentImage < 0) {
    // Check if the key input is less than the list; if true, go to the end of the list.
    currentImage = dogGallery.length - 1;
    }

    counter.innerHTML = `${currentImage + 1} / ${dogGallery.length}`; // Modify the <p> tag and output the numeric values; the first number changes, while the second remains fixed.

    renderDialogImage();
}

// Starts the automatic slideshow (changes every 2 seconds)
function startSlideshow() {
    // Prevents duplicate timers in case of multiple clicks.
    if (slideshowTimer === null) {
        slideshowTimer = setInterval(() => {
            changePicture(1); // Uses your existing function for the next image.
        }, 2000); // 2000 milliseconds = 2 seconds
    }
}

// Stop the slideshow
function stopSlideshow() {
    if (slideshowTimer !== null) {
        clearInterval(slideshowTimer);
        slideshowTimer = null;
    }
}


