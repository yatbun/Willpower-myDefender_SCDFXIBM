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

## Project Description

<img name="about-us" src="https://i.imgur.com/tHZUxCT.png" width="100%">

```
Hi! We are 5 fervent fans of Will.
We believe that with Will, we will have great power.
No fear, cos WILLPOWER is here!
```
<br><br>

## Project Description

### The Problem
With the numerous black swan events in the 2020s, we realised the importance of stemming these events in their nascency to prevent them from escalating into large scale events through upstream solutions. However, current measures to involve the public in upstream solutions have its limitations and can be further improved on with technology. Especially with progression in machine learning and AI, we can harness their power to automate tasks which would otherwise require excessive human time, energy and effort, as well as process data on an unprecedented scale.

### Our Solution
Our web app, myDefender, seeks to empower the general public to be directly involved in the upstream solutions. Equipped with the web app, the public can detect and deal with potential hazards that are within their environment, augmenting the role of relevant authorities in enforcement checks. The web app also serves to be a faster and more efficient way of updating the public of new hazards and events. Thus allowing black swan events to be prevented from spreading.


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
  git clone https://github.com/yatbun/willpower-mydefender_SCDFXIBM.git
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