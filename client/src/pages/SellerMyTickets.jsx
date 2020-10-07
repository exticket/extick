import React, {useEffect, useState, useContext} from 'react'
import LinkButton from '../components/LinkButton';
import TicketsContainer from '../components/TicketsContainer';
import { getAllTickets } from '../apis/ticketsApi';
import SellerContext from '../SellerContext';

export default function SellerMyTickets() {
    const seller = useContext(SellerContext).seller;
    const [myTickets, setMyTickets] = useState([]);

    const fetchData = React.useCallback(async function fetchData() {
        try {
            const allTickets = await getAllTickets();
            
            setMyTickets(allTickets.filter((ticket) => ticket.seller_Id === seller._id));
        } catch (error) {
            console.log(error);
        }
    }, [seller._id]);

    useEffect(() => {
        seller && fetchData();
    }, [seller, fetchData]);

    return (
        <div className="my-tickets-container">
            <h2>My tickets:</h2>

            <TicketsContainer tickets={myTickets} />
        </div>
    )
}
