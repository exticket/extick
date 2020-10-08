import React, { useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

import SellerContext from "../SellerContext";

export function WithLoginRequired(RealComponent, NotLoggedinComponent) {
    return function WithLoginRequiredComponent() {
        const location = useLocation();

        const { seller } = useContext(SellerContext);
        
        console.log(seller); 
        if (seller === undefined) {
            return <div>Checking if logged in...</div>
        }

        if (seller !== null) {
            return <RealComponent />
        }
        console.log(location.pathname); 
        // return <NotLoggedinComponent />
        return <Redirect to={{pathname: "/sellers/login", state: {prevUrl: location.pathname}}}/>
    };
}