/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openHa() {
    var x = document.getElementsByClassName("navbar");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.width = '20%';
    }

    var y = document.getElementsByClassName("sidenav-link");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.visibility = "visible";
    }

    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("cont").style.overflow = "hidden";
    document.getElementById("cont").style.marginLeft ="20%";
}
function closeHa() {
    var y = document.getElementsByClassName("sidenav-link");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.visibility = "hidden";
    }
    var x = document.getElementsByClassName("navbar");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.width = '0%';
    }

    
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("cont").style.overflow = "visible";
    document.getElementById("cont").style.marginLeft ="0%";

}

function hover(element) {
    element.setAttribute('src', 'img/common/menu-hover.png');
}

function unhover(element) {
    element.setAttribute('src', 'img/common/menu.png');
}



