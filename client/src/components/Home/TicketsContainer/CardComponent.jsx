import React from 'react';
import './CardComponent.css';
import { useHistory } from 'react-router-dom';



export default function CardComponent({ eventInfo }) {

    const history = useHistory();

    const dateObject = new Date(eventInfo.ticket_dates);
    const date = dateObject.toLocaleDateString();
    const time = dateObject.toLocaleTimeString();

    const onCardClick = (eventInfo) => {
        console.log(eventInfo);
        history.push({
            pathname: '/eventProfile',
            props: {eventInfo}
        });
    }

    return (

        <div className="card ticket" onClick={() => onCardClick(eventInfo)}>
            <div className="eventImgContainer">
                <img className="eventImg" src={eventInfo.imgUrl} alt="event" />
            </div>

            <p className="eventName">{eventInfo.ticket_title}</p>
            <span className="date">{date} </span>
            |
            <span className="hour">{time}</span>
            <p className="location">{eventInfo.location}</p>
            {/* <p className="sellerName">{eventInfo.seller_Id}</p> */}
            <p className="price">{eventInfo.price} ₪</p>
        </div>
    )
}

