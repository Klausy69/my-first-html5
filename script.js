let button1 = document.getElementById("ringo");
let button2 = document.getElementById("ringo2");

function buttonClick() {
    window.open("https://krunker.io", "_blank");
}

function buttonClick2() {
    window.open("https://discord.com/login", "_blank");
}



button1.onclick = buttonClick;
button2.onclick = buttonClick2;