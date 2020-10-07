import React from 'react';

import { useSeller } from "../SellerContext";

export function WithLoginRequired(RealComponent, NotLoggedinComponent) {
    return function WithLoginRequiredComponent() {
      
        const seller = useSeller();

        if (seller.seller === 'initial') {
            return <div>Checking...</div>
        }

        if (seller.seller !== 'not-loggedin') {
            return <RealComponent />
        }

        return <NotLoggedinComponent />
    };
  }