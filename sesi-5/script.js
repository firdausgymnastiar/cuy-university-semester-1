let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let admin = document.getElementById('admin');
let user = document.getElementById('user');
let ayah = document.getElementById('ayah');
let ibu = document.getElementById('ibu');
let kakak = document.getElementById('kakak');
let adik = document.getElementById('adik');
let loginButton = document.getElementById('loginButton');
let logoutButton = document.getElementById('logoutButton');
let fotoAdmin = document.getElementById('fotoAdmin');
let fotoAdik = document.getElementById('fotoAdik');
let fotoAyah = document.getElementById('fotoAyah');
let fotoIbu = document.getElementById('fotoIbu');
let fotoKakak = document.getElementById('fotoKakak');
let daftar = document.getElementById('daftar');

admin.style.display = "none";
user.style.display = "none";
ayah.style.display = "none";
ibu.style.display = "none";
kakak.style.display = "none";
adik.style.display = "none";
logoutButton.style.display = "none";
fotoAdmin.style.display = "none";
fotoAyah.style.display = "none";
fotoAdik.style.display = "none";
fotoIbu.style.display = "none";
fotoKakak.style.display = "none";



function onLogin() {
    localStorage.setItem("username", usernameInput.value);

    if (usernameInput.value == "admin" && passwordInput.value == "admin123") {

        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        localStorage.setItem("role", "admin");
        admin.style.display = "block";
        user.style.display = "none";
        ayah.style.display = "none";
        ibu.style.display = "none";
        kakak.style.display = "none";
        adik.style.display = "none";
        fotoAdmin.style.display = "block";
        fotoAyah.style.display = "none";
        fotoAdik.style.display = "none";
        fotoIbu.style.display = "none";
        fotoKakak.style.display = "none";
        logoutButton.style.display = "block";
        daftar.style.display = "none";
    } else if (usernameInput.value == "ayah" && passwordInput.value == "ayah123") {

        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        localStorage.setItem("role", "ayah");
        admin.style.display = "none";
        user.style.display = "none";
        ayah.style.display = "block";
        ibu.style.display = "none";
        kakak.style.display = "none";
        adik.style.display = "none";
        fotoAdmin.style.display = "none";
        fotoAyah.style.display = "block";
        fotoAdik.style.display = "none";
        fotoIbu.style.display = "none";
        fotoKakak.style.display = "none";
        logoutButton.style.display = "block";
        daftar.style.display = "none";
    } else if (usernameInput.value == "ibu" && passwordInput.value == "ibu123") {

        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        localStorage.setItem("role", "ibu");
        admin.style.display = "none";
        user.style.display = "none";
        ayah.style.display = "none";
        ibu.style.display = "block";
        kakak.style.display = "none";
        adik.style.display = "none";
        fotoAdmin.style.display = "none";
        fotoAyah.style.display = "none";
        fotoAdik.style.display = "none";
        fotoIbu.style.display = "block";
        fotoKakak.style.display = "none";
        logoutButton.style.display = "block";
        daftar.style.display = "none";
    } else if (usernameInput.value == "kakak" && passwordInput.value == "kakak123") {

        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        localStorage.setItem("role", "kakak");
        admin.style.display = "none";
        user.style.display = "none";
        ayah.style.display = "none";
        ibu.style.display = "none";
        kakak.style.display = "block";
        adik.style.display = "none";
        fotoAdmin.style.display = "none";
        fotoAyah.style.display = "none";
        fotoAdik.style.display = "none";
        fotoIbu.style.display = "none";
        fotoKakak.style.display = "block";
        logoutButton.style.display = "block";
        daftar.style.display = "none";
    } else if (usernameInput.value == "adik" && passwordInput.value == "adik123") {

        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        localStorage.setItem("role", "adik");
        admin.style.display = "none";
        user.style.display = "none";
        ayah.style.display = "none";
        ibu.style.display = "none";
        kakak.style.display = "none";
        adik.style.display = "block";
        fotoAdmin.style.display = "none";
        fotoAyah.style.display = "none";
        fotoAdik.style.display = "block";
        fotoIbu.style.display = "none";
        fotoKakak.style.display = "none";
        logoutButton.style.display = "block";
        daftar.style.display = "none";
    } else {

        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        localStorage.setItem("role", "user");
        admin.style.display = "none";
        user.style.display = "block";
        ayah.style.display = "none";
        ibu.style.display = "none";
        kakak.style.display = "none";
        adik.style.display = "none";
        fotoAdmin.style.display = "none";
        fotoAyah.style.display = "none";
        fotoAdik.style.display = "none";
        fotoIbu.style.display = "none";
        fotoKakak.style.display = "none";
        logoutButton.style.display = "none";
        daftar.style.display = "block";
    }
}

if (localStorage.getItem('username')) {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";

    if (localStorage.getItem('role') == "admin") {
        admin.style.display = "block";
        user.style.display = "none";
        ayah.style.display = "none";
        ibu.style.display = "none";
        kakak.style.display = "none";
        adik.style.display = "none";
        fotoAdmin.style.display = "block";
        fotoAyah.style.display = "none";
        fotoAdik.style.display = "none";
        fotoIbu.style.display = "none";
        fotoKakak.style.display = "none";
        logoutButton.style.display = "block";
        daftar.style.display = "none";
    } else if (localStorage.getItem('role') == "ayah") {
        admin.style.display = "none";
        user.style.display = "none";
        ayah.style.display = "block";
        ibu.style.display = "none";
        kakak.style.display = "none";
        adik.style.display = "none";
        fotoAdmin.style.display = "none";
        fotoAyah.style.display = "block";
        fotoAdik.style.display = "none";
        fotoIbu.style.display = "none";
        fotoKakak.style.display = "none";
        logoutButton.style.display = "block";
        daftar.style.display = "none";
    } else if (localStorage.getItem('role') == "ibu") {
        admin.style.display = "none";
        user.style.display = "none";
        ayah.style.display = "none";
        ibu.style.display = "block";
        kakak.style.display = "none";
        adik.style.display = "none";
        fotoAdmin.style.display = "none";
        fotoAyah.style.display = "none";
        fotoAdik.style.display = "none";
        fotoIbu.style.display = "block";
        fotoKakak.style.display = "none";
        logoutButton.style.display = "block";
        daftar.style.display = "none";
    } else if (localStorage.getItem('role') == "kakak") {
        admin.style.display = "none";
        user.style.display = "none";
        ayah.style.display = "none";
        ibu.style.display = "none";
        kakak.style.display = "block";
        adik.style.display = "none";
        fotoAdmin.style.display = "none";
        fotoAyah.style.display = "none";
        fotoAdik.style.display = "none";
        fotoIbu.style.display = "none";
        fotoKakak.style.display = "block";
        logoutButton.style.display = "block";
        daftar.style.display = "none";
    } else if (localStorage.getItem('role') == "adik") {
        admin.style.display = "none";
        user.style.display = "none";
        ayah.style.display = "none";
        ibu.style.display = "none";
        kakak.style.display = "none";
        adik.style.display = "block";
        fotoAdmin.style.display = "none";
        fotoAyah.style.display = "none";
        fotoAdik.style.display = "block";
        fotoIbu.style.display = "none";
        fotoKakak.style.display = "none";
        logoutButton.style.display = "block";
        daftar.style.display = "none";
    } else {
        admin.style.display = "none";
        user.style.display = "block";
        ayah.style.display = "none";
        ibu.style.display = "none";
        kakak.style.display = "none";
        adik.style.display = "none";
        fotoAdmin.style.display = "none";
        fotoAyah.style.display = "none";
        fotoAdik.style.display = "none";
        fotoIbu.style.display = "none";
        fotoKakak.style.display = "none";
        logoutButton.style.display = "none";
        daftar.style.display = "block";
    }
} else {

}

function onLogout() {
    localStorage.clear();
    location.reload();
}
