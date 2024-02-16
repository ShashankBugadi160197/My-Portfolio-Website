function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");  
}

function toggle() {

    var micon = document.getElementById("micon");

    micon.onclick = function () {
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
        micon.src = "./assets/sun.png";
         
        body.style.transition = '3s'
      }
      else{
        micon.src = "./assets/moon.png";
        body.style.transition = '3s'
      }
    }



}