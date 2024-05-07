var navBar = document.getElementById("nav-bar");
var menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", function() {
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "block";
    }
});

navBar.addEventListener("click", function() {
    navBar.style.display = "none";
});

var navItems = document.querySelectorAll(".nav-item");

navItems.forEach(function(navItem) {
    navItem.addEventListener("click", function() {
        navBar.style.display = "none";
    });
});
