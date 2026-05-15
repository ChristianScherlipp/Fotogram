    let dogPicture = document.getElementById('content-dogGallery'); // Variable mit zugriff auf den Content der Hauptseite 
    let dialogDogPicture = document.getElementById('dialogPicture'); // Variable mit zugriff auf den main content des dialog
    let dialogTitle = document.getElementById('pictureTitle'); // Variable mit zugriff auf den Titel des Dialog
    
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
    ] // Liste mit den Pfaden zu den Bildern
    const dialogRef = document.getElementById('dialogGallery'); // Variable mit zugriff auf den Dialog


    // Funktion zumm generieren der bilder im main der Hauptseite mit id, class und onclick funktion im main bereich des dialog 
    function renderDogGallery() {
        for (let i = 0; i < dogGallery.length; i++) {
        dogPicture.innerHTML  += `<button class="pictureDog" onclick="openDialog(${i})"><img id="dogGallery-Picture${i}" src="./assets/img/gallery/${dogGallery[i]}" alt="${dogGallery[i]}"></button`;
        
        }    
    }

    // Dialog öffnen durch anklicken der bilder, Funktion zumm generieren der bilder im main des dialog sowie des titels
    function openDialog(i) {
        dialogRef.showModal();
        dialogTitle.innerHTML = `${dogGallery[i]}`; // generiert den Titel aus der Liste
        dialogTitle.innerText = dogGallery[i].replaceAll("_", " ") .replaceAll(".jpeg", ""); // Sorgt dafür das der unterstrich und das .jpeg ersetzt werde
        dialogDogPicture.innerHTML = `<img  src="./assets/img/gallery/${dogGallery[i]}" alt="${dogGallery[i]}">`;
    }

    //  Schließt den dialog
    function closeDialog() {
        dialogRef.close(); 
    }






