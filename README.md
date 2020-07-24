# AgriScan

Deep Learning based Web App for Detection of Plant Diseases (SDG #2)
[DevPost](https://devpost.com/software/hackathon-6gkwix)

Send a picture to AgriBot of a tomato plant leaf (updates for more incoming). It will reply with disease classification predictions for your plant regarding Tomato Yellow Leaf Curl Virus (TYLCV). The location of the sender is registered and populated on a disease map for admins to pinpoint sources of early crop disease.

![SpiderMites](/screenshots/SpiderMites.png)
![TargetSpot](/screenshots/TargetSpot.png)
![Healthy](/screenshots/Healthy.png)

View the Jupyter Notebook for the fast-ai CNN to see how the neural network processes data and its accuracy.

### Prerequisites

Uses a JS to Python connector to run the CNN's python model scripts.

NPM, PIP3, MongoDB relevant dependencies.

## Web Frameworks:
- Express.js
- Bootstrap
- Multer
- NodeJS
- MongoDB
- JS
- HTML5
- CSS3
- VUEJS

## Python Libraries:
- fastai
- numpy
- torch


### Installing

Test using the production link provided or using http://localhost:8080 after installing dependencies and running the following.
```sh
npm install
pip3 install -r requirements.txt
npm start
```

### Facebook Technlogies Used

- flow - vs code extension, type checking JS
- pytorch (fastai) - for training the deep learning network 


## Built With

* Hackathon Boilerplate provided
* Trello for Project Management
* Git for version control
* Heroku for deployment

## Acknowledgments

* https://medium.com/@zachcaceres/deploying-a-deep-learning-image-classification-model-with-fastai-python-and-nodejs-cdc491b56368