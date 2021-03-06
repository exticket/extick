const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema(
    {
        first_name:{type:String, required:true},

        last_name:{type:String, required:true},

        city:{type:String, required:true},

        email:{type:String, required:true},

        tel:{type:String, required:true},

        password:{type:String, required:true},
    }
);
module.exports = mongoose.model('Seller', sellerSchema);


