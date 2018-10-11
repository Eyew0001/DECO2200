/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    if (screen.width <= 650) {
        document.getElementById("SideNav").style.width = "270px";
          document.getElementById("page-content-wrapper").style.marginLeft = "250px";

        document.getElementById("reveal-heading").style.visibility = "visible";
        document.getElementById("menu-icon").style.visibility = "hidden";
        document.querySelector(".header-bar p").style.visibility = "hidden";   
       document.getElementById("overlay").style.visibility="visible";
    }
    else {
        document.getElementById("page-content-wrapper").style.marginLeft = "250px";
        document.getElementById("SideNav").style.width = "300px";
        

        document.getElementById("reveal-heading").style.visibility = "visible";
        document.getElementById("menu-icon").style.visibility = "hidden";
        document.querySelector(".header-bar p").style.visibility = "hidden";   
       document.getElementById("overlay").style.visibility="visible";
    }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("SideNav").style.width = "0";
    document.getElementById("page-content-wrapper").style.marginLeft = "0";
   
    document.getElementById("reveal-heading").style.visibility = "hidden";
    document.getElementById("menu-icon").style.visibility = "visible";
    document.querySelector(".header-bar  p").style.visibility= "visible";
    document.getElementById("secondary-nav").style.opacity = "1";
    document.getElementById("overlay").style.visibility="hidden";
    closetutorialDrop();
}

function tutorialDrop() {
    document.getElementById("tutorial-list").style.visibility = "visible";

    document.getElementById("tutorial-list").style.height = "100%";
    document.getElementById("tutorial-list").style.marginTop = "10px";

}

function closetutorialDrop() {
    document.getElementById("tutorial-list").style.visibility = "hidden";
    document.getElementById("tutorial-list").style.height = "0";


}