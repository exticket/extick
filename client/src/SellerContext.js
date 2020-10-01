import React from 'react';

const SellerContext = React.createContext({
    seller:null,
    logOut: () => {}
});

export default SellerContext;