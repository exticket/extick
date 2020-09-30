import React from 'react'
import LinkButton from '../components/LinkButton';

export default function SellerDashboard() {
    return (
        <div>
            <div className="seller-dashboard-header">
                <h1>Your tickets:</h1>
                <LinkButton text="ADD NEW TICKET" url="/sellers/selltickets" className="add-new-ticket" />
            </div>
        </div>
    )
}
