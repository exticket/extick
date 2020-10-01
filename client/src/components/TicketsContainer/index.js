import React, {useEffect, useState} from 'react'
import CardComponent from './CardComponent';

export default function TicketsContainer({ tickets, categoryId }) {

    const [currentTickets, setCurrentTickets] = useState([]);

    useEffect(() => {
        setCurrentTickets(tickets.filter((ticket) => {
            return !categoryId || ticket.category_Id === categoryId;
        })
        )
    }, [categoryId, tickets]);



    return (
        <div className="tickets-container">
            {currentTickets.map((ticket) => <CardComponent key={ticket._id} eventInfo={ticket} />)}
        </div>
    )
}

