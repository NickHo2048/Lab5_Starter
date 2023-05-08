// explore.js
const synth = window.speechSynthesis;
window.addEventListener('DOMContentLoaded', init);



function init() {
  let voices = [];
  const voiceSelect = document.getElementById("voice-select");
  console.log(voiceSelect);
  const inputTxt = document.getElementById("text-to-speak");

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  var butt = document.querySelector("button");
  butt.addEventListener('click', function(){
  

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    var imag = document.querySelectorAll("img");
    imag[0].src = "assets/images/smiling-open.png"
    utterThis.addEventListener('end', function(){
      imag[0].src = "assets/images/smiling.png"
    })
    
    inputTxt.blur();
  })
}

