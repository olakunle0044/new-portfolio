let nav = document.getElementById("nav");
nav.style.maxHeight = "0px";

function toggleMenu(){
  if(nav.style.maxHeight == "0px"){
    nav.style.maxHeight = "300px";
  }else{
    nav.style.maxHeight = "0px";
  }
}