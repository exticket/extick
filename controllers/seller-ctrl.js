const Seller = require('../models/seller-model');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createSeller = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a seller'
        })
    }
    bcrypt.hash(body.password, saltRounds, (err, hash) => {
        console.log("secret hash");
        body.password = hash;
        const seller = new Seller(body); if (!seller) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        seller.save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: seller._id,
                    message: 'seller created!'
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'seller not created!'
                })
            })
    })
}
const getSellers = (req, res) => {
    Seller.find()
        .then(sellers => {
            return res.status(200).json({ success: true, data: sellers });
        })
        .catch(error => {
            return res.status(400).json({
                success: false,
                error: error,
                message: 'Could not get sellers!'
            })
        })
}
const updateSeller = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',

        })
    }
    Seller.findByIdAndUpdate(req.params.id, body)
        .exec()
        .then(Seller => {
            return res.status(200).json({
                success: true,
                id: Seller._id,
                message: 'seller updated!',
            })
        })
        .catch(error => {
            return res.status(500).json({
                error: error.message,
                message: 'seller could not be updated!'
            })
        })

}

const deleteSeller = (req, res) => {
    Seller.findOneAndDelete({ _id: req.params.id }).then(seller => {
        if (!seller) {
            return res.status(400).json({ success: false, error: 'Seller not found' })
        }
        return res.status(200).json({ success: true, data: seller })
    }).catch(err => console.log(err))
}

const getSellerbyid = (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ success: false, message: 'Id not valid' })
    }
    Seller.findOne({ _id: req.params.id }).then(seller => {
        if (!seller) {
            return res.status(404).json({ success: false, message: 'seller not found' })
        }

        return res.status(200).json({ success: true, data: seller })
    }).catch(err => res.status(400).json({ success: false, message: 'seller request', error: err.message }))
}
module.exports = { getSellers, createSeller, updateSeller, deleteSeller, getSellerbyid }
