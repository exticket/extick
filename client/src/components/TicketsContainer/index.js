import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent';
import { Link, useLocation } from 'react-router-dom';
import AddCardComponent from './AddCardComponent';
import OutOfStock from '../Home/OutOfStock';

export default function TicketsContainer({ tickets, categoryId, onTicketDeleted }) {

    const [currentTickets, setCurrentTickets] = useState([]);
    const pathname = useLocation().pathname;

    useEffect(() => {
        setCurrentTickets(tickets.filter((ticket) => {

            return !categoryId || ticket.category_Id === categoryId;
        })
        )
    }, [categoryId, tickets]);

    return (
        <div className="tickets-container">
            {pathname === '/sellers/mytickets' && <Link to="/sellers/selltickets"><AddCardComponent /></Link>}
            { currentTickets.length === 0 ? <OutOfStock /> : currentTickets.map((ticket) => <CardComponent key={ticket._id} eventInfo={ticket} onTicketDeleted={onTicketDeleted} />)}
        </div>
    )
}

