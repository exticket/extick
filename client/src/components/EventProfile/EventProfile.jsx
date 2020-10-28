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

            <div className="eventImgProfile" style={{backgroundImage:`url(${ticket.category_Id.img_big})`}}>
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

                        <p className=""><span className="title">Category:</span> <b>{ticket.category_Id.name}</b></p>

                        <p className="eventDescription"><span className="title">Description:</span> <b>{ticket.description}</b></p>

                        <p className="seatNumber"><span className="title">Seat number:</span> <b>row - {ticket.row} &emsp;seat - {ticket.seats}</b></p>
                    </div>

                    <div className="rightBottomContainer">
                        {
                            showSellerDetails ?
                                <div className="seller-details">
                                    <AccountCircleOutlinedIcon fontSize="large" />
                                    <p className="name">{ticket.seller_Id.first_name + " " + ticket.seller_Id.last_name}</p>
                                    <p className="phone">{ticket.seller_Id.tel}</p>
                                    <p className="city">{ticket.seller_Id.city}</p>
                                    <div className="sendEmail"><a href={`mailto:${ticket.seller_Id.email}`}>Send an email to the seller</a></div>
                                </div> :
                                <Button className="show-seller-details" variant="contained" onClick={() => setShowSellerDetails(true)}>Show Seller Details</Button>
                        }
                    </div>

                </div>
            </div>
        </div>

    )
}
