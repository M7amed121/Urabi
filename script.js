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









document.addEventListener('DOMContentLoaded', () => {
    const createSnowflake = () => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❆';
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // تقليل كمية الثلج عبر زيادة المدة الزمنية
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
        document.body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 10000); // مدة بقاء الثلج
    }

    setInterval(createSnowflake, 2500); // تقليل التكرار لخلق ثلج أقل
});
