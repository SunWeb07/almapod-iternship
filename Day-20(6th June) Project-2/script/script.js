let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var con1 = $("#one"); 
var con2 = $("#two"); 
var con3 = $("#three"); 
var con4 = $("#four"); 
var con5 = $("#five"); 
//[make sure this is a unique variable name]
 
$({someValue: 0}).animate({someValue: 1050}, {
    duration: 5000,
    delay:5000,
    easing:'swing', // can be anything
    step: function() { // called on every step
      // Update the element's text with rounded-up value:
      con1.text(commaSeparateNumber(Math.round(this.someValue)));
    }
});
$({someValue: 0}).animate({someValue: 1850}, {
    duration: 5000,
    delay:5000,
    easing:'swing', // can be anything
    step: function() { // called on every step
      // Update the element's text with rounded-up value:
      con2.text(commaSeparateNumber(Math.round(this.someValue)));
    }
});
$({someValue: 0}).animate({someValue: 2000}, {
    duration: 5000,
    delay:5000,
    easing:'swing', // can be anything
    step: function() { // called on every step
      // Update the element's text with rounded-up value:
      con3.text(commaSeparateNumber(Math.round(this.someValue)));
    }
});
$({someValue: 0}).animate({someValue: 3300}, {
    duration: 5000,
    delay:5000,
    easing:'swing', // can be anything
    step: function() { // called on every step
      // Update the element's text with rounded-up value:
      con4.text(commaSeparateNumber(Math.round(this.someValue)));
    }
});
$({someValue: 0}).animate({someValue: 2600}, {
    duration: 5000,
    delay:5000,
    easing:'swing', // can be anything
    step: function() { // called on every step
      // Update the element's text with rounded-up value:
      con5.text(commaSeparateNumber(Math.round(this.someValue)));
    }
});
 
/**
 * Format the number, so it will be seperated by comma
 */
function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    return val;
}
(function () {
    const pictures = [
        "home",
        "home-bl",
        "home-ss",
    ];

    //select both left and right button. Add event listeners
    const buttons = document.querySelectorAll('.btn1')
    const imageDIV = document.querySelector('.img-container')
    let counter = 0
    imageDIV.style.backgroundImage = `url('./img/${pictures[0]}.png')`
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (button.classList.contains('btn-left')) {
                counter--
                if (counter < 0) {
                    counter = pictures.length - 1
                }
                imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.png')`
            }
            if (button.classList.contains('btn-right')) {
                counter++
                if (counter > pictures.length - 1) {
                    counter = 0
                }
                imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.png')`
            }
        })
    })
})();

function getSlide(o) {
    const pictures = [
        "home",
        "home-bl",
        "home-ss",
    ];

    //select both left and right button. Add event listeners

    const imageDIV = document.querySelector('.img-container')
    imageDIV.style.backgroundImage = `url('img/${pictures[o]}.png`;
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
       x.style.display = "none";
    } else {
       x.style.display = "block";
    }
 }