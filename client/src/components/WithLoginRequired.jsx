import React from 'react';

import { useSeller } from "../SellerContext";

export function WithLoginRequired(RealComponent, NotLoggedinComponent) {
    return function WithLoginRequiredComponent() {
      
        const seller = useSeller();

        if (seller.seller === undefined) {
            return <div>Checking...</div>
        }

        if (seller.seller !== null) {
            return <RealComponent />
        }

        return <NotLoggedinComponent />
    };
  }