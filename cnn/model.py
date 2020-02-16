import sys
# from pathlib import Path
import pytorch
from PIL import Image

MODEL_PATH = sys.argv[1]
IMG_PATH = sys.argv[2]

print("modelPath", MODEL_PATH, "imgpath:", IMG_PATH)
CLASSES = []

def Predict(img):
    learner = load_learner(MODEL_PATH)
    CLASSES = learner.data.classes
    return learner.predict(img)

print("Prediction:", Predict(Image.open(IMG_PATH)))
sys.stdout.flush()