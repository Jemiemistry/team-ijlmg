function printMessage() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("Email").value;
    let message = document.getElementById("printMessage");
    if (email == ""){
        message.innerHTML = `Please enter an Email Address`;
    } else if (fullName =="") {
        message.innerHTML = `Please enter a Name`;
    } else {
        let firstName = fullName.split(" ")[0];
        message.innerHTML = `Welcome, ${firstName}! You're the newest member of our mailing list`;
    }
};

let button = document.getElementById("subscribeButton")
let subscribe = button.addEventListener("click",printMessage)
