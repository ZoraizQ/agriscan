import sys
# from pathlib import Path
import torch
from fastai.vision import *

MODEL_PATH = sys.argv[1]
IMG_PATH = sys.argv[2]
print("hello")
sys.stdout.flush()
print("modelPath", MODEL_PATH, "imgpath:", IMG_PATH)
CLASSES = []

def Predict(img):
    learner = load_learner(MODEL_PATH)
    CLASSES = learner.data.classes
    return learner.predict(img)

print("Prediction:", Predict(Image.open(IMG_PATH)))
sys.stdout.flush()