import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function EventProfile() {

    let history = useHistory();

    // const [eventInfo, seteventInfo] = useState(eventInfoFromDatabase);
    // console.log(props.location.state.name);
    // const name = location.state.name;
    // console.log(props.name);

    let strProps = JSON.stringify(history.location.props);
    let props = JSON.parse(strProps);
    console.log("Event Info:");
    console.log(props);

    let fullTimeDate = String(props.eventInfo.ticket_dates).split("T");
    let date = fullTimeDate[0];
    let time = fullTimeDate[1];
    time = time.split(".")[0];

    return (
            <div className="">
                <div className="eventImgContainer">
                    <img className="eventImg" src={props.eventInfo.imgUrl} alt="event" />
                </div>

                <p className="eventName">{props.eventInfo.ticket_title}</p>
                <p className="eventDescription">{props.eventInfo.description}</p>

                <span className="ticket_dates">{date} </span>
                |
                <span className="hour">{time}</span>

                <p className="location">{props.eventInfo.location}</p>
                <p className="sellerName">{props.eventInfo.seller_Id}</p>

            <p className="price">{props.eventInfo.price} ₪</p>
        </div>
    )
}
