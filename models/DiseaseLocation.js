const mongoose = require('mongoose');

const diseaselocationSchema = new mongoose.Schema({
  disease: String,
  location: { latitude: Number, longitude: Number},
}, { timestamps: true });

const DiseaseLocation = mongoose.model('DiseaseLocation', diseaselocationSchema);

module.exports = DiseaseLocation;
