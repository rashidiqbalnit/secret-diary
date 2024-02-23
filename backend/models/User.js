const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{ 
       type: String,
       required: true,
       unique: false,
    },
    email:{ 
        type: String,
        required: true,
        unique: true,
     },
    password:{ 
        type: Date,
        default: Date.now,
     }
  });

  module.exports = mongoose.model('user',UserSchema);