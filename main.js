prediction_1= " ";
prediction_2= " ";


Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        });
}
console.log('ml5version:' , ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EjpY5jsmJ/model.json',modelloaded);

function modelloaded(){
    console.log(modelloaded);
}

function check(){
    img= document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data_1= "The first prediction is " + prediction_1;
    speak_data_2= " and The second prediction is " + prediction_2;
    var UtterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    UtterThis.rate= 0.5;
    synth.speak(UtterThis);
}

function gotResult(error,results){
    if (error) {
        console.error(error);
    } else 
     console.log(results);
     document.getElementById("result_sign_name").innerHTML= results[0].label;
     document.getElementById("result_sign_name2").innerHTML= results[1].label;
     prediction_1= results[0].label;
     prediction_2= results[1].label;
     speak();
    }
    if(results[0].label== "good")
   {
      document.getElementById("update_sign").innerHTML= "&#128077;";
   }
   if (results[0].label== "piece")
   {
      document.getElementById("update_sign").innerHTML= "&#9996;";
   }
   if (results[0].label== "nice")
   {
      document.getElementById("update_sign").innerHTML= "&#128076;";
   }
   if (results[0].label== "rock")
   {
      document.getElementById("update_sign").innerHTML= "&#9994;"
   }
   if (results[0].label== "paper")
   {
      document.getElementById("update_sign").innerHTML= "&#9995;";
   }
   if (results[0].label== "pointing left")
   {
      document.getElementById("update_sign").innerHTML= "&#128072;";

   }if (results[0].label== "pointing right")
   {
      document.getElementById("update_sign").innerHTML= "&#128073;";

   }if (results[0].label== "thumbs down")
   {
      document.getElementById("update_sign").innerHTML= "&#128078;";

   }if (results[0].label== "pointing up")
   {
      document.getElementById("update_sign").innerHTML= "&#128071;";

   }if (results[0].label== "pointing down")
   {
      document.getElementById("update_sign").innerHTML= "&#128070;";
   }