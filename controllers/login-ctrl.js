const Seller = require('../models/seller-model');
const mongoose= require('mongoose')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const SellerModel = require('../models/seller-model');


function validatePassword(req,res) 
{
  
    SellerModel.findOne({email:req.body.email }, function (err, seller) {
      if (err) {return res.status(200).json({success:false,message:err.message})}
      if (!seller) {return res.status(200).json({success:false,message:'email not found'}) }
      bcrypt.compare(req.body.password, seller.password, (err, result) => {
        if (result===true) {
            return res.status(200).json({success:true,data:seller}) 
            }
            else{
            return res.status(200).json({success:false,message:'incorrect password'}); 
            }
        }); 
       });
  
  }
  module.exports ={ validatePassword}