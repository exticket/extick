import React from 'react';
import SellerForm from '../components/SellerForm';

export default function MyAccount() {
    return (
        <div className="my-tickets-container">
            <h2>My Account:</h2>
            <SellerForm editMode className="edit-account"/>
        </div>
    )
}
