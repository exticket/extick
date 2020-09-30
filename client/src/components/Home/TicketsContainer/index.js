import React, {useEffect, useState} from 'react'
import {getAllTickets} from '../../../apis/ticketsApi';
import CardComponent from './CardComponent';

let allTickets = [];

export default function TicketsContainer({ categoryId }) {

    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        getAllTickets()
            .then(res => {
                allTickets = res.data.data;
                setTickets(allTickets);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        setTickets(allTickets.filter((ticket) => {
            return categoryId === '1' || ticket.category_Id === categoryId;
        })
        )
    }, [categoryId]);



    return (
        <div className="tickets-container">
            {tickets.map((ticket) => <CardComponent key={ticket._id} eventInfo={ticket} />)}
        </div>
    )
}

