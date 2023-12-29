// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     //do nothing if form not validated
//     if (!validateForm(form)) return;

//     //if form valid submit

//     alert("Message sucessfully sent!");
// });

// const validateForm = (form) => {
//     let valid = true;
//     //check for empty fields
//     let name = form.querySelector(".name");
//     let message = form.querySelector(".message");
//     let email = form.querySelector(".email");

//     if(name.value === "") {
//         giveError(name, "Please enter your name");
//         valid=false;
//     }
//     if(message.value === "") {
//         giveError(name, "Please enter a message");
//         valid=false;
//     }

//     //email validation
//         let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         let emailValue = email.value;
//         if (!emailRegex.test(emailValue)) {
//             giveError(email, "Please enter a valid email");
//             valid=false;
//         }

//         //return true if valid

//         if (valid) {
//             return true;
//         }
// };

// const giveError = (field, message) => {
//     let parentElement = field.parentElement;
//     parentElement.classlist.add("error");
//     //if error message already exists remove it
//     let existingError = parentElement.querySelector(".err-msg");
//     if (existingError) {
//         existingError.remove();
//     }
//     let error = document.createElement("span")
//     error.textContent = message;
//     error.classList.add("err-msg");
//     parentElement.appendChild(error);
// };

// //let's remove error in input

// const inputs = document.querySelectorAll("input")
// const textarea = document.querySelector("textarea");

// let allFields = [...inputs, ...textarea]

// allFields.forEach((field) => {
//     field.addEventListener("input", () => {
//         removeError(field);
//     });
// });

// const removeError = (field) => {
//     let parentElement = field.parentElement;
//     parentElement.classList.remove("error");
//     let error = parentElement.querySelector(".err-msg");
//     if (error) {
//         error.remove();
//     }
// };

function printMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let story = document.getElementById("message").value;
    let message = document.getElementById("errorMessage");
    if (email == ""){
        message.innerHTML = `Please enter an email address`;
    } else if (name =="") {
        message.innerHTML = `Please enter a name`;
    } else if (story =="") {
        message.innerHTML = `Don't forget to add your story!`;
    } else {
        message.innerHTML = `Thank you for your submission!`;
    }
};

let button = document.getElementById("buttonPage2");
let subscribe = button.addEventListener("click",printMessage);