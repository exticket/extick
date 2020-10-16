const Ticket = require('../models/ticket-model');
const mongoose = require('mongoose')

const createTicket = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a ticket'
        })
    }
    const ticket = new Ticket(body);

    if (!ticket) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    ticket.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: ticket._id,
                message: 'ticket created!'
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'ticket not created!'
            })
        })
}
const getTickets = (req, res) => {
    Ticket.find()
        .then(tickets => {
                return res.status(200).json({ success:true,data:tickets, message: 'Could not get tickets!'});
               

        })
        .catch(error => {
            return res.status(400).json({
                success: false,
                error: error,
                message: 'Could not get tickets!'
            })
        })
}
const updateTicket = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',

        })
    }
    Ticket.findOne({ _id: req.params.id })
        .then(Ticket => {
            Ticket = transferData(Ticket, body);
            Ticket.save()
                .then(() => {
                    return res.status(200).json({
                        success: true,
                        id: Ticket._id,
                        message: 'ticket updated!',
                    })
                })
                .catch(error => {
                    return res.status(500).json({
                        error: error.message,
                        message: 'ticket could not be updated!'
                    })
                })


        })
        .catch(error => {
            return res.status(404).json({
                error: error.message,
                message: 'ticket not found!',
            })
        })
}

const deleteTicket = (req,res)=>{
    Ticket.findOneAndDelete({ _id:req.params.id}).then(ticket =>{
        if(!ticket){
        return res.status(400).json({success:false,error:'Ticket not found'})}
        return res.status(200).json({success:true,data:ticket})  
    }).catch(err=>console.log(err))
}

const getTicketbyid = (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ success: false, message: 'Id not valid' })
    }
    Ticket.findOne({ _id: req.params.id }).then(ticket => {
        if (!ticket) {
            return res.status(404).json({ success: false, message: 'ticket not found' })
        }

        return res.status(200).json({ success: true, data: ticket })
    }).catch(err => res.status(400).json({ success: false, message: 'ticket request', error: err.message }))
}
module.exports = { getTickets, createTicket, updateTicket, deleteTicket, getTicketbyid }

function transferData(Ticket, body) {
    Ticket.ticket_title = body.ticket_title;
    Ticket.seller_name = body.seller_name;
    Ticket.description = body.description;
    Ticket.time = body.time;
    Ticket.ticket_dates = body.ticket_dates;
    Ticket.price = body.price;
    Ticket.seats = body.seats;
    Ticket.row = body.row;
    Ticket.seller_Id = body.seller_Id;
    Ticket.category_Id = body.category_Id;
    return Ticket;
}



