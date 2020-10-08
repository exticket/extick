import React, {useContext} from 'react';
import SellerContext from '../SellerContext';
import { logoutRequest } from '../apis/authentication-Api';

export default function HelloMsg({seller}) {
    const logOutFunction = useContext(SellerContext).logOut;

    function logOut(){
       logOutFunction();
        logoutRequest();

    }
    return (
        <div className="header-log-area logout-btn">
            <span>{`Hello ${seller.first_name},`}</span>
            <button onClick={() => logOut()}>Log Out</button>
        </div>
    )
}
