let nav = document.getElementById("nav");
nav.style.maxHeight = "0px";

function toggleMenu(){
  if(nav.style.maxHeight == "0px"){
    nav.style.maxHeight = "100vh";
  }else{
    nav.style.maxHeight = "0px";
  }

}
