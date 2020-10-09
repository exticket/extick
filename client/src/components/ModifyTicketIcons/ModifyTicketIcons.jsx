import React, { useState } from 'react';
import styles from './ModifyTicketIcons.module.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Link, useHistory } from 'react-router-dom';
import DeleteDialog from '../DeleteDialog';
import {deleteTicket} from '../../apis/ticketsApi';

export default function ModifyTicketIcons({ ticketId }) {
    const [openDialog, setOpenDialog] = useState(false);
    const history = useHistory();

    function deleteHandler() {
        deleteTicket(ticketId)
        .then(ticket => history.go(0)) //refresh page after deletion
        .catch(error => console.log(error))
    }
    
    return (
            <div id="TicketIconsContainer" className={styles.iconsContainer}>
                <DeleteOutlineIcon onClick={(e) => { e.stopPropagation(); setOpenDialog(true) }} titleAccess="Delete" />
                <Link to={`/ticket/management/${ticketId}`} onClick={(e) => e.stopPropagation()}><EditIcon titleAccess="Edit" /></Link>
                <DeleteDialog deleteHandler={deleteHandler} open={openDialog} setOpen={setOpenDialog}/>
            </div> 
    )
}
