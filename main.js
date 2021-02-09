var SpeechRecognition = window.webkiSpeechRecognition;

var recognition = new SpeechRecognition();


function start ()
{
   document.getElemnentbyId("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {
    
    console.log(event);

    var Content = event.results[0] [0].transcript;
    console.log(Contnent);
    speak();
    document.getElemnentbyId("textbox").innerHTML = Content;
}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = docunment.getElemnentbyId("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
     Webcam.attach(camera);
}

Webcam.set({
    width:360,
    innerHeight:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElemnentbyId("camera")