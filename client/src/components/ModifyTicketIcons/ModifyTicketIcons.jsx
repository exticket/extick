import React, { useState } from 'react';
import styles from './ModifyTicketIcons.module.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Link } from 'react-router-dom';
import DeleteDialog from '../DeleteDialog';
import { deleteTicket } from '../../apis/ticketsApi';

export default function ModifyTicketIcons({ ticketId, onTicketDeleted }) {
    const [openDialog, setOpenDialog] = useState(false);

    function deleteHandler() {
        deleteTicket(ticketId)
            .then(res => onTicketDeleted(res.data._id)) //refresh page after deletion
            .catch(error => console.log(error))
    }

    return (
        <div className={styles.iconsContainer}>
            <DeleteOutlineIcon onClick={(e) => { e.preventDefault(); setOpenDialog(true) }} titleAccess="Delete" />
            <Link to={`/ticket/management/${ticketId}`}><EditIcon titleAccess="Edit" /></Link>
            <DeleteDialog deleteHandler={deleteHandler} open={openDialog} setOpen={setOpenDialog} />
        </div>
    )
}
