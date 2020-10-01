import React, {useEffect, useState} from 'react'
import LinkButton from '../components/LinkButton';
import TicketsContainer from '../components/TicketsContainer';
import { getAllTickets } from '../apis/ticketsApi';

export default function SellerDashboard() {

    const [tickets, setTickets] = useState([]);

    async function fetchData() {
        try {
            setTickets(await getAllTickets());
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="seller-dashboard-header">
                <h1>Your tickets:</h1>
                <LinkButton text="ADD NEW TICKET" url="/sellers/selltickets" className="add-new-ticket" />
            </div>
            <TicketsContainer tickets={tickets} />
        </div>
    )
}
