var img = document.getElementById("img");
var backbtn = document.getElementById("backbtn");
var nextbtn = document.getElementById("nextbtn");

var images = new Array(
    "Images/pic-1.jpg",
    "Images/pic-2.jpg",
    "Images/pic-3.jpg",
    "Images/pic-4.jpg"
  );

let i = 0;

nextbtn.onclick = function (){
  if(i<3){
    img.src = images[i+1];
    i++;
  }
}

backbtn.onclick = function (){
  if(i>0){
    img.src = images[i-1];
    i--;
  }
}
