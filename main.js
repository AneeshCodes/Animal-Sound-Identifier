var barking = 0
var meowing = 0
var mooing = 0
var roaring = 0
var bg = 0 

function start()
{
  navigator.mediaDevices.getUserMedia({audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/j3t4PtvTH/model.json',modelReady)
}

function modelReady()
{
  console.log("model is loaded")
  classifier.classify(gotResults)
}

function gotResults(error, results)
{
  if(error){
    console.log(error)
  }
  else{
    console.log(results)
    r = Math.floor(Math.random()*255) + 1;
    g = Math.floor(Math.random()*255) + 1;
    b = Math.floor(Math.random()*255) + 1;  

    var result_label = results[0].label 
    var image = document.getElementById('image')
    if(result_label == "Background Noise"){
      bg = bg + 1
      image.src = "Ear.png";
      bg_text = "Detected Background Noise = " + bg;
      document.getElementById('animal').innerHTML = 'Background Noise'
    }
    if(result_label == "Barking"){
      barking = barking + 1
      image.src = "Dog.jpeg";
      barking_text = "Detected Barking Noise: " + barking;
      document.getElementById('Barking').innerHTML = barking_text
      document.getElementById('animal').innerHTML = 'Barking'
    }
    if(result_label == "Meowing"){
      meowing = meowing + 1
      image.src = "Cat.jpeg";
      meowing_text = "Detected Meowing Noise = " + meowing;
      document.getElementById('Meowing').innerHTML = meowing_text
      document.getElementById('animal').innerHTML = 'Meowing'
    }
    if(result_label == "Mooing"){
      mooing = mooing + 1
      image.src = "Cow.jpg";
      mooing_text = "Detected Mooing Noise = " + mooing;
      document.getElementById('Mooing').innerHTML = mooing_text
      document.getElementById('animal').innerHTML = 'Mooing'
    }
    if(result_label == "Roaring"){
      roaring = roaring + 1
      image.src = "Lion.jpeg";
      roaring_text = "Detected Roaring Noise = " + roaring;
      document.getElementById('Roaring').innerHTML = roaring_text
      document.getElementById('animal').innerHTML = 'Roaring'
    }
  }  
}
