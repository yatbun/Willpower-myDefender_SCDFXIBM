<p align="center">
  <a href="#">
    <img src="https://i.imgur.com/K2kZihh.png" height="200">
    <br>
  </a>
  <b>PROUDLY PRESENTED BY</b>
  <br>
  <b><a href="#wp">TEAM WILLPOWER</a></b>
</p>


<h1 align="center">README.md</h1>

## Table of Contents

- [About Us](#about-us)
- [Project Description](#project-description)
  * [The Problem](#the-problem)
  * [Our Solution](#our-solution)
- [Pitch Video](#pitch-video)
- [Architecture](#architecture)
  * [Overview](#overview)
  * [Benefits](#benefits)
- [Detailed Solution](#detailed-solution)
- [Getting Started](#getting-started)
- [Live Demo](#live-demo)
- [Built With](#built-with)
  * [IBM Services](#ibm-services)
  * [Open Source Projects](#open-source-projects)


<img name="about-us" src="https://i.imgur.com/tHZUxCT.png" width="100%">


## Project Description

### The Problem
A significant number of fire safety violations and cases of fire arises from poor fire safety practices such as discarding items on the corridor. Singaporeans tend to fall prey to complacency from the safety provided by our efficient Civil Defence Force. Hence, there is a need for us to prevent this spread of complacecy and empower our citizens to practise fire safety actively.

### Our Solution
Our website interfaces with the user's camera and analyse the feed for potential fire hazards. Upon detection, it will warn and advise the user of the correct practices. Thus, citizens can actively practise fire safety.


<br><br>

## Pitch Video

-embed video here-


<br><br>

## Architecture

### Overview
<img name="about-us" src="https://i.imgur.com/JK5YvhT.jpg" width="100%">

1. Prepare sets of images for training (resizing, labelling, etc.).

2. Model is then trained:

	a. The data can be fed into Tensorflow  [Object Detection API] for training;

	b. Or, the data can be uploaded onto IBM Cloud Storage and utilise its built in integration with Tensorflow to train the data.

3. Afterwards, the generated models can then be uploaded onto IBM Cloud Foundry.

4. IBM Cloud Foundry then uses Flask to deliver the model to the user's end device.

5. Tensorflow.js will utlise the user's end device built in processing power to perform object detection on the live camera feed.


### Benefits
- <b>Scalable:</b> The training can be done on IBM Cloud to leverage on the processing power available.
- <b>Configurable:</b> The training can be done locally to have maximum control over the training of the data to suit the dataset.
- <b>Expandable:</b> New datasets can be added into the preexisting model accordingly.
- <b>Privacy:</b> Users' camera feed will never be sent to an online API.


<br><br>

## Detailed Solution
Check <a href="DETAILED.md">here</a> for a more detailed explanation for our solution.


<br><br>

## Getting Started
#### To start working on our code:
1. Clone our repo.
  ```
  git clone https://github.com/yatbun/willpower-tfjs.git
  ```

2. Create a virtual environment (optional, but recommended).
  ```
  python -p venv venv
  ```

3. Install dependencies from requirements.txt.
  ```
  pip install -r requirements.txt
  ```

<br>

#### To run the code:
- Run the app.py file.
```
python app.py
```

- Open localhost:8000 in browser.


<br><br>

## Live Demo
Try out a live demo hosted on IBM Cloud Foundry <a href="https://mydefender.mybluemix.net/" target="_blank">here</a>!


<br><br>

## Built With

#### IBM Services
* [IBM Cloud Annotation] - Annotation of Dataset and Model Training
* [IBM Cloud Foundry] - Hosting of Webpage

#### Open Source Projects
* [Tensorflow] - Machine Learning Framework
* [Object Detection API] - Object Detection Model
* [Flask] - Web Framework
* [Python] - duh
* [LabelImg] - Data Annotation




[Object Detection API]: https://github.com/tensorflow/models/tree/master/research/object_detection

[Tensorflow]: https://www.tensorflow.org/
[Flask]: https://palletsprojects.com/p/flask/
[Python]: https://www.python.org/
[LabelImg]: https://github.com/tzutalin/labelImg

[IBM Cloud Annotation]: https://github.com/cloud-annotations
[IBM Cloud Foundry]: https://www.ibm.com/sg-en/cloud/cloud-foundry

<br>

---
<br><br><br><br>
<h3 align="center">Brought to you by Team Willpower</h1>
<p align="center">
  <a href="#">
    <img name="wp" src="https://i.imgur.com/OVMcsxN.png" width="100">
  </a>
</p>
<br><br><br><br><br><br><br><br>