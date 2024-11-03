//Home Page OnClick
function mission() {
    alert("Thank you for visiting my website. Feel free to have a look around, learn more about me and/or contact me!");
}

//Contact Page Form
function contact() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    // Check if all fields are filled
    if (name && email && message) {
        alert("Thank you for contacting me. I'll be sure to reply to you as soon as possible.");
        return true; // Allows form submission
    } else {
        alert("Please fill out all fields before submitting.");
        return false; // Prevents form submission
    }
}

//Loading Screen
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    loader.classList.add("loader-hide");

    loader.addEventListener("animationend", () => {
        loader.style.display = "none";
    });
});

//topnav hamburger dropdown for mobile devices
function toggleMenu() {
    var x = document.getElementById("Topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
