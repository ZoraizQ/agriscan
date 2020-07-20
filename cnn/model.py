import sys
# from pathlib import Path
import torch
from fastai.vision import *

MODEL_PATH = sys.argv[1]
IMG_PATH = sys.argv[2]
sys.stdout.flush()
CLASSES = []

def Predict(img):
    try:
        learner = load_learner(MODEL_PATH)
        CLASSES = learner.data.classes
        pred = learner.predict(img)
        return pred
    except:
        return "Error predicting"


imageObj = open_image(IMG_PATH)
result = Predict(imageObj)
print(result[0]) # category only
sys.stdout.flush()
