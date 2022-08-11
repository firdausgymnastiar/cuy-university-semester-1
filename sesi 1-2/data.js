const nama = "firdaus gym";
let usia = 23 ;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    let generasi;

    if (usia < 2) {
        generasi = "generasi balita";           
    } else if (usia >= 2 && usia <= 15) {
        generasi = "anda bocil";
    } else if (usia > 15 && usia <= 20) {
        generasi = "anda remaja";
    } else if (usia > 20 && usia <= 40) {
        generasi = "anda dewasa";
    } else {
        generasi = "anda tuwir";
    }

    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();
