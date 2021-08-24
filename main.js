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

function gotResults(error, results){
  if(error){
    console.log(error)
  }
  else{
    console.log(results)
  }
}