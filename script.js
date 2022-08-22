const menuElement = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");
const menuClose = document.getElementById("menuClose");

function fillMenuOptions (elementToFill) {
    const navBarOptions = document.getElementById("navBarList");
    elementToFill.innerHTML = navBarOptions.innerHTML;
}

menuButton.addEventListener("click", () => {
    const menuListElement = document.getElementById("menuList");
    fillMenuOptions(menuListElement);
    menuElement.classList.add("show-menu");
    document.body.style.overflow = "hidden"; //to avoid scrolling
})

menuClose.addEventListener("click", () => {
    menuElement.classList.remove("show-menu");
    document.body.style.overflow = "auto";
});

const footerMenuOptions = document.getElementById("footerMenuOptions");
fillMenuOptions(footerMenuOptions);