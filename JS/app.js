// Hamburger navigation
const hamburgerNav = document.getElementById("hamburger-icon");
function toggleVerticalbar() {
    if (nav.style.display === 'none') {
        nav.style.display = "block";
    }
    else {
        nav.style.display = "none";
    }
}

// Read More for Editorial Team members
function myFunctionOne() {
    var dots = document.getElementById("dots-1");
    var moreText = document.getElementById("more-1");
    var btnText = document.getElementById("myBtn-1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunctionTwo() {
    var dots = document.getElementById("dots-2");
    var moreText = document.getElementById("more-2");
    var btnText = document.getElementById("myBtn-2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunctionThree() {
    var dots = document.getElementById("dots-3");
    var moreText = document.getElementById("more-3");
    var btnText = document.getElementById("myBtn-3");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

// Active links
const currentLocation = window.location.pathname.split('/');
const menuItem = document.getElementsByClassName("nav-link");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].getAttribute('href') === currentLocation[currentLocation.length - 1]) {
        menuItem[i].className = "nav-link active-link";
    }
}




   


