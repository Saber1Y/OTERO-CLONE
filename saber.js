var mobileMenu = document.getElementById('mobile-menu');

mobileMenu.style.maxHeight = "0px";

function togglemenu() {
    if (mobileMenu.style.maxHeight == "0px")
    {
        mobileMenu.style.maxHeight = "200px";
        mobileMenu.style.display = (mobilemenu);
    } else {
        mobileMenu.style.maxHeight = "0px";
    }
}