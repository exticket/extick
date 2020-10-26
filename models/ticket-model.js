const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema(
    {
        ticket_title: { type: String, required: true },

        description: { type: String, required: true },

        ticket_dates: { type: Date, required: true },

        price: { type: Number, required: true },

        seats: { type: String, required: false },

        row: { type: String, required: false },

        seller_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true },

        category_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    },
    { timestamps: true }
);
module.exports = mongoose.model('Ticket', ticketSchema);





