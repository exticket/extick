const express = require('express');
const ticketsCtrl = require('../controllers/ticket-ctrl');
const { loginRequired } = require('../controllers/utils')
const router = express.Router();
const passport = require("passport");

router.post('/', ticketsCtrl.createTicket);
router.get('/', ticketsCtrl.getTickets);
router.get('/mine', loginRequired, ticketsCtrl.getMyTickets);
router.put('/:id', loginRequired, ticketsCtrl.updateTicket);
router.delete('/:id', loginRequired, ticketsCtrl.deleteTicket);
router.get('/:id', ticketsCtrl.getTicketbyid);
module.exports = router;