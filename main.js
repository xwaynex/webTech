function openSlideMenu() {
    document.getElementById("side-menu").style.width="250px";
    /*document.getElementById("").style.marginRight="250px";*/
}
function closeSlideMenu() {
    document.getElementById("side-menu").style.width="0";
    /*document.getElementById("").style.marginRight="0";*/
}
const checkbox =
document.getElementById("checkbox");

checkbox.addEventListener("change", ()=> {
    //change the theme of the website
    document.body.classList.toggle("darkness");
}
);
var i = 0; // Start point
var images= []
var times = 3000;

//image list
images [0] = "./img/Showcase1.jpg"
images [1] = "./img/Showcase2.jpg"
images [2] = "./img/Showcase3.jpg"
images [3] = "./img/Showcase4.jpg"
images [4] = "./img/Showcase5.jpg"

//Change Image
function changeImg(){
    document.getElementById("showcase").src = images[i];

    if(i < images.length -1){
    i++;
    } else {
        i=0;
    }
    setTimeout("changeImg()", times)
}