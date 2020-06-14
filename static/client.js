const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 450;
let loaded = false;
let testing = false;
let interacted = false;
let gotplants = false;
let gotexting = false;

let video = document.getElementById("webcam");
let output = document.getElementById("output");
let togglebtn = document.getElementById("togglebtn");
let outputcanvas = document.getElementById("outputcanvas");
let src = new cv.Mat(IMAGE_HEIGHT, IMAGE_WIDTH, cv.CV_8UC4);
let cap = new cv.VideoCapture(webcam);

async function loadmodel(){
  // window.model = await cocoSsd.load();
  window.model = await models.load('static/web_model2');
  loaded = true;
  testnow();
  setTimeout(promptuser, 15000);
}

function toggletest() {
  if (loaded && testing == false) {
    testing = true;
    togglebtn.innerHTML = 'STOP IDENTIFYING';
  } else if (loaded && testing == true){
    testing = false;
    togglebtn.innerHTML = 'LET\'S IDENTIFY';
  }
}

function promptuser() {
  if (!interacted) {
    alert("Happen to have any potted plants in your home? Check them using your camera.");
    interacted = true;
  }
}

async function testnow() {
  cap.read(src);
  
  if (testing) {
    // const image = tf.browser.fromPixels(video);
    const predictions = await model.detect(video);
    
    if (predictions != []){
      interacted = true;
    }
    
    let outputtext = '';
    for (i = 0; i < predictions.length; ++i) {
      outputtext = outputtext + predictions[i]['class'] + ': ' + predictions[i]['score'] + '\n';
      let point1 = new cv.Point(predictions[i]['bbox'][0], predictions[i]['bbox'][1])
      let point2 = new cv.Point(predictions[i]['bbox'][0] + predictions[i]['bbox'][2], predictions[i]['bbox'][1] + predictions[i]['bbox'][3])
      cv.rectangle(src, point1, point2, [255, 0, 0, 255], 2);
      cv.putText(src, predictions[i]['class'], {x: predictions[i]['bbox'][0], y: predictions[i]['bbox'][1]-5}, cv.FONT_HERSHEY_SIMPLEX, 1.0, [255, 0, 0, 255]);
    }
    // image.dispose();
    output.value = outputtext;
    
    for (i = 0; i < predictions.length; ++i) {
      if (predictions[i]['class'] == 'fire_extinguisher') {
        gotexting = true;
      }
      if (predictions[i]['class'] == 'potted_plant') {
        gotplants = true;
      }
    }
  }
  if (gotexting == true) {
    document.getElementById('fire_extinguisher').style.display = 'block';
  } else {
    document.getElementById('fire_extinguisher').style.display = 'none';
  }
  if (gotplants == true) {
    document.getElementById('potted_plants').style.display = 'block';
  } else {
    document.getElementById('potted_plants').style.display = 'none';
  }
  gotexting = false;
  gotplants = false;
  cv.imshow('outputcanvas', src);
  setTimeout(testnow, 100);
}

loadmodel();

navigator.mediaDevices
  .getUserMedia({ audio: false, video: { facingMode: "environment" } })
  .then(stream => {
    video.srcObject = stream;
    video.width = IMAGE_WIDTH;
    video.height = IMAGE_HEIGHT;
  });

togglebtn
  .addEventListener("click", function() {
    toggletest();
  });
