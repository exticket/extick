import React, { useContext } from 'react';
import SellerContext from '../SellerContext';
import { logoutRequest } from '../apis/authentication-Api';
import { useHistory } from 'react-router-dom';

export default function HelloMsg({ seller }) {
    const { recheck } = useContext(SellerContext);
    const history = useHistory();
    function logOut() {
        logoutRequest()
            .then(() => recheck().then(() => history.push("/")))
            .catch(error => console.log(error));
    }

    return (
        <div className="header-log-area logout-btn">
            <span>{`Hello ${seller.first_name},`}</span>
            <button onClick={() => logOut()}>Log Out</button>
        </div>
    )
}
