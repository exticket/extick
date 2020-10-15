const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema(
    {
        ticket_title:{type:String, required:true},

        description:{type:String, required:true},

        ticket_dates:{type:Date, required:true},

        price:{type:Number, required:true},

        seats:{type:String, required:false},

        row:{type:String, required:false},

        seller_Id:{type:String, required:true, index: true, sparse: true},

        category_Id:{type:String, required:true},
    },
    {timestamps:true}
);
module.exports = mongoose.model('Ticket', ticketSchema);