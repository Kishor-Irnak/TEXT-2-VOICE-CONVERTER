


function convertToVoice() {
  // Get the input element by its id
  var inputElement = document.getElementById("myInput");
  
  // Get the value entered in the textbox
  var inputValue = inputElement.value;

  // Check if the browser supports the Web Speech API
  if ('speechSynthesis' in window) {
    // Create a new SpeechSynthesisUtterance object
    var message = new SpeechSynthesisUtterance();

    // Set the text to be spoken
    message.text = inputValue;

    // Use the default speech synthesis voice
    message.voice = speechSynthesis.getVoices()[0];

    // Optional: Set the rate and pitch of the speech
    message.rate = 1; // Speech rate (1 is the default)
    message.pitch = 1; // Speech pitch (1 is the default)

    // Speak the text
    window.speechSynthesis.speak(message);
  } else {
    // Browser doesn't support speech synthesis
    alert("Sorry, your browser doesn't support text-to-speech.");
  }
}

