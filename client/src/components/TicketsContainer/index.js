import React from 'react'
import DemoTicket from '../DemoTicket';

export default function TicketsContainer() {
    const tickets = [
        { _id: 1, ticket_title: 'Beyonce' },
        { _id: 2, ticket_title: 'Omer Adam' },
        { _id: 3, ticket_title: 'Tyga' },
        { _id: 4, ticket_title: 'Beyonce' },
        { _id: 5, ticket_title: 'Omer Adam' },
        { _id: 6, ticket_title: 'Tyga' }
    ];

    return (
        <div className="tickets-container">
            {tickets.map((ticket) => <DemoTicket key={ticket._id} ticket={ticket} />)}
        </div>
    )
}

