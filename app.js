let container = document.getElementById('container')
let lamanPertama = document.getElementById('lamanPertama')
let lamanBasaBasi = document.getElementById('lamanBasaBasi')
let lamanKedua = document.getElementById('lamanKedua')
let lamanSadBoi = document.getElementById('lamanSadBoi')
let lamanTaubat = document.getElementById('lamanTaubat')
let inputNama = document.getElementById('inputNama')
let submitButton = document.getElementById('submitButton')
let yes = document.getElementById('yes')
let no1 = document.getElementById('no1')
let no2 = document.getElementById('no2')
let no3 = document.getElementById('no3')
let ulangi = document.getElementById('ulangi')
let buttonSiap = document.getElementById('buttonSiap')
let basaBasi = document.getElementById('basaBasi')


function clickMasuk() {
    if (inputNama.value != "") {
        lamanPertama.style.display = "none"
        lamanBasaBasi.style.display = "flex"
    } else {
        alert("isilah nama dahulu adik")
        return;
    }
    
    basaBasi.textContent = `halo ${inputNama.value}, siap untuk pertanyaan besar?`
    
}

function clickLamanKedua() {
    lamanBasaBasi.style.display = "none"
    lamanKedua.style.display = "block"
}

let counterNo = 0;

function noCounter() {
    counterNo += 1;
    console.log(counterNo);

    if (counterNo >= 10) {
        container.style.display = "none"
        lamanSadBoi.style.display = "flex"
    }

}


function hooh() {
    lamanKedua.style.display = "none"
    lamanTaubat.style.display = "flex"

}

function no1Hilang() {
    no1.style.opacity = "0"
    no2.style.opacity = "100"
    no3.style.opacity = "0"
}

function no2Hilang() {
    no1.style.opacity = "0"
    no3.style.opacity = "100"
    no2.style.opacity = "0"
}


function no3Hilang() {
    no2.style.opacity = "0"
    no1.style.opacity = "100"
    no3.style.opacity = "0"
}

function kembaliKeContainer() {
    lamanSadBoi.style.display = "none"
    container.style.display = "flex"
    lamanKedua.style.display = "block"
    no1.style.display = "none"
    no2.style.display = "none"
    no3.style.display = "none"
}

function reRender() {
    location.reload();
}
