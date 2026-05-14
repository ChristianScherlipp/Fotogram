let dogPicture = document.getElementById('content-dogGallery');
let dialogDogPicture = document.getElementById('dialogPicture');


const dogGallery = ["Abby_Baden_ist_das_größte.jpeg",
                    "Abby_Das_riecht_aber_gut.jpeg",
                    "Abby_Lange_Auto_fahrten_machen_müde.jpeg",
                    "Abby_spielen_in_der_freien_Natur.jpeg",
                    "Kira_erter_Tag_im_neuen_zu_Hause.jpeg",
                    "Kira_Es_gibt_Nach_wuchs.jpeg",
                    "Kira_Im_Arm_schläft_sich_am_besten_.jpeg",
                    "Kira_My_best_buddy_Sunny.jpeg",
                    "Sunny_ein_gechillter_Tag.jpeg",
                    "Sunny_Eis_ist_das_beste.jpeg",
                    "Sunny_My_best_buddy_und_Ich_in_Errinnerung.jpeg",
                    "Sunny_OH_es_gibt_was_neues.jpeg"
]
const dialogRef = document.getElementById('dialogGallery');



function renderDogGallery() {
    for (let i = 0; i < dogGallery.length; i++) {
    dogPicture.innerHTML  += `<img id="dogGallery-Picture${i}" class="pictureDog" onclick="openDialog(${i})" src="./assets/img/gallery/${dogGallery[i]}" alt="">`;

    }    
}


function openDialog(i) {
    dialogRef.showModal();
    dialogDogPicture.innerHTML = `<img  src="./assets/img/gallery/${dogGallery[i]}" alt="">`;
}


function closeDialog() {
    dialogRef.close();
}




