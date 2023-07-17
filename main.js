var mobileMenu = document.getElementById('mobile-menu');

mobileMenu.style.maxHeight = "0px";

function togglemenu() {
    if (mobileMenu.style.maxHeight == "0px") {
        mobileMenu.style.maxHeight = "200px";
        mobileMenu.style.display = "block";
    } else {
        mobileMenu.style.maxHeight = "0px";
    }
}
