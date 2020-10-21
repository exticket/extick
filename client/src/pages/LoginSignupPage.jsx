import React from 'react';
import Signup from '../components/Signup';
import Login from '../components/Login';
import { useLocation } from "react-router-dom";

export default function LoginSignupPage() {
    return (
        <div className="loginSignupPage">
            <Login location={useLocation()}/>
            <div className="verticalLine" ></div>
            <Signup />
        </div>
    )
}
