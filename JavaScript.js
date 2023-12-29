function reshapeRandomBoxes() {
    var quoteHeight = document.getElementById('randomQuoteBox').style.height;
    var imageHeight = document.getElementById('randomPictureBox').style.height;
    if(quoteHeight>imageHeight)
    {
        document.getElementById('randomPictureBox').style.height = quoteHeight;
    }
    else
    {
        document.getElementById('randomQuoteBox').style.height = imageHeight;
    }
}

function printQuote() {
    let quote = document.getElementById("quote");
    var category = 'happiness'
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'N3WA0/pWrK9hRiUsSM5llw==NsDdEycUwr8z7fow'},
        contentType: 'application/json',
        success: function(result) {
            let randomQuote = result[0]["quote"];
            let author = result[0]["author"]
            console.log(randomQuote);
            quote.innerHTML = `${randomQuote}<br>
                <i>${author}</i>`;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            quote.innerHTML = `Sorry, we couldn't get your quote!`;
        }
    });
    reshapeRandomBoxes();
};


function changeImage() {
    let image = document.getElementById("image");
    let imageError = document.getElementById("imageError");
    $.ajax({
        method: 'GET',
        url: 'https://api.thecatapi.com/v1/images/search',
        headers: { 'X-Api-Key': 'live_In5xyYcZF565lxX19LXYEDahxvSbrKSffYx7kx4skQ1N5OtrQEoOnnKbL6QnArDL'},
        contentType: 'application/json',
        success: function(result) {
            var randomImage = new Image;
            randomImage.src = result[0]["url"];
            image.src = randomImage.src;
            console.log(randomImage.src);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            imageError.innerHTML = `Sorry, we couldn't get your image!`;
        }
    });
    reshapeRandomBoxes();
};

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

let quote = document.getElementById("randomQuoteBox");
let showQuote = quote.addEventListener("click",printQuote);

let image = document.getElementById("randomPictureBox");
let showImage = image.addEventListener("click",changeImage);

let button = document.getElementById("subscribeButton");
let subscribe = button.addEventListener("click",printMessage);
