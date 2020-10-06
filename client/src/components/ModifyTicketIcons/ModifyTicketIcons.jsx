import React from 'react'
import styles from './ModifyTicketIcons.module.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Link } from 'react-router-dom';

export default function ModifyTicketIcons({ticketId}) {
    return (
        <div id="TicketIconsContainer" className={styles.iconsContainer}>
            <DeleteOutlineIcon onClick={(e) => {e.stopPropagation(); alert("delete button was pressed")}} titleAccess="Delete"/>
            <Link to={`/ticket/management/${ticketId}`} onClick={(e) => e.stopPropagation()}><EditIcon  titleAccess="Edit"/></Link>
        </div>
    )
}
