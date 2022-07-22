const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
  fullname:{
    type: String,
    required:[true, "Name is required"],
    minlength:[3, "Name must be at least 3 characters"],
  },
  imageUrl:{
    type: String,
    required: [true, "Image Url is required"]
  },
  
  treasureChest:{
    type: Number,
    required: [true, "Treasure is required"],
    min:[0, "Treasure is required" ]
  },
  position:{
    type: String,
    required:[true, "Position is required"]
  },
  catchPhrase:{
    type: String,
    required:[true, "Catch Phrase is required"],
    minlength:[3, "Catch Phrase must be at least 3 characters"],
  },
  pegLeg:{
    type: Boolean,
    default: true
  },
  eyePatch:{
    type: Boolean,
    default: true

  },
  hookHand:{
    type: Boolean,
    default: true
  },
},{timestamps:true})


module.exports.Pirate = mongoose.model('Pirate', PirateSchema);