// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  /**
   * Purpose: load and populate Select Voice
   */
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");

  let voices = []; 
  function populateVoiceList(){
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
  
  /**
   * Purpose:
   * user's text is read aloud using the voice they picked
   *                      AND
   * face swap WHILE text is being read aloud
   */
  const textToSpeak = document.getElementById("text-to-speak");
  const button = document.querySelector("button");
  const img = document.querySelector("#explore img");

  button.addEventListener("click",() =>{
    const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    
    img.src = "assets/images/smiling-open.png";

   utterThis.onend = () =>{
      img.src = "assets/images/smiling.png";
    };

    synth.speak(utterThis);
  });

}