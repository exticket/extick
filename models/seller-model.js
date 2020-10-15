const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema(
    {
        first_name:{type:String, required:true},

        last_name:{type:String, required:true},

        city:{type:String, required:true},

        email:{type:String, required:true, unique: true, sparse: true},

        tel:{type:String, required:true},

        password:{type:String, required:true},
        isAdmin: {type:Boolean, default: false}
    },
    // https://github.com/Automattic/mongoose/issues/1020#issuecomment-31455591
    // {
    //     toJSON: {
    //         transform(document) {
    //             document.password = undefined;
    //             document.__v = undefined;
    //             return document;
    //         }
    //     }
    // }
);
module.exports = mongoose.model('Seller', sellerSchema);


