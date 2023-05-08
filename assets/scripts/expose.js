// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var imag = document.querySelectorAll("img");
  //console.log(imag);

  var volume = document.getElementById("volume");
  console.log(volume);
  var num;
  volume.addEventListener('input', function(){
    num = volume.value;
    //console.log(num);
    if(num == 0){
      imag[1].src = "assets/icons/volume-level-0.svg";
    }
    else if(num < 33){
      imag[1].src = "assets/icons/volume-level-1.svg";
    }
    else if(num < 67){
      imag[1].src = "assets/icons/volume-level-2.svg";
    }
    else if(num <= 100){
      imag[1].src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = num/100;
  })
  var sect = document.querySelector("expose");
  //console.log(section);
  
  var dropdown = document.getElementById("horn-select");
  var name;
  dropdown.addEventListener('change', function(){
    name = dropdown.value;
    //console.log(name);
    if (name == "air-horn"){
      imag[0].src = "assets/images/air-horn.svg";
    }
    else if (name == "car-horn"){
      imag[0].src = "assets/images/car-horn.svg";
    }
    else if (name == "party-horn"){
      imag[0].src = "assets/images/party-horn.svg";
    }
  })
  
  var butt = document.querySelector("button");
  var audio;
  butt.addEventListener('click', function(){
    //console.log("butt");
    audio = document.querySelector("audio");
    console.log(name);
    if (name == "air-horn"){
      audio.src = "assets/audio/air-horn.mp3";
      //audio.volume = num/100;
      audio.play();
    }
    else if (name == "car-horn"){
      audio.src = "assets/audio/car-horn.mp3";
      //audio.volume = num/100;
      audio.play();
    }
    else if (name == "party-horn"){
      audio.src = "assets/audio/party-horn.mp3";
      //audio.volume = num/100;
      audio.play();
    }
  })

}