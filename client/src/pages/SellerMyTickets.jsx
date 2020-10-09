import React, { useEffect, useState, useContext } from 'react'
import TicketsContainer from '../components/TicketsContainer';
import { getAllTickets } from '../apis/ticketsApi';
import SellerContext from '../SellerContext';

export default function SellerMyTickets() {
    const { seller } = useContext(SellerContext);
    const [myTickets, setMyTickets] = useState([]);
    
    function onTicketDeleted(id) {
        setMyTickets(prevTickets => prevTickets.filter(ticket => ticket._id !== id))
    }
    
    useEffect(() => {
        (async () => {
            try {
                const allTickets = await getAllTickets();

                setMyTickets(allTickets.filter((ticket) => ticket.seller_Id === seller._id));
            } catch (error) {
                console.log(error);
            }
        })();
    }, [seller._id]);

    return (
        <div className="my-tickets-container">
            <h2>My tickets:</h2>

            <TicketsContainer tickets={myTickets} onTicketDeleted={onTicketDeleted}/>
        </div>
    )
}
