import React, { useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

import SellerContext from "../SellerContext";

export function WithLoginRequired(RealComponent) {
    return function WithLoginRequiredComponent() {
        const location = useLocation();

        const { seller } = useContext(SellerContext);
        
        if (seller === undefined) {
            return <div>Checking if logged in...</div>
        }

        if (seller !== null) {
            return <RealComponent />
        }
        return <Redirect to={{pathname: "/sellers/selltickets/login", state: {prevUrl: location.pathname}}}/>
    };
}