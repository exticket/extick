import React from 'react';
import './CardComponent.css';
import { useHistory } from 'react-router-dom';
import ModifyTicketIcons from '../ModifyTicketIcons';
import IsNotValidDate from '../Home/ValidDate';

export default function CardComponent({ eventInfo, onTicketDeleted }) {
    const history = useHistory();

    const dateObject = new Date(eventInfo.ticket_dates);
    const date = dateObject.toLocaleDateString();
    const time = dateObject.toLocaleTimeString();


    const onCardClick = () => {
        history.push({
            pathname: `/eventProfile/${eventInfo._id}`,
            props: { eventInfo }
        });
    }

    // if (eventInfo.ticket_dates.getTime(date) - Date.now() <= 0){


    // }
    return (

        <div title="Click For Details" className="card ticket" onClick={() => onCardClick()}>
            <div className="eventImgContainer">
                <img className="eventImg" src={eventInfo.imgUrl} alt="event" />
                <div className="card-header">
                    <div className="circle-icon"></div>
                    <span className="eventName">{eventInfo.ticket_title}</span>
                </div>
            </div>

            <div className="card-content">
                <p className="date">{date} </p>

                <p className="hour">{time}</p>
                <p className="location">{eventInfo.location}</p>
                {/* <p className="sellerName">{eventInfo.seller_Id}</p> */}
                <p className="price">{eventInfo.price} ₪</p>
                {history.location.pathname === '/sellers/mytickets' && <ModifyTicketIcons ticketId={eventInfo._id} onTicketDeleted={onTicketDeleted} />}
            </div>
        </div>
    )
}

