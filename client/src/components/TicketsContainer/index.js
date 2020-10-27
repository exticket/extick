import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent';
import { Link, useLocation } from 'react-router-dom';
import AddCardComponent from './AddCardComponent';
import OutOfStock from '../Home/OutOfStock';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function TicketsContainer({ tickets, categoryId, onTicketDeleted }) {

    const [currentTickets, setCurrentTickets] = useState([]);
    const pathname = useLocation().pathname;
    const [searchValue, setSearchValue] = useState("");

    function filterTickets(disableSearch) {
        setCurrentTickets(tickets.filter((ticket) => {
            return !categoryId || ticket.category_Id._id === categoryId;
        }).filter(ticket => disableSearch || !searchValue || ticket.ticket_title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
        )
    }

    useEffect(() => {
        setSearchValue("");
        filterTickets(true);
    }, [categoryId, tickets]);

    function searchHandler() {
        filterTickets();
    }

    return (
        <div className="tickets-container">
            <div className="search-bar">
                <TextField className="search-input" value={searchValue} onChange={event => setSearchValue(event.target.value)} label="Search" variant="outlined" />
                <IconButton onClick={searchHandler}>
                    <SearchIcon />
                </IconButton>
            </div>
            {pathname === '/sellers/mytickets' && <Link to="/sellers/selltickets"><AddCardComponent /></Link>}
            { categoryId && currentTickets.length === 0 ? <OutOfStock /> : currentTickets.map((ticket) => <CardComponent key={ticket._id} eventInfo={ticket} onTicketDeleted={onTicketDeleted} />)}
        </div>
    )
}

