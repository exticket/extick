import React from 'react';
import { useHistory } from 'react-router-dom';
import './eventProfile.css';
import Moment from 'react-moment';
import moment from 'moment';

export default function EventProfile() {

    let history = useHistory();

    // const [eventInfo, seteventInfo] = useState(eventInfoFromDatabase);
    // console.log(props.location.state.name);
    // const name = location.state.name;
    // console.log(props.name);

    // let strProps = JSON.stringify(history.location.props);
    // let props = JSON.parse(strProps);
    const props = {
        eventInfo: {
            category_Id: "5f621db40298cf322dad5e9c",
            createdAt: "2020-09-21T17:47:41.466Z",
            description: "chris brown show at ha-yarkon 21/10 20:00",
            price: 500,
            row: "50",
            seats: "25",
            seller_Id: "5f7489e50e2f6f143047702d",
            ticket_dates: "2020-10-21T20:00:00.000Z",
            ticket_title: "chris brown show",
            updatedAt: "2020-09-21T18:13:05.737Z",
            __v: 0,
            _id: "5f68e73d9d076719d81b7560",
            location: "Park Hayarkon, Tel Aviv, Israel",
            number_of_tickets: 1,
            seller: {
                _id: "5f6d0e839758771e98d749ad",
                first_name: "Lu",
                last_name: "Kork",
                city: "Bat Yam",
                email: "Lu.korky123@gmail.com",
                tel: "0545286410",
                password: "$2b$10$wX7nJV37rTSaXW4QnpuoB./JEIDg24/ZGhHR4rSJ6KVSaPkaIglbO",
                __v: 0



            }

        }

    };

    console.log("Event Info:");
    console.log(props);
    return (
        <div className="pageContainer">
            <div className="eventImgContainer">
                <img className="eventImg" src={props.eventInfo.imgUrl} alt="event" />
            </div>

            <div className="innerContainer">

                <div className="nameContainer">
                    <p className="eventName">{props.eventInfo.ticket_title}</p>
                </div>

                <div className="infoContainer">
                    <div className="infoContainerLeft">

                        <p className="location">{props.eventInfo.location}</p>

                        <span className="ticket_dates">
                        <Moment date={props.eventInfo.ticket_dates} format="dddd, DD MMMM YYYY" /> </span>
                            |
                            <span className="hour">
                            <Moment date= {props.eventInfo.ticket_dates} format = "HH:mm"/> </span>


                    </div>

                    <div className="infoContainerRight">
                        <p className="price">${props.eventInfo.price}</p>
                        <p className="perTicket">Per Ticket</p>
                    </div>

                </div>
            </div>

            <div className="daysLeftSection">
                <p className="daysLeftText">In 3 Days</p>
            </div>

            <div className="bottomContainer">
                <div className="leftBottomContainer">

                    <p className="category">Category: <b>Sport</b></p>

                    <p className="eventDescription">Description: <b>{props.eventInfo.description}</b></p>

                    <p className="numberOfTickets">Number of tickets: <b>{props.eventInfo.number_of_tickets}</b></p>

                    <p className="seatNumber">Seat number: <b>{props.eventInfo.row}th row {props.eventInfo.seats} seat</b></p>
                </div>

                <div className="rightBottomContainer">
                    <img className="imgRightBottomSection" src="" alt=""/>
                    <p className="name">{props.eventInfo.seller.first_name + " " + props.eventInfo.seller.last_name}</p>
                    <p className="phone">054-5294847</p>
                    <div className="sendEmail">Send an email to the seller</div>
                </div>

            </div>
        </div>
    )
}
