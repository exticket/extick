import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import './AddCardComponent.css';

export default function AddCardComponent() {
    return (
        <div title="Add New Ticket" className="add-card">
            <AddIcon fontSize="Large" className="card-add-icon"/>
        </div>
    )
}
