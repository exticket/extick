import React, {useEffect, useState, useContext} from 'react'
import LinkButton from '../components/LinkButton';
import TicketsContainer from '../components/TicketsContainer';
import { getAllTickets } from '../apis/ticketsApi';
import SellerContext from '../SellerContext';

export default function SellerMyTickets() {
    const seller = useContext(SellerContext).seller;
    const [myTickets, setMyTickets] = useState([]);

    async function fetchData() {
        try {
            const allTickets = await getAllTickets();
            
            setMyTickets(allTickets.filter((ticket) => ticket.seller_Id === seller._id));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        seller && fetchData();
    }, [seller]);

    return (
        <div className="my-tickets-container">
            {/* <div className="seller-dashboard-header">
                <LinkButton text="ADD NEW TICKET" url="/sellers/selltickets" className="add-new-ticket" />
            </div> */}
            <h4>My tickets:</h4>

            <TicketsContainer tickets={myTickets} />
        </div>
    )
}
