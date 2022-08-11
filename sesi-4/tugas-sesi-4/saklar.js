function saklarRk() {
    let togglerk = document.getElementById("toggle-rk");
    let toggle1 = document.getElementById("toggle-rk1");
    let toggle2 = document.getElementById("toggle-rk2");
    let toggle3 = document.getElementById("toggle-rk3");
    let lampu1 = document.getElementById("lampu-rk1");
    let lampu2 = document.getElementById("lampu-rk2");
    let lampu3 = document.getElementById("lampu-rk3");

    if (togglerk.checked) {
        if (toggle1.checked) {
            lampu1.src = "assets/images/on.gif";
        } else {
            lampu1.src = "assets/images/off.gif";
        } 

        if (toggle2.checked) {
            lampu2.src = "assets/images/on.gif";
        } else {
            lampu2.src = "assets/images/off.gif";
        }

        if (toggle3.checked) {
            lampu3.src = "assets/images/on.gif";
        } else {
            lampu3.src = "assets/images/off.gif";
        }
    } else {
        if (toggle1.checked) {
            lampu1.src = "assets/images/off.gif";
        } else {
            lampu1.src = "assets/images/off.gif";
        }

        if (toggle2.checked) {
            lampu2.src = "assets/images/off.gif";
        } else {
            lampu2.src = "assets/images/off.gif";
        }

        if (toggle3.checked) {
            lampu3.src = "assets/images/off.gif";
        } else {
            lampu3.src = "assets/images/off.gif";
        }
    }
}

function saklarRm() {
    let togglerm = document.getElementById("toggle-rm");
    let toggle1 = document.getElementById("toggle-rm1");
    let lampu1 = document.getElementById("lampu-rm1");

    if (togglerm.checked) {
        if (toggle1.checked) {
            lampu1.src = "assets/images/on.gif";
        } else {
            lampu1.src = "assets/images/off.gif";
        } 
    } else {
        if (toggle1.checked) {
            lampu1.src = "assets/images/off.gif";
        } else {
            lampu1.src = "assets/images/off.gif";
        }
    }
}

function saklarRb() {
    let togglerb = document.getElementById("toggle-rb");
    let toggle1 = document.getElementById("toggle-rb1");
    let toggle2 = document.getElementById("toggle-rb2");
    let lampu1 = document.getElementById("lampu-rb1");
    let lampu2 = document.getElementById("lampu-rb2");

    if (togglerb.checked) {
        if (toggle1.checked) {
            lampu1.src = "assets/images/on.gif";
        } else {
            lampu1.src = "assets/images/off.gif";
        } 
        if (toggle2.checked) {
            lampu2.src = "assets/images/on.gif";
        } else {
            lampu2.src = "assets/images/off.gif";
        }
    } else {
        if (toggle1.checked) {
            lampu1.src = "assets/images/off.gif";
        } else {
            lampu1.src = "assets/images/off.gif";
        }
        if (toggle2.checked) {
            lampu2.src = "assets/images/off.gif";
        } else {
            lampu2.src = "assets/images/off.gif";
        }
    }
}

function saklarRt() {
    let togglert = document.getElementById("toggle-rt");
    let toggle1 = document.getElementById("toggle-rt1");
    let toggle2 = document.getElementById("toggle-rt2");
    let toggle3 = document.getElementById("toggle-rt3");
    let toggle4 = document.getElementById("toggle-rt4");
    let lampu1 = document.getElementById("lampu-rt1");
    let lampu2 = document.getElementById("lampu-rt2");
    let lampu3 = document.getElementById("lampu-rt3");
    let lampu4 = document.getElementById("lampu-rt4");

    if (togglert.checked) {
        if (toggle1.checked) {
            lampu1.src = "assets/images/on.gif";
        } else {
            lampu1.src = "assets/images/off.gif";
        } 
        if (toggle2.checked) {
            lampu2.src = "assets/images/on.gif";
        } else {
            lampu2.src = "assets/images/off.gif";
        }
        if (toggle3.checked) {
            lampu3.src = "assets/images/on.gif";
        } else {
            lampu3.src = "assets/images/off.gif";
        }
        if (toggle4.checked) {
            lampu4.src = "assets/images/on.gif";
        } else {
            lampu4.src = "assets/images/off.gif";
        }
    } else {
        if (toggle1.checked) {
            lampu1.src = "assets/images/off.gif";
        } else {
            lampu1.src = "assets/images/off.gif";
        }
        if (toggle2.checked) {
            lampu2.src = "assets/images/off.gif";
        } else {
            lampu2.src = "assets/images/off.gif";
        }
        if (toggle3.checked) {
            lampu3.src = "assets/images/off.gif";
        } else {
            lampu3.src = "assets/images/off.gif";
        }
        if (toggle4.checked) {
            lampu4.src = "assets/images/off.gif";
        } else {
            lampu4.src = "assets/images/off.gif";
        }
    }
}