import React, { useState } from 'react';
import styles from './ModifyTicketIcons.module.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useHistory } from 'react-router-dom';
import DeleteDialog from '../DeleteDialog';
import { deleteTicket } from '../../apis/ticketsApi';

export default function ModifyTicketIcons({ ticketId, onTicketDeleted }) {
    const [openDialog, setOpenDialog] = useState(false);

    const history = useHistory();

    function deleteHandler() {
        deleteTicket(ticketId)
            .then(res => onTicketDeleted(res.data._id)) //refresh page after deletion
            .catch(error => console.log(error))
    }

    function editHandler(event) {
        event.stopPropagation();
        history.push({
            pathname: `/ticket/management/${ticketId}`,
            props: { ticketId }
        });
    }

    return (
        <div className={styles.iconsContainer}>
            <DeleteOutlineIcon onClick={(e) => { e.stopPropagation(); setOpenDialog(true) }} titleAccess="Delete" />
            <EditIcon onClick={editHandler} titleAccess="Edit" />
            <DeleteDialog deleteHandler={deleteHandler} open={openDialog} setOpen={setOpenDialog} />
        </div>
    )
}
