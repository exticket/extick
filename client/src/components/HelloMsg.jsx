import React, {useContext} from 'react';
import SellerContext from '../SellerContext';

export default function HelloMsg({seller}) {
    const logOutFunction = useContext(SellerContext).logOut;
    return (
        <div className="header-log-area logout-btn">
            <span>{`Hello ${seller.first_name},`}</span>
            <button onClick={() => logOutFunction()}>Log Out</button>
        </div>
    )
}
