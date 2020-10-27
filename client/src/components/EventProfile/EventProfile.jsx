import React, { useEffect, useState } from 'react';
import './eventProfile.css';
import Moment from 'react-moment';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { getTicketById } from '../../apis/ticketsApi';
import Button from '@material-ui/core/Button';

export default function EventProfile({ match }) {
    const [ticket, setTicket] = useState(null);
    const [showSellerDetails, setShowSellerDetails] = useState(false);

    useEffect(() => {
        getTicketById(match.params.id)
            .then(ticket => setTicket(ticket))
            .catch(error => console.log(error));
    }, [match.params.id])

    return (
        ticket && <div className="pageContainer">

            <div className="eventImgProfile">
                <img className="eventImg" src={ticket.category_Id.imgUrl} alt="event" />
            </div>

            <div className="pagePadding">
                <div className="innerContainer">

                    <div className="nameContainer">
                        <p className="eventName">{ticket.ticket_title}</p>
                    </div>

                    <div className="infoContainer">
                        <div className="infoContainerLeft">

                            <p className="location">
                                <RoomOutlinedIcon />{ticket.location}</p>

                            <span className="ticket_dates">
                                <CalendarTodayOutlinedIcon /> <Moment date={ticket.ticket_dates} format="dddd, DD MMMM YYYY" /> </span>
                            |
                            <span className="hour">
                                <WatchOutlinedIcon /><Moment date={ticket.ticket_dates} format="HH:mm" /> </span>


                        </div>

                        <div className="infoContainerRight">
                            <p className="price">{ticket.price}₪</p>
                            <p className="perTicket">Per Ticket</p>
                        </div>

                    </div>
                </div>

                <div className="daysLeftSection">
                    <p className="daysLeftText"> <Moment fromNow>{ticket.ticket_dates}</Moment> </p>
                </div>

                <div className="bottomContainer">
                    <div className="leftBottomContainer">

                        <p className="category">Category: <b>{ticket.category_Id.name}</b></p>

                        <p className="eventDescription">Description: <b>{ticket.description}</b></p>

                        <p className="seatNumber">Seat number: <b>row - {ticket.row} &emsp;seat - {ticket.seats}</b></p>
                    </div>

                    <div className="rightBottomContainer">
                        {
                            showSellerDetails ?
                                <>
                                    <AccountCircleOutlinedIcon fontSize="large" />
                                    <p className="name">{ticket.seller_Id.first_name + " " + ticket.seller_Id.last_name}</p>
                                    <p className="phone">{ticket.seller_Id.tel}</p>
                                    <div className="sendEmail"><a href={`mailto:${ticket.seller_Id.email}`}>Send an email to the seller</a></div>
                                </> :
                                <Button variant="contained" onClick={() => setShowSellerDetails(true)}>Show Seller Details</Button>
                        }
                    </div>

                </div>
            </div>
        </div>

    )
}
